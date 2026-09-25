import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rupak Khadka | Frontend Developer & SEO Specialist",
  description:
    "Rupak Khadka — IT student and frontend developer specializing in Next.js, React, PHP, WordPress, and Technical SEO. Building high-performance websites that rank #1 and load blazingly fast.",
  keywords: [
    "Rupak Khadka",
    "frontend developer",
    "SEO specialist",
    "Next.js developer",
    "React developer",
    "WordPress developer",
    "PHP developer",
    "web performance",
    "technical SEO",
    "Core Web Vitals",
    "portfolio",
  ],
  authors: [{ name: "Rupak Khadka" }],
  openGraph: {
    title: "Rupak Khadka | Frontend Developer & SEO Specialist",
    description:
      "Building high-performance frontends that rank #1. Specializing in Next.js, React, PHP, WordPress, and Technical SEO.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupak Khadka | Frontend Developer & SEO Specialist",
    description:
      "Building high-performance frontends that rank #1. Specializing in Next.js, React, PHP, WordPress, and Technical SEO.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
