import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
