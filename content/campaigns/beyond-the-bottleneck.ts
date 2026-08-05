export type CampaignNavItem = {
  href: string;
  label: string;
};

export type Contributor = {
  id: string;
  name: string;
  role: string;
  pattern: string;
  outcome: string;
  image?: string;
};

export const campaignMeta = {
  title: "Beyond the Bottleneck | Free Audio Series",
  description:
    "Honest conversations with thriving online business owners who stopped turning their freedom back into a job.",
  launchDate: "October 5th 2026",
} as const;

export const campaignNavigation: CampaignNavItem[] = [
  { href: "#for-you", label: "Who it’s for" },
  { href: "#inside", label: "Inside the series" },
  { href: "#about", label: "About Carly" },
];

export const heroContent = {
  eyebrow: "Bingeable audio interviews—20 minutes or less",
  titleStart: "Beyond",
  titleItalic: "the",
  titleEnd: "Bottleneck",
  description:
    "How thriving online business owners stopped turning their freedom back into a job, and what opened up when they did",
  cta: "Join the listening tour",
  image: "/carly-hero.jpg",
  imageAlt: "Carly Clark Zimmer smiling outdoors",
} as const;

export const tickerItems = [
  "FREE AUDIO SERIES",
  "BEGINS OCTOBER 5TH 2026",
  "AUDIO INTERVIEWS",
] as const;

export const checklistItems = [
  "You say yes before checking your calendar.",
  "You treat a client request like an emergency because waiting or the possibility of disappointing them feels uncomfortable.",
  "You carry work that someone else could own because it seems faster to do it yourself.",
  "You spend your best energy delivering for clients while the next version of your own business gets pushed to the back burner, every.single.passing.quarter.",
  "You know you need to hold the boundary, raise the rate, delegate the work, change the offer, or have the conversation.",
  "You are not confused about what needs to change. You just cannot seem to make yourself do it.",
] as const;

export const contributors: Contributor[] = Array.from({ length: 12 }, (_, index) => ({
  id: String(index + 1).padStart(2, "0"),
  name: "Contributor name",
  role: "Role or business",
  pattern: "[specific pattern]",
  outcome: "[specific business and life outcome]",
}));

export const registrationContent = {
  eyebrow: "Join me for Beyond the Bottleneck",
  headingStart: "There may be a whole lot of life waiting for you",
  headingItalic: "on the other side.",
  description:
    "Join me for Beyond the Bottleneck and hear how thriving online business owners stopped turning their freedom back into a job, what they changed, and what opened up when they did.",
  emailCapture: {
    provider: "drip",
    formId: "318414890",
    action: "https://www.getdrip.com/forms/318414890/submissions",
    campaignTag: "beyond-the-bottleneck-listening-tour",
  },
} as const;
