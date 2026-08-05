import type { Metadata } from "next";
import Script from "next/script";
import { siteMeta } from "../content/site/home";
import "./globals.css";

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
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
