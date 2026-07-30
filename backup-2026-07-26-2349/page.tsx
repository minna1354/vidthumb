import ThumbnailEditor from "@/components/ThumbnailEditor";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold">Vidthumb</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#tool" className="hover:text-gray-900">Tool</a>
            <a href="#how-it-works" className="hover:text-gray-900">How it works</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            YouTube Thumbnail Size Checker
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              & Maker
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Resize images to YouTube&apos;s perfect 1280x720 size, add eye-catching text,
            and download in seconds. Free, no signup required.
          </p>
        </section>

        {/* Tool */}
        <section id="tool" className="mb-16">
          <ThumbnailEditor />
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { step: 1, title: "Upload", desc: "Drop or select your image. JPG, PNG, WebP supported." },
              { step: 2, title: "Adjust", desc: "Drag, zoom, rotate and flip to get the perfect crop." }, { step: 3, title: "Download", desc: "Get your optimized thumbnail in PNG or JPG format." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6 rounded-lg bg-gray-50">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What is the recommended YouTube thumbnail size?",
                a: "YouTube recommends 1280x720 pixels (16:9 aspect ratio), with a minimum width of 640 pixels. The maximum file size is 2MB for uploads.",
              },
              {
                q: "Is this tool free?",
                a: "Yes, completely free. No signup, no watermarks, no hidden fees. All image processing happens in your browser 闂?we never see your files.",
              },
              {
                q: "Are my images uploaded to a server?",
                a: "No. All processing happens locally in your browser using the Canvas API. Your images never leave your device. This means faster processing and complete privacy.",
              },
              {
                q: "What file formats are supported?",
                a: "You can upload JPG, PNG, and WebP images. The output is always PNG to preserve quality and transparency.",
              },
              {
              q: "Why don't you have a text editor?",
              a: "We focus on what we do best: perfect image resizing and positioning. For adding text, design your thumbnail in Canva, Photoshop, or your favorite editor, then upload it here for the perfect YouTube size.",
            },
            ].map((item, i) => (
              <details
                key={i}
                className="group border border-gray-200 rounded-lg p-4 open:bg-gray-50"
              >
                <summary className="font-semibold cursor-pointer flex justify-between items-center">
                  {item.q}
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="text-gray-600 mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section className="prose max-w-3xl mx-auto text-gray-700">
          <h2 className="text-2xl font-bold mb-4">
            Why YouTube thumbnail size matters
          </h2>
          <p className="mb-4">
            Your YouTube thumbnail is the first thing viewers see when browsing.
            A well-designed thumbnail can dramatically increase your click-through
            rate (CTR), which directly impacts how YouTube promotes your video.
          </p>
          <p className="mb-4">
            YouTube officially recommends a thumbnail size of <strong>1280x720 pixels</strong>
            (a 16:9 aspect ratio). This size ensures your thumbnail looks sharp on
            all devices 闂?from mobile phones to desktop TVs. Thumbnails smaller
            than 640px wide will be rejected by YouTube.
          </p>
          <h3 className="text-xl font-bold mt-6 mb-3">
            Tips for high-CTR YouTube thumbnails
          </h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Use 1280x720 resolution (16:9 aspect ratio)</li>
            <li>Keep important content centered - YouTube may crop slightly on mobile</li>
            <li>High contrast colors that pop against YouTube' + [char]39 + 's white background</li>
            <li>Avoid cluttered designs - keep it simple</li>
            <li>Test different versions to see what gets clicked</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 max-w-6xl text-center text-sm text-gray-500">
          <p>濠?2026 Vidthumb. Free YouTube thumbnail tool.</p>
          <p className="mt-2">
            All image processing happens in your browser. No files are uploaded.
          </p>
        </div>
      </footer>
    </div>
  );
}