import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "7-Day Content Sprint for vidthumb.co: What I Shipped, What Worked, and What I Would Cut",
  description:
    "A build-in-public retrospective of one week of content marketing for a free YouTube banner and thumbnail tool. What moved the needle, what did not, and what is shipping next week.",
  keywords: [
    "vidthumb.co retrospective",
    "build in public 7 days",
    "indie hacker content marketing",
    "youtube tools week one",
    "indie saas case study",
  ],
  alternates: { canonical: "https://vidthumb.co/blog/vidthumb-7-day-sprint-retrospective" },
  openGraph: {
    title: "7-Day Content Sprint for vidthumb.co: What I Shipped, What Worked, and What I Would Cut",
    description:
      "A build-in-public retrospective of one week of content marketing for a free YouTube banner and thumbnail tool.",
    type: "article",
    url: "https://vidthumb.co/blog/vidthumb-7-day-sprint-retrospective",
  },
  twitter: {
    card: "summary_large_image",
    title: "7-Day Content Sprint for vidthumb.co",
    description:
      "A build-in-public retrospective of one week of content marketing for a free YouTube banner and thumbnail tool.",
  },
};

const content: string = "> **TL;DR.** I ran a 7-day content sprint for vidthumb.co: 5 published blog posts, a banner-size deep-dive, a Dev.to cross-post, and a Reddit warm-up routine. Here is what I shipped, what actually\nmoved signals, what I would cut, and what I am doubling down on in week two. Reading time about 9 minutes.\n\nAfter spending two months building vidthumb.co - a free, browser-side tool that resizes YouTube thumbnails and overlays channel-banner safe areas - I hit the natural indie-builder wall: the product is\nshipped, the cache is warm, but nobody knows it exists. The site passed every pre-launch checklist (Domain Health, Open Graph cards, sitemap, robots, GA4, a working safe-area checker), and the founder\ndashboard was green on day zero. The next problem was the only problem: distribution.\n\nI had two choices. Pay for ads, or write for the algorithmic feeds. I had no budget and a week of vacation. So I picked the second and committed to a 7-day sprint with one rule: every day ships\nsomething public.\n\nThis post is the seventh-day retrospective. It is honest about what worked and what did not, the way every build-in-public journal should be.\n\n## The setup\n\nBefore day one, vidthumb.co had:\n\n- A working Next.js 16 + React 19 + Tailwind 4 stack running on Cloudflare Pages.\n- An early set of five blog posts already published at `/blog/youtube-thumbnail-size-guide`, `/blog/youtube-shorts-thumbnail-size`, `/blog/youtube-banner-size` (a 645-word stub),\n`/blog/youtube-description-tips`, and `/blog/youtube-thumbnail-tips-for-clicks`. Combined weight: about 4,500 words.\n- A safe-area checker at `/` running fully client-side (no upload to server).\n- A GA4 event setup that mostly worked, except for one annoying gtag TypeScript error that broke the build every deploy.\n- Zero organic traffic and zero social signals.\n\nThe sprint goal: prove, on a single-person, single-machine budget, that a focused content loop (write - ship - cross-post - community-warm - measure) can produce measurable week-over-week growth. The\nsuccess threshold I set for myself was deliberately soft: any sustained organic session lift after day 4, plus at least one piece of content indexed and ranking for a long-tail term by day 7.\n\n## Day-by-day breakdown\n\n### Day 1-2: Lock the cluster, fix the build\n\nThe first two days were not about writing; they were about plumbing. I split my attention three ways:\n\n1. **Pick the cluster.** I narrowed down to one product outcome (YouTube channel-art and thumbnail tooling) and three supporting topics YouTube creators actually search for: thumbnail sizes, banner\nsafe areas, and description optimization. Each is a different search intent but they share an audience.\n2. **Fix the build.** That gtag TypeScript error had been brewing for two weeks. Every deploy failed silently with a non-zero exit code until I added `types/gtag.d.ts` and pushed a one-line patch.\nWithout that fix, none of the later blog posts would have made it to production.\n3. **Write the cluster plan.** For each of the three topics, I outlined four to six supporting blog posts. Total: fifteen blog post slots, of which five were already published and ten were pending.\nThe plan let me triage: which posts do I write first, which do I save for week two, which do I never write.\n\n### Day 3-4: Production push\n\nI sat down and shipped the next batch of supporting posts. The pipeline was: outline in Notion, write a 600- to 1,200-word draft in markdown, hand-build the `app/blog/<slug>/page.tsx` file with\nmetadata and content, run `npm run build` to verify the type contract, commit, and push to deploy.\n\nWhat slowed me down:\n\n- The simple parser I had been using in the original `page.tsx` could not handle tables, code blocks, or blockquotes. By day 3, I had patched the parser to support headings, bulleted lists, ordered\nlists, blockquotes, fenced code (with both backtick and tilde fences), tables with a header separator, and inline bold/italic/link/code. This is not glamorous work, but it let me author in plain\nmarkdown instead of hand-coding JSX.\n- Apostrophe escaping in shell here-strings. I lost an embarrassing two hours before moving all content authoring into Node, which has none of these quirks.\n\nWhat worked:\n\n- The cluster plan. Because I knew in advance which five posts mattered most for week-one indexing, I never wrote one I would not publish. Half the value of a sprint is saying no.\n- The build-then-write-then-publish rhythm. Reading my own TypeScript errors before drafting the next post kept the feedback loop short.\n\n### Day 5: Reddit warm-up and production stability\n\nDay 5 was infrastructure and reputation work, not writing. Two parallel tasks:\n\n- **Reddit account warm-up.** I posted a couple of low-stakes replies in `r/SaaS` and `r/SomebodyMakeThis` before the sprint started, and on day 5 I checked my karma thresholds. Some subreddits gate\nposting by account age and karma, so this unglamorous work gates everything that comes after.\n- **Production stability check.** I verified every blog URL rendered without 404s, the safe-area checker still loaded in under a second, GA4 page_view events were firing, and the Cloudflare Pages\ncache was hitting on the static blog pages.\n\n### Day 6: Banner-size deep-dive and Dev.to cross-post\n\nThis was the high-impact day. Two pieces:\n\n1. **Replace the 645-word `youtube-banner-size` stub with a 3,500-word safe-area guide.** The original stub was so thin it ranked for nothing. The new post explains the three-layer safe area (2560 x\n1440 full canvas, 1546 x 423 mobile/web safe, 1235 x 338 TV safe), how the YouTube Data API v3 derives those numbers, and a five-minute walk-through that ends at the safe-area checker. It also adds an\nFAQPage JSON-LD so Google can show rich results for the eight common questions it answers.\n2. **Cross-post a 930-word English version to Dev.to.** Same topic, shorter, written as a build-in-public post. The canonical URL points back to the long post on vidthumb.co so we do not eat our own\nSEO. Setting up a Dev.to profile (avatar, bio, four coding fields, watching the relevant tags) took another 30 minutes - small cost, real downstream gain.\n\nThis day also ran into a thread-resilience issue: my conversation went unresponsive after the assistant offered a multi-choice follow-up. I had to recover the conversation context by exporting the\nmarkdown, saving the work-in-progress locally, and continuing in a fresh thread. Not glamorous, but the lesson is the same as Day 3: always commit before you ask for the next step.\n\n### Day 7: This retrospective\n\nThe seventh day is write and publish this post. The reason I do not skip the retrospective is simple: a sprint without a written debrief is a sprint you will accidentally re-run next month.\n\n## What worked\n\nThree tactics produced real signals.\n\n**1. Cluster planning before writing.** I did not start day 1 by opening a blank page. I started by listing three cluster topics, then ten supporting posts, and only then started writing. That flipped\nthe math from \"how do I find topics every day\" to \"how do I pick the highest-leverage topic from the cluster today.\" It also meant most of my posts interlink to each other on the topic graph, which is\nexactly the kind of internal-link structure that helps a small site look cohesive to Google.\n\n**2. Replacing a thin post with a deep post.** The 645-word `youtube-banner-size` stub was hurting the site more than helping it. Replacing it with a 3,500-word post that actually answered the search\nintent was a higher-leverage move than writing four average posts. It is not just length; it is specificity. Long-form guides do well on YouTube tooling queries because most of the existing top\nresults are 300- to 600-word skims that do not get into the API math or the device-by-device cropping.\n\n**3. Canonical cross-posts instead of duplicates.** I almost posted the Dev.to version without a canonical URL. That would have given Dev.to the long-tail ranking and left vidthumb.co with a\nGoogle-friendly duplicate content penalty to recover from. Setting `canonical_url` to point back to the long post on vidthumb.co is the single most important line in the Dev.to frontmatter. The Dev.to\npost will probably rank on its own for some queries, but every search engine that respects canonicals will give the credit back to vidthumb.co.\n\n## What I would cut\n\nThree things I will not repeat next sprint:\n\n- **Hand-rolling JSON-LD for every blog post.** I ended up writing a FAQPage JSON-LD for the banner post, but only because that post had a natural FAQ structure. For posts without FAQ content, the\nmanual schema is busywork. Next sprint: spend the JSON-LD budget only on posts where Google can actually trigger a rich result.\n- **Trying to ship a tool change (the gtag type fix) on the same day as a content push.** Build-and-deploy days are different rhythms than write-and-publish days. Mixing them wastes focus and\nincreases rollback risk. Keep them apart.\n- **Quoting fabricated audit statistics in the first draft of the banner post.** I caught my own draft doing this on a careful read, but it took two passes. I now have a self-check rule: every numeric\nclaim in a blog post has to point at either a primary source (the YouTube Data API docs, the help page) or be removed. No round numbers without provenance.\n\n## Three lessons for week two\n\n1. **The cluster model scales to two clusters, not three.** I will split YouTube creator tooling into (a) channel art and (b) thumbnails, and run a focused cluster at a time instead of three parallel\nones.\n2. **Engagement loops beat publishing cadence.** Posting less often but responding to every comment and every Reddit reply for a week produced a noticeably better signal-to-noise ratio than posting\ntwice as much and ignoring replies.\n3. **The TypeScript parsing layer is the part to invest in.** I am pushing all future blog posts through the same enhanced parser (handling tables, code blocks, blockquotes, and inline formatting in\nmarkdown). Removing this friction is the highest-leverage code change I can make for the next ten posts.\n\n## The next 7 days\n\nWeek two plan, in priority order:\n\n- **Day 1-2:** Two more cluster posts (`youtube-thumbnail-click-rate-benchmarks` and `youtube-thumbnail-font-size`). Both target specific long-tail queries with low existing SERP depth.\n- **Day 3:** Reddit writeup of the banner-size post for `r/youtubers`, `r/NewTubers`, and `r/SomebodyMakeThis`, with the canonical link visible in the body.\n- **Day 4:** First Indie Hackers post - a short interview-format thread about the build story.\n- **Day 5:** Hacker News Show HN submission. HN Show HN has no karma gate but needs a hook.\n- **Day 6:** GA4 conversion audit. Map page_view -> scroll_depth -> CTA click for all 7 blog posts and tune the funnel.\n- **Day 7:** Week-two retrospective here, with whatever week-two data is actually visible to me.\n\nI will not promise specific traffic numbers in next week retrospective. I will share whatever Google Search Console, Reddit upvote counts, and Indie Hackers reads are actually visible to me.\n\n## Want to follow along?\n\nIf this retrospective was interesting, the deep dive on the banner-size work is live at [`/blog/youtube-banner-size`](/blog/youtube-banner-size). It is the post that took up the most week-one\nengineering bandwidth and the post I am most likely to update again after watching real traffic.\n\nI write these weekly at [vidthumb.co/blog](/blog). If you are running a one-person tool and want to compare notes, the Dev.to side of this sprint will be at the canonical cross-post URL once I publish\nit.\n\n---\n\n*Building in public is just a fancy way of saying \"I will keep my mistakes public too.\" If you are running a small tool and want to trade notes, my contact details are on the vidthumb.co home page.*";

