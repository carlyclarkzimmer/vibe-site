import type { Metadata } from "next";
import { Bodoni_Moda, EB_Garamond, Montserrat } from "next/font/google";
import { EquityPledge } from "../components/EquityPledge";
import { SiteFooter } from "../components/site/SiteFooter";
import { siteMeta } from "../content/site/home";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
  weight: ["400"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500"],
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodoniModa.variable} ${ebGaramond.variable} ${montserrat.variable}`}>
        {children}
        <EquityPledge />
        <SiteFooter />
      </body>
    </html>
  );
}
