"use client";
import { useEffect } from "react";


export default function Ga4Events() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const tryInit = (attempts: number): void => {
      const gtag = window.gtag;
      if (typeof gtag !== "function") {
        if (attempts < 30) setTimeout(() => tryInit(attempts + 1), 200);
        return;
      }
      initTracking(gtag);
    };
    tryInit(0);
  }, []);
  return null;
}

function initTracking(gtag: typeof window.gtag): void {
  // 1. Scroll-depth milestones
  const milestones: number[] = [25, 50, 75, 100];
  const reached: Set<number> = new Set<number>();

  const computePercent = (): number => {
    const h = document.documentElement;
    const total = h.scrollHeight;
    const scrolled = window.scrollY + window.innerHeight;
    return total > 0 ? Math.max(0, Math.min(100, (scrolled / total) * 100)) : 0;
  };

  const check = (): void => {
    const pct = computePercent();
    for (const m of milestones) {
      if (pct >= m && !reached.has(m)) {
        reached.add(m);
        gtag("event", "scroll_depth", {
          event_category: "engagement",
          event_label: m + "%",
          value: m,
          page_path: window.location.pathname,
          page_title: document.title,
        });
      }
    }
  };

  let throttle: ReturnType<typeof setTimeout> | undefined;
  const onScroll = (): void => {
    if (throttle !== undefined) return;
    throttle = setTimeout(() => {
      check();
      throttle = undefined;
    }, 200);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.setTimeout(check, 100);

  // 2. Click tracking on anchors and buttons
  const onClick = (e: MouseEvent): void => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const link = target.closest
      ? (target.closest("a, button") as HTMLElement | null)
      : null;
    if (!link) return;
    const anchor = link as HTMLAnchorElement | HTMLButtonElement;
    const rawHref = anchor.getAttribute ? anchor.getAttribute("href") || "" : "";
    const fullHref = (anchor as HTMLAnchorElement).href || "";
    const isExternal = fullHref.indexOf("http") === 0 && fullHref.indexOf(window.location.origin) !== 0;
    const isDevto = fullHref.indexOf("dev.to/") !== -1;
    const explicit = link.getAttribute ? link.getAttribute("data-cta") : null;
    const aria = link.getAttribute ? link.getAttribute("aria-label") : null;
    const text = (link.textContent || "").trim().slice(0, 60);
    const label = explicit || aria || text || "unknown";
    let targetHost = "";
    if (isExternal) {
      try { targetHost = new URL(fullHref).hostname; } catch (err) { /* noop */ }
    }
    gtag("event", "cta_click", {
      event_category: "engagement",
      event_action: isExternal ? "outbound" : "internal",
      event_label: label,
      cta_href_raw: rawHref,
      cta_href_full: fullHref,
      cta_target_host: targetHost,
      cta_target_devto: isDevto,
      page_path: window.location.pathname,
    });
  };
  document.addEventListener("click", onClick);

  // 3. Time-on-page
  const start = Date.now();
  let flushed = false;
  const flushTime = (): void => {
    if (flushed) return;
    flushed = true;
    const elapsed = Math.round((Date.now() - start) / 1000);
    if (elapsed < 3) return;
    let deepest: number = 0;
    reached.forEach((m: number) => { if (m > deepest) deepest = m; });
    gtag("event", "page_engaged", {
      event_category: "engagement",
      event_label: "time_on_page",
      value: elapsed,
      page_path: window.location.pathname,
      reached_depth: deepest,
    });
  };
  window.addEventListener("pagehide", flushTime);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") flushTime();
  });
}
