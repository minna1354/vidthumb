import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube Banner Size: 2560x1440 and the 2026 Safe-Area Guide",
  description:
    "The exact YouTube banner size for every device in 2026 (TV, desktop, mobile). Covers the 1546x423 web-safe area, 1235x338 TV-safe area, file format, file size limit, color mode, plus a free safe-area checker and Canva + Figma templates.",
  keywords: [
    "youtube banner size",
    "youtube channel art size",
    "youtube banner dimensions 2026",
    "youtube safe area",
    "youtube banner tv safe area",
    "2560x1440",
    "1546x423",
    "1235x338",
  ],
  alternates: { canonical: "https://vidthumb.co/blog/youtube-banner-size" },
  openGraph: {
    title: "YouTube Banner Size: 2560x1440 and the 2026 Safe-Area Guide",
    description:
      "The exact YouTube banner size for every device in 2026 (TV, desktop, mobile).",
    type: "article",
    url: "https://vidthumb.co/blog/youtube-banner-size",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Banner Size: 2560x1440 and the 2026 Safe-Area Guide",
    description:
      "The exact YouTube banner size for every device in 2026 (TV, desktop, mobile).",
  },
};

const content = `
> **TL;DR.** Upload **2560 x 1440 px** *(also called "channel art" on YouTube — they are the same thing)*, as **PNG or JPG**, **<= 6 MB**, **sRGB**. Keep your logo and text inside the **1546 x 423 px** center "safe area" so nothing gets cropped on mobile or desktop. Want it to look perfect on smart TVs too? Center your most important elements inside the **1235 x 338 px** inner "TV-safe" box. Use the free [safe-area checker](https://vidthumb.co/tools/safe-area) at the bottom of this article to preview every device crop before you upload.

> **Disclosure.** vidthumb.co publishes the free safe-area checker referenced in this guide. All recommendations are first-party and editorial.

Your YouTube banner is the first thing visitors see before they click a single video — and the first one that gets cut in half on TV. The single most common mistake we see in submitted banners is straightforward: text and logos placed outside the safe area, where the mobile and desktop crops drop them. This guide gives you the exact 2026 numbers, why Google chose them, and how to make a banner that survives every device crop without re-exporting it three times.

## Why your banner looks wrong on TV (and how YouTube decides where to crop it in 2026)

YouTube renders your single uploaded banner across **five core device classes**: desktop, mobile, tablet, smart TV, and game console. Each one applies a different crop:

- **Smart TVs and game consoles** show the full 2560 x 1440 image.
- **Desktop** shows the central horizontal strip, with whitespace on top and bottom.
- **Mobile** shows only the center 1546 x 423 zone, biased toward the upper-middle.
- **Tablets** fall between desktop and mobile depending on orientation.
- **Embedded players** (channel shelf, comments overlay) crop tightly to the safe area.

The catch: the *full* image is only shown on TVs and consoles. Every other device chops off the top, bottom, and sides. If your social handles, upload schedule, or merch URL sit anywhere outside the safe area, they will be invisible to most viewers. The numbers below come straight from Google's [YouTube channel art help page](https://support.google.com/youtube/answer/2972003) and the [YouTube Data API v3](https://developers.google.com/youtube/v3/docs/channelBanners/insert), which is the only place Google publishes exact crop coordinates.

## The three rectangles every YouTube banner must satisfy

Think of banner design as three nested rectangles. Design top-down: outer canvas, web safe, inner TV safe.

### Layer 0: Full canvas — 2560 x 1440 px

This is what TVs, game consoles, and embedded hero views see in full. Treat it as a **background layer**. Use it for brand colors, gradients, photo backdrops, or repeating textures — never for text or small logos.

- Some older smart TVs apply additional overscan, cropping up to about 5% off the outer edge. Keep critical background detail at least 50 px from any edge.
- During slow page loads, mobile users briefly see this layer at 16:9 before the rest of the channel UI hydrates in. A clean background pays off twice.

### Layer 1: Web safe area — 1546 x 423 px, horizontally centered

This is what desktop, mobile, and tablet users see in full. **All logos, upload schedules, social handles, and any legible tagline must live inside this rectangle.** The rectangle is centered horizontally on the canvas and biased toward the upper-middle of the image.

- Position: x: 507–2053, y: roughly 315–738 (centered horizontally, upper-middle biased)
- Roughly 31% of the canvas width.
- This is where the overwhelming majority of viewers will see content.

### Layer 2: TV safe area — 1235 x 338 px, perfectly centered (both ways)

If you want your banner to look great on smart TVs too, place the most critical element (usually your logo or wordmark) inside this inner box.

- Position: x: 663–1898, y: 551–889 (perfectly centered)
- Exactly 48.2% of the canvas width.
- Anything important outside this rectangle will be cropped on connected TVs.

### Quick visual map

~~~
+----------------------------------------------------------+
|                                                          |
|   +-------- 2560 x 1440 (background only) --------+      |
|   |                                               |      |
|   |     +--- 1546 x 423 (web safe, content) --+   |      |
|   |     |                                       |   |      |
|   |     |     +- 1235 x 338 (TV safe) -+       |   |      |
|   |     |     |                        |       |   |      |
|   |     |     |      [ logo ]          |       |   |      |
|   |     |     |                        |       |   |      |
|   |     |     +------------------------+       |   |      |
|   |     |                                       |   |      |
|   |     +---------------------------------------+   |      |
|   |                                                  |      |
|   +--------------------------------------------------+      |
|                                                          |
+----------------------------------------------------------+
~~~

## YouTube banner specs at a glance

| Spec | Value | Notes |
|---|---|---|
| Dimensions | **2560 x 1440 px** | The only resolution YouTube accepts in 2026. Below = blurry on TVs. Above = auto-downscaled. |
| Aspect ratio | 16:9 | Same as YouTube player. |
| File format | PNG or JPG | PNG-24 for screenshots; JPG q=92 for photos. |
| Max file size | 6 MB | Above this fails silently with no clear error. |
| Color mode | sRGB | CMYK = washed-out reds on OLED TVs. |
| Safe area (web) | 1546 x 423 px, upper-middle | All logos, schedule, socials. |
| Safe area (TV) | 1235 x 338 px, dead center | Logos only if you care about TVs. |
| Bit depth | 8-bit | 16-bit silently downsamples to 8. |
| DPI | 72 | Ignored by YouTube but kept for design tools. |
| Transparency | Allowed, becomes black | Useful for overlay animations. |
| Animation | Static only | GIF and APNG fall back to first frame. |

If you want a single, easy rule: **make a 2560 x 1440 canvas, drop everything important inside the center 1546 x 423 box, leave the rest as background, and export as PNG or JPG under 6 MB.** That alone covers the vast majority of channels correctly.

## How to make a YouTube banner in 5 minutes (free, no Photoshop)

### Step 1 — Open the free safe-area overlay

[vidthumb.co/tools/safe-area](https://vidthumb.co/tools/safe-area) publishes a free PNG overlay with all three rectangles pre-drawn on a transparent 2560 x 1440 canvas. Drag it into your editor of choice as the bottom layer; design on top, hide the overlay when exporting, and ship.

Other free options that already include YouTube's safe area:

- **Canva**: search for "YouTube Channel Art" — newer templates include the safe area, but double-check the inner box against the numbers above.
- **Figma Community**: search "YouTube channel art safe area" — several community files have updated overlays.
- **Photopea** (free, in-browser Photoshop clone): start a new 2560 x 1440 file, then layer the safe-area PNG on top.

### Step 2 — Drop in your brand assets

Place your logo, tagline, upload schedule, and social handles **inside the 1546 x 423 box** (centered). If you have a hero logo, put it inside the 1235 x 338 inner box too.

Order of priority if you cannot fit everything in the TV-safe area:

1. Logo or wordmark
2. Upload schedule
3. Social handles
4. Tagline
5. Decorative imagery

Background outside the safe area: gradient, photo, or pattern. Atmosphere is fine; critical content is not.

### Step 3 — Preview all device crops

Before exporting, simulate what users will see on each device class. In Figma, add three artboards:

- **Mobile crop**: 1546 x 423 frame, centered on the canvas
- **Desktop crop**: full canvas with the safe area highlighted
- **TV crop**: full canvas at original size

Or use the [vidthumb.co safe-area checker](https://vidthumb.co/tools/safe-area) — it overlays all three rectangles on your image so you can see exactly where things will and won't appear.

### Step 4 — Export

- **Format**: PNG-24 (lossless), or JPG at quality 92 (smaller file, good for photos)
- **Color mode**: sRGB (verify in your export dialog — some tools default to "Don't convert")
- **File size**: keep total under 6 MB; for PNG, run through [TinyPNG](https://tinypng.com) if needed
- **Filename**: youtube-banner-2560x1440.png (no spaces, no accents)

### Step 5 — Upload and verify

1. Sign in to [YouTube Studio](https://studio.youtube.com)
2. **Customization → Branding → Channel art → Upload**
3. Preview on YouTube mobile app, desktop, and a smart TV if possible
4. Verify your branding still resolves correctly on the channel page

## Five common mistakes that break YouTube banners in 2026

### 1. Treating 2560 x 1440 as the design canvas

The single most common beginner mistake. You lay out your design at full size, then upload, and on mobile only the middle 31% survives. Fix: design *inside* the 1546 x 423 box from the start; treat the rest as protective background.

### 2. Putting social handles in the corners

URLs, Instagram, TikTok handles, "New video every Friday" — all of these end up cropped on mobile. Move them to the center band.

### 3. Using CMYK or "Adobe RGB"

YouTube strips both down to sRGB on upload, which makes reds look orange and blues look flat. Always design in sRGB and verify on export.

### 4. Exporting above 6 MB

Common when designers export flattened PSD files at 100% quality with all layers. YouTube rejects silently — the upload just does not go through, with no clear error message. Always compress under 6 MB before upload.

### 5. Using a safe-area template from before 2024

Older safe-area templates (pre-2018) used slightly different numbers; they fit older TVs but look awkward on 2026 displays. Use the overlay above or any template dated 2024 or later.

## FAQ

### What is the YouTube banner size in 2026?

Exactly **2560 x 1440 pixels**. The aspect ratio is 16:9. This is also the recommended upload size for channel art (the same thing) and works on TVs, desktop, mobile, and game consoles. For the matching thumbnail spec, see our [YouTube Thumbnail Size Guide](https://vidthumb.co/blog/youtube-thumbnail-size-guide).

### What is the safe area for a YouTube banner?

The safe area for desktop and mobile is **1546 x 423 pixels**, centered horizontally and biased toward the upper-middle of the canvas. The TV-only safe area is **1235 x 338 pixels**, perfectly centered. All logos, text, and critical content must fit inside the larger box at minimum.

### What is the YouTube banner size for mobile?

Mobile shows the center **1546 x 423 pixels**, biased slightly above center. Anything outside this rectangle will be cropped out on phones.

### What file size and format should I use?

**PNG or JPG**, **<= 6 MB**, **sRGB color mode**. PNG-24 is best for screenshots; JPG at quality 92 is best for photos. Above 6 MB fails silently; CMYK colors render washed-out.

### Can I use a GIF or animated banner?

No. YouTube strips animation and shows only the first frame. If you want animation, host an MP4 or Lottie file elsewhere and link to it from your channel description.

### Why does my banner look fine in the editor but cut off on TV?

Your editor shows the full 2560 x 1440 canvas, but most viewers do not. TVs and consoles show it in full; desktop, mobile, and tablet viewers see tighter crops. Design for the crops you cannot easily preview, not the ones you can.

### Does YouTube auto-resize my banner if it is the wrong size?

Below 2560 x 1440, YouTube upscales bilinearly, which blurs text edges on TVs. Above 2560 x 1440, YouTube silently downscales. Always upload at exactly 2560 x 1440.

### Will my banner crop differently in 2026 than in 2024?

The numbers have not changed since 2015. Old tutorials with "1546 x 423" remain correct. What has changed is that more devices render the full image today than in 2024, which makes the TV-safe area more important than it used to be.

### How do I make a YouTube Shorts banner?

Shorts use a vertical 9:16 layout that does not reuse the channel banner; the specs are different. See our [YouTube Shorts Thumbnail Size guide](https://vidthumb.co/blog/youtube-shorts-thumbnail-size) for the 1080 x 1920 spec and safe-area layout.

## Free safe-area checker (no email, no signup)

Drop your finished banner into [vidthumb.co/tools/safe-area](https://vidthumb.co/tools/safe-area) to preview every device crop in one click — desktop, mobile, tablet, and TV. The checker overlays YouTube's three published safe-area rectangles on your image and flags anything placed outside them. Free, no signup.

For an editable starting point in Figma or Canva, the community file index at [Figma Community](https://www.figma.com/community) and the "YouTube Channel Art" search inside Canva both surface templates you can copy in one click. Cross-check any third-party template against the numbers above before publishing.

## CTA: ship your banner today

Three steps, ten minutes:

1. Open [vidthumb.co/tools/safe-area](https://vidthumb.co/tools/safe-area)
2. Drop in your logo, tagline, and schedule inside the center band
3. Export and upload to YouTube Studio → Customization → Branding

Your channel will look pro on every device the same afternoon. If you want a second opinion before publishing, drop the PNG into the free checker and review all the device crops in one place.

- **Check your banner**: [vidthumb.co/tools/safe-area](https://vidthumb.co/tools/safe-area)
- **Read next**: [YouTube Thumbnail Tips for Clicks](https://vidthumb.co/blog/youtube-thumbnail-tips-for-clicks) — the companion guide on getting thumbnails right (the other half of what your visitors see first)

## Related guides on vidthumb.co

- [YouTube Thumbnail Size Guide](https://vidthumb.co/blog/youtube-thumbnail-size-guide)
- [YouTube Shorts Thumbnail Size](https://vidthumb.co/blog/youtube-shorts-thumbnail-size)
- [YouTube Thumbnail Tips for Clicks](https://vidthumb.co/blog/youtube-thumbnail-tips-for-clicks)
- [YouTube Description Tips](https://vidthumb.co/blog/youtube-description-tips)
- [7-Day Content Sprint Retrospective](/blog/vidthumb-7-day-sprint-retrospective) - the build-in-public debrief of the week this blog launched
- [Cross-post on Dev.to: Building a Safe-Area Checker](https://dev.to/minna-builds/i-built-a-free-safe-area-checker-for-youtube-banners-heres-what-i-learned-about-the-2560x1440-4e64) - 930-word write-up of how I built the same tool

## Methodology and data

Numbers in this article come from two primary sources: the [official YouTube help page on channel art](https://support.google.com/youtube/answer/2972003) and the [YouTube Data API v3 channelBanners endpoint](https://developers.google.com/youtube/v3/docs/channelBanners/insert). The 1546 x 423 and 1235 x 338 safe-area rectangles are reproduced from the API documentation rather than measured independently by vidthumb.co. Recommendations reflect vidthumb.co's editorial experience building channel banners since 2022 and may be updated as Google revises the spec; if you spot a number here that no longer matches what YouTube Studio shows, please [let us know](mailto:team@vidthumb.co) so we can correct the article.


`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the YouTube banner size in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Exactly 2560 x 1440 pixels. The aspect ratio is 16:9. This is also the recommended upload size for channel art (the same thing) and works on TVs, desktop, mobile, and game consoles. For the matching thumbnail spec, see our YouTube Thumbnail Size Guide."
      }
    },
    {
      "@type": "Question",
      "name": "What is the safe area for a YouTube banner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The safe area for desktop and mobile is 1546 x 423 pixels, centered horizontally and biased toward the upper-middle of the canvas. The TV-only safe area is 1235 x 338 pixels, perfectly centered. All logos, text, and critical content must fit inside the larger box at minimum."
      }
    },
    {
      "@type": "Question",
      "name": "What is the YouTube banner size for mobile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mobile shows the center 1546 x 423 pixels, biased slightly above center. Anything outside this rectangle will be cropped out on phones."
      }
    },
    {
      "@type": "Question",
      "name": "What file size and format should I use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PNG or JPG, up to 6 MB, in sRGB color mode. PNG-24 is best for screenshots; JPG at quality 92 is best for photos. Files above 6 MB fail silently; CMYK colors render washed-out."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a GIF or animated banner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. YouTube strips animation and shows only the first frame. If you want animation, host an MP4 or Lottie file elsewhere and link to it from your channel description."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my banner look fine in the editor but cut off on TV?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your editor shows the full 2560 x 1440 canvas, but most viewers do not. TVs and consoles show it in full; desktop, mobile, and tablet viewers see tighter crops. Design for the crops you cannot easily preview, not the ones you can."
      }
    },
    {
      "@type": "Question",
      "name": "Does YouTube auto-resize my banner if it is the wrong size?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Below 2560 x 1440, YouTube upscales bilinearly, which blurs text edges on TVs. Above 2560 x 1440, YouTube silently downscales. Always upload at exactly 2560 x 1440."
      }
    },
    {
      "@type": "Question",
      "name": "Will my banner crop differently in 2026 than in 2024?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The numbers have not changed since 2015. Old tutorials with 1546 x 423 remain correct. What has changed is that more devices render the full image today than in 2024, which makes the TV-safe area more important than it used to be."
      }
    }
  ]
};

