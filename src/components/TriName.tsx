import type { TriName as TriNameType } from "@/lib/schema";

type Props = {
  name: TriNameType;
  as?: "h1" | "h2" | "h3" | "span" | "div";
  primaryClassName?: string;
  showAnnotations?: boolean;
};

export function TriName({
  name,
  as: Tag = "span",
  primaryClassName = "",
  showAnnotations = true,
}: Props) {
  return (
    <span className="inline-flex flex-col">
      <Tag className={primaryClassName}>{name.zh}</Tag>
      {showAnnotations && (
        <span className="annot mt-0.5">
          {name.en && <span className="mr-2">{name.en}</span>}
          <span className="annot-ja">{name.ja}</span>
        </span>
      )}
    </span>
  );
}
