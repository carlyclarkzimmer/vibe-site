import type { Metadata } from "next";
import Script from "next/script";
import { campaignMeta } from "../content/campaigns/beyond-the-bottleneck";
import "./globals.css";

export const metadata: Metadata = {
  title: campaignMeta.title,
  description: campaignMeta.description,
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.google.com/recaptcha/api.js" strategy="beforeInteractive" />
      </head>
      <body>{children}</body>
    </html>
  );
}