function renderInline(text: string) {
  const out: any[] = [];
  let buf = "";
  let i = 0;
  let key = 0;
  const flush = () => { if (buf) { out.push(buf); buf = ""; } };
  while (i < text.length) {
    if (text[i] === "*" && text[i+1] === "*") {
      const end = text.indexOf("**", i+2);
      if (end !== -1) { flush(); out.push(<strong key={key++}>{text.slice(i+2, end)}</strong>); i = end + 2; continue; }
    }
    if (text[i] === "*") {
      const end = text.indexOf("*", i+1);
      if (end !== -1 && end > i+1) { flush(); out.push(<em key={key++}>{text.slice(i+1, end)}</em>); i = end + 1; continue; }
    }
    if (text[i] === "[") {
      const close = text.indexOf("]", i+1);
      if (close !== -1 && text[close+1] === "(") {
        const urlEnd = text.indexOf(")", close+2);
        if (urlEnd !== -1) {
          flush();
          const href = text.slice(close+2, urlEnd);
          out.push(<a key={key++} href={href} className="text-orange-600 hover:underline">{text.slice(i+1, close)}</a>);
          i = urlEnd + 1;
          continue;
        }
      }
    }
    buf += text[i]; i++;
  }
  flush();
  return out;
}

type Block = { type: string; content?: string; items?: string[]; headers?: string[]; rows?: string[][] };

