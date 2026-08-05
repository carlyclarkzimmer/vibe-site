import type { Metadata } from "next";
import { SitePlaceholderPage } from "../../components/site/SitePlaceholderPage";

export const metadata: Metadata = { title: "Terms and Conditions | Carly Clark Zimmer" };

export default function TermsAndConditionsPage() {
  return <SitePlaceholderPage eyebrow="Legal" title="Terms and Conditions" />;
}
