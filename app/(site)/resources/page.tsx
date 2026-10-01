import type { Metadata } from "next";
import { WorkTogetherShowcase } from "../../../components/site/WorkTogetherShowcase";

export const metadata: Metadata = {
  title: "Resources | Carly Clark Zimmer",
  description: "Explore ways to work with Carly Clark Zimmer.",
  alternates: { canonical: "https://carlyclarkzimmer.com/resources/" },
};

const resourceServices = [
  {
    prompt: "Need quick clarity?",
    title: "⚡️ 5-Minute Laser Coach",
    href: "/breakthrough",
    newTab: true,
    description: "Cut through the overthinking and find your next move.",
  },
  {
    prompt: "Ready to listen?",
    title: "Listen to the Beyond the Bottleneck Audio Series",
    href: "/beyond-the-bottleneck-2026",
    description:
      "How thriving online business owners stopped turning their freedom back into a job, and what opened up when they did",
  },
  {
    title: "Listen to the Trust Issues Private Podcast",
    href: "/trust",
    description: (
      <>
        This five-part private podcast is your invitation to rebuild the most important asset in
        your business: <em>trust.</em>
      </>
    ),
  },
  {
    title: "Join the newsletter",
    href: "/newsletter",
    description:
      "Stories and insights about the small choices that change how you work, lead, and live, especially those moments when your old patterns meet the person you’re becoming and you get to choose what happens next.",
  },
  {
    prompt: "Want to change one pattern?",
    title: "The Pattern Interrupt",
    href: "https://carlyclarkzimmer.thrivecart.com/the-pattern-interrupt/",
    newTab: true,
    description:
      "30 days to identify one bottleneck, interrupt it, and build evidence that you can choose differently.",
  },
] as const;

export default function ResourcesPage() {
  return (
    <WorkTogetherShowcase
      eyebrow={null}
      heading="Resources to Get Started"
      headingLevel="h1"
      id="resources-hero"
      imageAlt="Carly Clark Zimmer standing outside in a magenta jacket"
      imageSrc="/carly-resources-showcase.jpg"
      services={resourceServices}
    />
  );
}