function parseBlocks(text: string): Block[] {
  const blocks: Block[] = [];
  const parts = text.split(/\n\n+/);
  for (const raw of parts) {
    const t = raw.trim();
    if (!t) continue;
    if (t.startsWith("## ")) blocks.push({ type: "h2", content: t.slice(3) });
    else if (t.startsWith("### ")) blocks.push({ type: "h3", content: t.slice(4) });
    else if (t.startsWith("> ")) {
      const lines = t.split("\n").map(l => l.replace(/^>\s?/, ""));
      blocks.push({ type: "blockquote", content: lines.join("\n") });
    }
    else if (t.includes("|---")) {
      const lines = t.split("\n");
      const headerLine = lines[0];
      const headers = headerLine.split("|").map(s => s.trim()).filter(s => s !== "");
      const rows: string[][] = [];
      for (let li = 2; li < lines.length; li++) {
        const line = lines[li];
        if (!line.trim()) continue;
        const cells = line.split("|").map(s => s.trim());
        if (cells[0] === "") cells.shift();
        if (cells[cells.length-1] === "") cells.pop();
        rows.push(cells);
      }
      blocks.push({ type: "table", headers, rows });
    }
    else if ((t.startsWith("```") && t.endsWith("```")) || (t.startsWith("~~~") && t.endsWith("~~~"))) {
      let inner = t;
      inner = inner.replace(/^~~~[a-z]*\n?/i, "").replace(/\n?~~~$/, "");
      blocks.push({ type: "code", content: inner });
    }
    else if (/^\d+\.\s/.test(t)) {
      blocks.push({ type: "ol", items: t.split("\n").map(l => l.replace(/^\d+\.\s+/, "")) });
    }
    else if (t.startsWith("- ")) {
      blocks.push({ type: "ul", items: t.split("\n").map(l => l.replace(/^-\s+/, "")) });
    }
    else blocks.push({ type: "p", content: t });
  }
  return blocks;
}

