import type { Metadata } from "next";
import { Space_Grotesk, Spectral } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans"
});

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"]
});

// Absolute base for og:image. Set NEXT_PUBLIC_SITE_URL at build time if the site lives elsewhere.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://prolynk.io";
const SHARE_TITLE = "ProLynk: Bid + Grow for contractors";
const SHARE_DESCRIPTION =
  "Say the job and the proposal is sent. Turn each job you win into a month of real-footage posts you approve from one link.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AI Contractor System",
  description: "Send proposals 10x faster and close more jobs without typing.",
  openGraph: {
    type: "website",
    siteName: "ProLynk",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 675, alt: "ProLynk app: voice-to-proposal and job-to-content" }]
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: ["/og.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${spectral.variable}`}>{children}</body>
    </html>
  );
}