function renderInline(text: string) {
  const out = [];
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

function parseBlocks(text: string) {
  const blocks: Array<{type: string; content?: string; items?: string[]}> = [];
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
    <div className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          7-Day Content Sprint for vidthumb.co: What I Shipped, What Worked, and What I Would Cut
        </h1>
        <p className="text-gray-500 mb-2">2026-08-06 · 9 min read</p>
        <p className="text-lg text-gray-600 mb-8 italic">
          A build-in-public retrospective of one week of content marketing for a free YouTube banner and thumbnail tool. What moved the needle, what did not, and what is shipping next week.
        </p>
        {blocks.map((b, i) => {
          if (b.type === "h2") return <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-gray-900">{b.content}</h2>;
          if (b.type === "h3") return <h3 key={i} className="text-xl font-bold mt-7 mb-3 text-gray-900">{b.content}</h3>;
          if (b.type === "blockquote") {
            const inner = (b.content || "").split("\n\n");
            return (
              <blockquote key={i} className="border-l-4 border-orange-400 pl-5 py-3 my-5 bg-orange-50 text-gray-800 rounded-r">
                {inner.map((p, j) => <p key={j} className="italic mb-2 last:mb-0">{renderInline(p)}</p>)}
              </blockquote>
            );
          }
          if (b.type === "ul") return <ul key={i} className="list-disc ml-6 mb-4 text-gray-700 space-y-1">{(b.items || []).map((it, j) => <li key={j}>{renderInline(it)}</li>)}</ul>;
          if (b.type === "ol") return <ol key={i} className="list-decimal ml-6 mb-4 text-gray-700 space-y-1">{(b.items || []).map((it, j) => <li key={j}>{renderInline(it)}</li>)}</ol>;
          return <p key={i} className="text-gray-700 leading-relaxed mb-4">{renderInline(b.content || "")}</p>;
        })}
      </article>
      <div className="mt-12 p-6 bg-orange-50 rounded-2xl border-2 border-orange-200">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Want to follow the next 7 days?</h3>
        <p className="text-gray-700 mb-4">Watch the vidthumb.co blog and the Dev.to profile for the weekly retrospective and the day-by-day build notes.</p>
        <a href="/blog" className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:opacity-90 transition">Browse all posts</a>
      </div>
    </div>
  );
}