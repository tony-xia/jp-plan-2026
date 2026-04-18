import type { Address } from "./schema";

export function appleMapsUrl(address: Address): string {
  return `https://maps.apple.com/?q=${encodeURIComponent(address.full.ja)}`;
}

export function googleMapsUrl(address: Address): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.full.ja)}`;
}
