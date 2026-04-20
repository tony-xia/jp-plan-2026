import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { TravelTime } from "./schema";

const SECTION_HEADER = "## Travel times (auto-generated — do not edit by hand)";
const SECTION_MARKER_END = "<!-- /travel-times -->";

// Parses the auto-generated table in docs/requirements.md and returns the
// successful entries. Errored rows (marked with ⚠️) are skipped. Returns [] if
// the section is missing — the site still builds without travel times.
export function loadTravelTimes(): TravelTime[] {
  const reqPath = join(process.cwd(), "docs/requirements.md");
  if (!existsSync(reqPath)) return [];
  const md = readFileSync(reqPath, "utf8");
  const start = md.indexOf(SECTION_HEADER);
  if (start < 0) return [];
  const endMarker = md.indexOf(SECTION_MARKER_END, start);
  const end = endMarker === -1 ? md.length : endMarker;
  const section = md.slice(start, end);

  const out: TravelTime[] = [];
  // Row format emitted by fetch-travel-times.mjs:
  // | `from-id` → `to-id` | Label → Label | **42 min** / 12.3 km |
  const rowRegex =
    /\|\s*`([a-z0-9-]+)`\s*→\s*`([a-z0-9-]+)`\s*\|[^|]+\|\s*\*\*(\d+)\s*min\*\*\s*\/\s*([\d.]+)\s*km\s*\|/g;
  let m: RegExpExecArray | null;
  while ((m = rowRegex.exec(section)) !== null) {
    out.push({
      from: m[1],
      to: m[2],
      durationMin: parseInt(m[3], 10),
      distanceKm: parseFloat(m[4]),
    });
  }
  return out;
}
