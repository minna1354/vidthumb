import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Thumbnail Size: The Complete Guide 2026",
  description:
    "Everything you need to know about YouTube thumbnail sizes: 1280x720 dimensions, file size limits, format requirements, and best practices.",
  keywords: [
    "youtube thumbnail size",
    "youtube thumbnail dimensions",
    "1280x720 thumbnail",
    "youtube shorts thumbnail",
  ],
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

The 1280x720 resolution is ideal because it scales well across all devices while maintaining the 16:9 aspect ratio that matches YouTube's video player.

## Different Sizes for Different Video Types

YouTube uses different thumbnail requirements based on video type:
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
3. Close-up faces (increase clicks 30-40 percent)
4. Minimal text (under 6 words)
5. Match your content

## Resize Your Thumbnail Now

1. Visit vidthumb.co
2. Upload your image (JPG, PNG, or WebP)
3. The tool automatically resizes to 1280x720
4. Adjust position, zoom, or rotation if needed
5. Download in JPG or PNG format
6. Upload to YouTube Studio

The whole process takes less than 30 seconds, and your image stays private - all processing happens in your browser.

## Conclusion

Getting your YouTube thumbnail size right is the foundation of good click-through rates. Use 1280x720 pixels as your standard, keep the file under 2 MB, and save in JPG or PNG format. For YouTube Shorts, switch to 1080x1920 vertical dimensions.

Need to resize your images? Try our free tool at vidthumb.co - it handles YouTube, Shorts, Instagram, and TikTok dimensions automatically, with no upload to any server.`;

const sections = content.split("\n\n");

export default function BlogPost() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          YouTube Thumbnail Size: The Complete Guide 2026
        </h1>
        <p className="text-gray-500 mb-6">2026-07-31 - 6 min read</p>
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

        <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Related guides on vidthumb.co</h3>
          <ul className="list-disc ml-6 mb-0 text-gray-700 space-y-1">
                        <li><a href="/blog/youtube-banner-size" className="text-orange-600 hover:underline">YouTube Banner Size: 2560x1440 and the 2026 Safe-Area Guide</a></li>
                        <li><a href="/blog/youtube-description-tips" className="text-orange-600 hover:underline">YouTube Description Tips for Better Search and Click-Through</a></li>
                        <li><a href="/blog/youtube-shorts-thumbnail-size" className="text-orange-600 hover:underline">YouTube Shorts Thumbnail Size: 2026 Spec and Best Practices</a></li>
                        <li><a href="/blog/youtube-thumbnail-tips-for-clicks" className="text-orange-600 hover:underline">YouTube Thumbnail Tips for Clicks: 10 Tips for Better CTR</a></li>
                        <li><a href="/blog/vidthumb-7-day-sprint-retrospective" className="text-orange-600 hover:underline">7-Day Content Sprint Retrospective: What I Shipped, What Worked, and What I Would Cut</a> - the build-in-public debrief of the week this blog launched</li>
                        <li><a href="https://dev.to/minna-builds/i-built-a-free-safe-area-checker-for-youtube-banners-heres-what-i-learned-about-the-2560x1440-4e64" rel="nofollow" target="_blank" className="text-orange-600 hover:underline">Cross-post on Dev.to: Building a Safe-Area Checker</a> - 930-word write-up of how I built the same tool</li>
          </ul>
        </div>
    </div>
  );
}
