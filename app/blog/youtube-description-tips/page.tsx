import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Description Tips: How to Write Descriptions That Get Views",
  description:
    "Complete guide to YouTube video descriptions: SEO tips, keyword placement, timestamps, and best practices for 2026.",
  keywords: [
    "youtube description tips",
    "youtube video description",
    "youtube description seo",
    "youtube description examples",
    "how to write youtube description",
  ],
  openGraph: {
    title: "YouTube Description Tips: How to Write Descriptions That Get Views",
    description: "Complete guide to YouTube video descriptions and SEO.",
    type: "article",
  },
};

const content = `Your YouTube video description is one of the most important but often overlooked parts of your video. A well-written description helps your video rank in YouTube search, suggested videos, and Google search results. This guide covers everything you need to know about writing YouTube descriptions in 2026.

## The Role of YouTube Descriptions

YouTube descriptions serve three main purposes. They help YouTube understand what your video is about for search ranking. They give viewers context and links related to your content. They appear in YouTube search results and Google search snippets.

A well-written description can mean the difference between your video ranking on page one or page ten of YouTube search results. It takes only a few minutes to write but has long term impact on your views.

## Official YouTube Description Limits

YouTube has specific limits for video descriptions. The maximum length is 5000 characters. The first three lines show above the Show More button on desktop. On mobile, viewers see only the first 100 characters before truncation.

This means the first three lines of your description are the most important. They show above the fold and decide whether viewers expand to read more or click away.

## How to Write the First Three Lines

The first three lines of your YouTube description are the most valuable real estate. They show above the Show More button on desktop and determine whether your video ranks well in YouTube search. Here is how to write them well.

Start with a hook that tells viewers what your video covers. Include your main keyword naturally in the first sentence. Add a secondary keyword in the second or third line. Make the first 100 characters count because that is what mobile users see.

## Adding Timestamps and Links

After the first three lines, add timestamps for different sections of your video. Timestamps improve viewer experience and can earn you YouTube highlight clips. Format timestamps as 0:00 for the introduction and continue with 1:23 for the next section.

Include links mentioned in your video. If you mention a product, website, or resource, add the link in the description. YouTube can use these links for cards and end screens.

## Best Practices for YouTube Descriptions

Here are the most important best practices for writing YouTube video descriptions. Front-load your main keyword in the first 100 characters because that is what mobile users see and what YouTube search indexes most heavily. Write a natural hook that makes viewers want to click Show More.

Include 3 to 5 relevant hashtags. YouTube shows only the first 3 hashtags above the title. Place your most important hashtag first. Common choices include broad category tags and specific content tags.

Write for humans first and search engines second. Your description should read naturally and provide value to viewers. Avoid keyword stuffing because YouTube can detect and may penalize it.

Add a call to action at the end. Ask viewers to subscribe, comment, or check the link in your description. Make it feel natural rather than desperate.

## Common Mistakes to Avoid

When writing your YouTube description, avoid these common errors. Do not copy the same description across all your videos. YouTube sees this as low effort and may rank you lower. Each video needs a unique description that matches its content.

Do not stuff keywords at the beginning. YouTube can detect keyword stuffing and may penalize your video ranking. Use keywords naturally throughout the description.

Do not leave the description empty. An empty description tells YouTube nothing about your content. YouTube cannot rank what it does not understand.

Do not use generic descriptions like great video or check out my channel. These provide no value to viewers or YouTube algorithm.

## How to Optimize YouTube Descriptions for SEO

To rank higher in YouTube search, use these SEO tips. Put your main keyword in the first 100 characters. Use long-tail variations in the rest of the description. Add 3 to 5 related keywords naturally. Include 2 to 3 hashtags that match your content category.

Mention your video topic explicitly. If your video is about iPhone photography, say iPhone photography multiple times. YouTube matches keywords in description with what viewers search for.

Link to related content. If you have a video that goes deeper, link to it. YouTube counts internal links as engagement signals.

## How to Write Descriptions for Different Video Types

Different YouTube content types need different description approaches. Tutorials and how-to videos should include step-by-step breakdowns. Add the specific tools or resources mentioned. Link to your playlist if you have a series.

Vlogs and personal content should be more casual. Share the story behind the video. Add timestamps for the best moments. Engage with viewers by asking questions.

Product reviews and comparisons need honest assessments. List pros and cons. Include timestamps for each comparison point. Add disclosure about affiliate links if applicable.

## Conclusion

Your YouTube description takes only a few minutes to write but has lasting impact on your views and search ranking. Use the first 100 characters wisely with a strong hook and main keyword. Add timestamps, links, and 3 to 5 hashtags. Each video deserves a unique description that matches its content and audience.

Need help with your thumbnails, banner, or other visuals? Try our free tool at vidthumb.co. It handles YouTube, Shorts, Instagram, and TikTok dimensions automatically, with no upload to any server.`;

const sections = content.split("\n\n");

export default function BlogPost() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          YouTube Description Tips: How to Write Descriptions That Get Views
        </h1>
        <p className="text-gray-500 mb-6">2026-08-04 - 7 min read</p>
        <p className="text-lg text-gray-600 mb-8 italic">
          Complete guide to YouTube video descriptions: SEO tips, keyword placement, timestamps, and best practices for 2026.
        </p>
        {sections.map((para, i) => {
          if (para.startsWith("| ")) {
            const tblLines: string[][] = [];
            for (const line of para.split("\n")) {
              const cells = line.split("|").map((c) => c.trim()).filter((c) => c);
              if (cells.length > 0) tblLines.push(cells);
            }
            if (tblLines.length < 3) return null;
            const head: string[] = tblLines[0];
            const body: string[][] = tblLines.slice(2);
            return (
              <table key={i} className="w-full border-collapse my-4">
                <thead>
                  <tr>
                    {head.map((h, j) => (
                      <th key={j} className="border border-gray-200 px-3 py-2 bg-gray-50 text-left">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {body.map((row, r) => (
                    <tr key={r}>
                      {row.map((c, j) => (
                        <td key={j} className="border border-gray-200 px-3 py-2 text-gray-700">
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          }
          if (para.startsWith("## ")) {
            return <h2 key={i} className="text-2xl font-bold mt-8 mb-4 text-gray-900">{para.slice(3)}</h2>;
          }
          if (para.startsWith("### ")) {
            return <h3 key={i} className="text-xl font-bold mt-6 mb-3 text-gray-900">{para.slice(4)}</h3>;
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
        <h3 className="text-xl font-bold mb-2 text-gray-900">Need help with your YouTube visuals?</h3>
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