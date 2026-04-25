"use client";

import { useState } from "react";

export function CopyLinkButton({ anchorId }: { anchorId: string }) {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${anchorId}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.hash = anchorId;
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={copied ? "已复制链接" : "复制此地点链接"}
      title={copied ? "已复制" : "复制链接"}
      className="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full text-muted hover:text-accent hover:bg-white/70 transition-colors text-sm leading-none"
    >
      {copied ? "✓" : "🔗"}
    </button>
  );
}
