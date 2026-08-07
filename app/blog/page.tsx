import type { Metadata } from "next";\nimport Link from "next/link";\n\nexport const metadata: Metadata = {\n  title: "vidthumb.co Blog - YouTube Thumbnail and Banner Tools",\n  description:\n    "Guides and tools for YouTube creators: banner safe areas, thumbnail sizing, and best practices for 2026.",\n  alternates: { canonical: "https://vidthumb.co/blog" },\n  openGraph: {\n    title: "vidthumb.co Blog",\n    description: "Guides and tools for YouTube creators.",\n    type: "website",\n    url: "https://vidthumb.co/blog",\n  },\n};\n\nconst posts = [
  {
    "slug": "vidthumb-7-day-sprint-retrospective",
    "title": "7-Day Content Sprint for vidthumb.co: What I Shipped, What Worked, and What I Would Cut",
    "description": "A build-in-public retrospective of one week of content marketing for a free YouTube banner and thumbnail tool. What moved the needle, what did not, and what is shipping next week.",
    "date": "2026-08-06",
    "readMin": 9,
    "tag": "Build in public"
  },
  {
    "slug": "youtube-banner-size",
    "title": "YouTube Banner Size: 2560x1440 and the 2026 Safe-Area Guide",
    "description": "The exact YouTube banner size for every device in 2026 (TV, desktop, mobile). Covers the 1546x423 web-safe area, 1235x338 TV-safe area, file format, file size limit, color mode, plus a free safe-area checker.",
    "date": "2026-08-05",
    "readMin": 12,
    "tag": "Banner"
  },
  {
    "slug": "youtube-thumbnail-tips-for-clicks",
    "title": "YouTube Thumbnail Tips for Clicks: 10 Tips for Better CTR",
    "description": "10 proven YouTube thumbnail tips to increase clicks: design rules, color theory, text placement, and A/B testing strategies for 2026.",
    "date": "2026-08-04",
    "readMin": 6,
    "tag": "Thumbnails"
  },
  {
    "slug": "youtube-description-tips",
    "title": "YouTube Description Tips: How to Write Descriptions That Get Views",
    "description": "Complete guide to YouTube video descriptions: SEO tips, keyword placement, timestamps, and best practices for 2026.",
    "date": "2026-08-04",
    "readMin": 7,
    "tag": "SEO"
  },
  {
    "slug": "youtube-shorts-thumbnail-size",
    "title": "YouTube Shorts Thumbnail Size: Complete Guide 2026",
    "description": "Complete guide to YouTube Shorts thumbnail dimensions, safe zones, character handling, file format, and best practices for 2026.",
    "date": "2026-08-04",
    "readMin": 5,
    "tag": "Shorts"
  },
  {
    "slug": "youtube-thumbnail-size-guide",
    "title": "YouTube Thumbnail Size: The Complete Guide 2026",
    "description": "Everything you need to know about YouTube thumbnail sizes: 1280x720 dimensions, file size limits, format requirements, and best practices.",
    "date": "2026-08-04",
    "readMin": 6,
    "tag": "Thumbnails"
  }
];\n\nexport default function BlogIndex() {\n  return (\n    <div className="max-w-4xl mx-auto px-4 py-12">\n      <header className="mb-12 text-center">\n        <h1 className="text-4xl font-bold mb-3 text-gray-900">vidthumb.co Blog</h1>\n        <p className="text-lg text-gray-600 max-w-2xl mx-auto">\n          Guides and tools for YouTube creators: banner safe areas, thumbnail sizing, and best practices for 2026.\n        </p>\n      </header>\n      <div className="space-y-6">\n        {posts.map((p) => (\n          <article key={p.slug} className="p-6 border border-gray-200 rounded-2xl hover:border-orange-300 transition bg-white">\n            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">\n              <time>{p.date}</time>\n              <span>·</span>\n              <span>{p.readMin} min read</span>\n              <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs">{p.tag}</span>\n            </div>\n            <h2 className="text-2xl font-bold mb-2">\n              <Link href={"/blog/" + p.slug} className="text-gray-900 hover:text-orange-600">\n                {p.title}\n              </Link>\n            </h2>\n            <p className="text-gray-600 mb-4">{p.description}</p>\n            <Link href={"/blog/" + p.slug} className="text-orange-600 hover:underline font-semibold">\n              Read guide →\n            </Link>\n          </article>\n        ))}\n      </div>\n      <div className="mt-16 p-8 bg-orange-50 rounded-2xl border-2 border-orange-200 text-center">\n        <h3 className="text-xl font-bold mb-2 text-gray-900">Need a quick tool?</h3>\n        <p className="text-gray-700 mb-4">Resize YouTube thumbnails and check banner safe areas in seconds.</p>\n        <a href="/" className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:opacity-90 transition">Try vidthumb Free</a>\n      </div>\n    </div>\n  );\n}\n