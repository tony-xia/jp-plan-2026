import type { Address } from "@/lib/schema";
import { appleMapsUrl, googleMapsUrl } from "@/lib/maps";
import { t } from "@/lib/strings";

export function AddressLinks({ address }: { address: Address }) {
  return (
    <div className="text-sm leading-relaxed">
      <div className="text-foreground">{address.full.zh}</div>
      {address.full.en && (
        <div className="annot">{address.full.en}</div>
      )}
      <div className="annot annot-ja">{address.full.ja}</div>
      <div className="mt-2 flex gap-2">
        <a
          href={appleMapsUrl(address)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-3 py-1 text-xs border border-hairline rounded-full text-foreground hover:border-accent hover:text-accent transition-colors"
        >
          {t.openInAppleMaps}
        </a>
        <a
          href={googleMapsUrl(address)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-3 py-1 text-xs border border-hairline rounded-full text-foreground hover:border-accent hover:text-accent transition-colors"
        >
          {t.openInGoogleMaps}
        </a>
      </div>
    </div>
  );
}
