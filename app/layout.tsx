import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Anish Tote | Engineering Systems & Enterprise Applications",
    description:
      "Portfolio of Anish Tote—building enterprise applications, industrial automation, embedded systems, and manufacturing analytics.",
    keywords: [
      "Anish Tote",
      "embedded systems",
      "PLC automation",
      "electronics engineer",
      "enterprise applications",
      "Next.js",
      "PostgreSQL",
      "data analytics",
      "Python",
      "Pune",
    ],
    authors: [{ name: "Anish Tote" }],
    openGraph: {
      type: "website",
      url: origin,
      title: "Anish Tote | Engineering Systems & Enterprise Applications",
      description:
        "Engineering systems for real operations. Explore enterprise applications, ERP integrations, automation, embedded systems, and analytics.",
      images: [
        {
          url: `${origin}/og.jpg`,
          width: 1200,
          height: 630,
          alt: "Anish Tote engineering portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Anish Tote | Engineering Systems & Enterprise Applications",
      description:
        "Engineering systems, enterprise applications, and analytics.",
      images: [`${origin}/og.jpg`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
