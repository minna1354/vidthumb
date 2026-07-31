import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "YouTube Thumbnail Size: The Complete Guide 2026",
  description: "Everything you need to know about YouTube thumbnail sizes: 1280x720 dimensions, file size limits, format requirements, and best practices.",
  keywords: ["youtube thumbnail size", "youtube thumbnail dimensions", "1280x720 thumbnail", "youtube shorts thumbnail"],
  openGraph: {
    title: "YouTube Thumbnail Size: The Complete Guide 2026",
    description: "Complete guide to YouTube thumbnail dimensions and best practices.",
    type: "article",
  },
};

const content = `YouTube thumbnails are critical for getting clicks. The right size and dimensions ensure your thumbnail looks sharp on every device, from mobile phones to desktop TVs.

## The Official YouTube Thumbnail Size

YouTube officially recommends the following dimensions for video thumbnails:
- Recommended size: 1280 x 720 pixels
- Minimum width: 640 pixels
- Aspect ratio: 16:9
- Max file size: 2 MB
- Accepted formats: JPG, GIF, PNG

## Different Sizes for Different Video Types

YouTube uses different thumbnail requirements:
- Regular Videos: 1280 x 720 (16:9)
- YouTube Shorts: 1080 x 1920 (9:16)
- Instagram Post: 1080 x 1080
- TikTok: 1080 x 1920 (9:16)

Our free tool vidthumb.co helps you resize to all these sizes automatically.

## File Size and Format

YouTube thumbnail requirements:
- Maximum file size: 2 MB
- Accepted formats: JPG, PNG, GIF
- Color space: sRGB

## How to Create the Perfect Thumbnail

1. Use bold, readable text
2. High contrast colors
3. Close-up faces (increase clicks 30-40%)
4. Minimal text (under 6 words)
5. Match your content

## Resize Your Thumbnail Now

Need to resize your images? Try our free tool at vidthumb.co - handles YouTube, Shorts, Instagram, and TikTok dimensions automatically, with no upload to any server.`;

const sections = content.split("\n\n");

export default function BlogPost() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          YouTube Thumbnail Size: The Complete Guide 2026
        </h1>
        <p className="text-gray-500 mb-6">2026-07-31 · 6 min read</p>
        <p className="text-lg text-gray-600 mb-8 italic">
          Everything you need to know about YouTube thumbnail sizes: 1280x720 dimensions, file size limits, format requirements, and best practices.
        </p>
        {sections.map((para, i) => {
          if (para.startsWith("## ")) {
            return <h2 key={i} className="text-2xl font-bold mt-8 mb-4 text-gray-900">{para.slice(3)}</h2>;
          }
          if (para.startsWith("- ")) {
            const items = para.split("\n").map((line, j) => (
              <li key={j}>{line.slice(2)}</li>
            ));
            return <ul key={i} className="list-disc ml-6 mb-4 text-gray-700">{items}</ul>;
          }
          if (/^\d+\. /.test(para)) {
            const items = para.split("\n").map((line, j) => (
              <li key={j}>{line.replace(/^\d+\. /, "")}</li>
            ));
            return <ol key={i} className="list-decimal ml-6 mb-4 text-gray-700">{items}</ol>;
          }
          return <p key={i} className="text-gray-700 leading-relaxed mb-4">{para}</p>;
        })}
      </article>
      <div className="mt-12 p-6 bg-orange-50 rounded-2xl border-2 border-orange-200">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Ready to resize your thumbnails?</h3>
        <p className="text-gray-700 mb-4">Use our free tool to resize your images to any YouTube format in seconds.</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
        >
          Try vidthumb Free
        </a>
      </div>
    </div>
  );
}