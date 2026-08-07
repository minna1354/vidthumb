import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Ga4Events from "@/components/Ga4Events";

export const metadata: Metadata = {
  title: "Vidthumb - Free YouTube Thumbnail Size Checker & Maker",
  description:
    "Make perfect YouTube thumbnails in 30 seconds. Free online tool to resize images to 1280x720, adjust positioning, and download. No signup required.",
  keywords: [
    "youtube thumbnail size",
    "youtube thumbnail maker",
    "youtube thumbnail dimensions",
    "thumbnail resizer",
    "1280x720 thumbnail",
  ],
  authors: [{ name: "Vidthumb" }],
  creator: "Vidthumb",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vidthumb.co",
    siteName: "Vidthumb",
    title: "Vidthumb - Free YouTube Thumbnail Size Checker & Maker",
    description:
      "Make perfect YouTube thumbnails in 30 seconds. Free, no signup.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidthumb - Free YouTube Thumbnail Tool",
    description: "Make perfect YouTube thumbnails in 30 seconds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6089180704113987"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
        <Ga4Events />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WEV55HE8EW"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-WEV55HE8EW');`}
        </Script>
      </body>
    </html>
  );
}