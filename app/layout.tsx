import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diamonds are Forever | Podcast",
  description:
    "Tune into Diamonds are Forever, your go-to podcast for captivating stories and unique insights, brought to you by Robert Lawrence.",
  keywords: [
    "podcast",
    "diamonds are forever",
    "robert lawrence",
    "stories",
    "entertainment",
  ],
  authors: [{ name: "Robert Lawrence", url: "https://art-web-nu.vercel.app/" }],
  openGraph: {
    title: "Diamonds are Forever | Podcast",
    description:
      "Explore the latest episodes of Diamonds are Forever, featuring engaging stories and unique perspectives.",
    url: "https://your-site.vercel.app/", // Replace with your actual URL
    siteName: "Diamonds are Forever Podcast",
    images: [
      {
        url: "https://wallpapers.com/images/hd/android-apple-xddzdvfueo0kfvj7.jpg",
        width: 1200,
        height: 630,
        alt: "Diamonds are Forever Podcast Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diamonds are Forever | Podcast",
    description:
      "Listen to Diamonds are Forever for stories that captivate and inspire.",
    images: "https://wallpapers.com/images/hd/android-apple-xddzdvfueo0kfvj7.jpg",
  },
  icons: {
    icon: "/favicon.ico", // Ensure this file exists in public/
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-gray-900 text-white">
        <main>{children}</main>
      </body>
    </html>
  );
}