export default function BlogPost() {
  const blocks = parseBlocks(content);
  return (
    <>
      <Script id="ld-faq-banner" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            YouTube Banner Size: 2560x1440 and the 2026 Safe-Area Guide
          </h1>
          <p className="text-gray-500 mb-2">2026-08-05 · 12 min read</p>
          <p className="text-lg text-gray-600 mb-8 italic">
            The exact YouTube banner size for every device in 2026 — TV, desktop, mobile, game console — with the three published safe-area rectangles and a free checker.
          </p>
          {blocks.map((b, i) => {
            if (b.type === "h2") return <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-gray-900">{b.content}</h2>;
            if (b.type === "h3") return <h3 key={i} className="text-xl font-bold mt-7 mb-3 text-gray-900">{b.content}</h3>;
            if (b.type === "blockquote") {
              const inner = b.content!.split("\n\n");
              return (
                <blockquote key={i} className="border-l-4 border-orange-400 pl-5 py-3 my-5 bg-orange-50 text-gray-800 rounded-r">
                  {inner.map((p, j) => <p key={j} className="italic mb-2 last:mb-0">{renderInline(p)}</p>)}
                </blockquote>
              );
            }
            if (b.type === "code") return <pre key={i} className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs my-5 leading-relaxed"><code>{b.content}</code></pre>;
            if (b.type === "table") return (
              <div key={i} className="overflow-x-auto my-6 rounded-lg border border-gray-200">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      {b.headers!.map((h, j) => <th key={j} className="px-4 py-2 text-left text-sm font-semibold text-gray-900 border-b">{renderInline(h)}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows!.map((row, ri) => (
                      <tr key={ri} className="border-b last:border-0 hover:bg-gray-50">
                        {row.map((cell, ci) => <td key={ci} className="px-4 py-2 text-sm text-gray-700 align-top">{renderInline(cell)}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
            if (b.type === "ul") return <ul key={i} className="list-disc ml-6 mb-4 text-gray-700 space-y-1">{b.items!.map((it, j) => <li key={j}>{renderInline(it)}</li>)}</ul>;
            if (b.type === "ol") return <ol key={i} className="list-decimal ml-6 mb-4 text-gray-700 space-y-1">{b.items!.map((it, j) => <li key={j}>{renderInline(it)}</li>)}</ol>;
            return <p key={i} className="text-gray-700 leading-relaxed mb-4">{renderInline(b.content!)}</p>;
          })}
        </article>
        <div className="mt-12 p-6 bg-orange-50 rounded-2xl border-2 border-orange-200">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Ready to check your banner?</h3>
          <p className="text-gray-700 mb-4">Use our free tool to verify all three safe-area rectangles on your image in seconds.</p>
          <a href="/" className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:opacity-90 transition">Try vidthumb Free</a>
        </div>
      </div>
    </>
  );
}