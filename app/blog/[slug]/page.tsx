import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog-data";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const contentHtml = post.content
    .split("\n\n")
    .map((para) => {
      if (para.startsWith("## ")) {
        return "<h2>" + para.slice(3) + "</h2>";
      }
      if (para.startsWith("### ")) {
        return "<h3>" + para.slice(4) + "</h3>";
      }
      if (para.startsWith("- ")) {
        const items = para.split("\n").map((line) => "<li>" + line.slice(2) + "</li>").join("");
        return "<ul>" + items + "</ul>";
      }
      if (/^\d+\. /.test(para)) {
        const items = para.split("\n").map((line) => "<li>" + line.replace(/^\d+\. /, "") + "</li>").join("");
        return "<ol>" + items + "</ol>";
      }
      return "<p>" + para + "</p>";
    })
    .join("");

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <article>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <time>{post.date}</time>
          <span>·</span>
          <span>{post.readTime} read</span>
        </div>
        <p className="text-lg text-gray-600 mb-8 italic">{post.description}</p>
        <div
          className="prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4 prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-4 prose-li:mb-1"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
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