import type { Metadata } from "next";
import { EquityPledge } from "../components/EquityPledge";
import { SiteFooter } from "../components/site/SiteFooter";
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
      <body>
        {children}
        <EquityPledge />
        <SiteFooter />
      </body>
    </html>
  );
}
