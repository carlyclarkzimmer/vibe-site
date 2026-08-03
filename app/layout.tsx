import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    title: "Beyond the Bottleneck | Free Audio Series",
    description: "Honest conversations with thriving online business owners who stopped turning their freedom back into a job.",
    icons: { icon: "/favicon.svg" },
    openGraph: {
      title: "Beyond the Bottleneck",
      description: "How thriving online business owners stopped turning their freedom back into a job.",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Beyond the Bottleneck audio series" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Beyond the Bottleneck",
      description: "How thriving online business owners stopped turning their freedom back into a job.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
