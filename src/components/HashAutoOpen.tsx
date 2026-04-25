"use client";

import { useEffect } from "react";

export function HashAutoOpen() {
  useEffect(() => {
    const openAndScroll = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (!hash) return;
      const el = document.getElementById(hash);
      if (!el) return;
      let parent: HTMLElement | null = el.parentElement;
      while (parent) {
        if (parent.tagName === "DETAILS") {
          (parent as HTMLDetailsElement).open = true;
        }
        parent = parent.parentElement;
      }
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };

    openAndScroll();
    window.addEventListener("hashchange", openAndScroll);
    return () => window.removeEventListener("hashchange", openAndScroll);
  }, []);

  return null;
}
