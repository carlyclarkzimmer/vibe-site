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
  eyebrow: "Free audio series",
  titleStart: "Beyond",
  titleItalic: "the",
  titleEnd: "Bottleneck",
  description:
    "How thriving online business owners stopped turning their freedom back into a job, and what opened up when they did",
  descriptionLines: [
    "How thriving online business owners stopped",
    "turning their freedom back into a job,",
    "and what opened up when they did",
  ],
  cta: "ACCESS THE AUDIOS",
  image: "/btb-group-photo-transparent.png",
  imageAlt: "The Beyond the Bottleneck audio series contributors",
} as const;

export const tickerItems = [
  "FREE, BINGEABLE AUDIO SERIES",
  "BEGINS OCTOBER 5TH",
  "LISTEN ON YOUR OWN TIME",
  "20-MINUTE INTERVIEWS",
] as const;

export const heroBannerItems = [
  "DECISIONS",
  "EXPERIMENTS",
  "BREAKING GENERATIONAL PATTERNS",
  "REWRITING THE RULES",
  "22 Honest conversations about what it takes to change the way your business depends on you.",
  "BEGINS OCTOBER 5",
] as const;

export const checklistItems = [
  "You say yes before checking your calendar.",
  "You treat a client request like an emergency because you don't want to disappoint anyone.",
  "You don't delegate because it seems faster to do it yourself.",
  "You spend your best energy delivering for clients while the next version of your own business gets pushed to the back burner, every single passing quarter.",
  "You know you need to hold the boundary, raise the rate, delegate the work, change the offer, or have the conversation… but there's always a reason not to.",
  "You are not confused about what needs to change. You just cannot seem to make yourself do it.",
] as const;

export const fearQuestions = [
  "What if the client is disappointed?",
  "What if you lose momentum?",
  "What if making the change creates more work before it creates relief?",
] as const;

export const reframeQuestions = [
  "What if the boundary you've spent six months worrying about takes one uncomfortable conversation?",
  "What if the thing you are afraid to delegate works perfectly well without you?",
  "What if someone has a feeling about your decision and you survive it?",
  "What if the new way feels difficult for a day, or a week, and then starts getting easier?",
] as const;

export const possibilityItems = [
  "More energy.",
  "More creativity.",
  "More room to think and develop the next evolution of your business.",
  "More time with the people you love.",
  "More mornings that do not begin inside Slack.",
  "More afternoons that belong to your actual life.",
] as const;

export const conversationTopics = [
  ["The bottleneck", "What wasn't working and what it was costing them."],
  ["The fear", "What they thought might happen if they changed it."],
  ["The change", "What they actually did differently."],
  ["The other side", "What opened up in their business and life afterward."],
  ["What happens now", "How they recognize and respond to new bottlenecks faster."],
] as const;

export const evidenceItems = [
  "The pattern is not who you are.",
  "The change may be more manageable than you think.",
  "You don't have to change everything at once.",
  "A different way of working can be safe.",
  "You can care deeply about your clients without becoming responsible for everything.",
  "Your business is allowed to change because you are changing.",
  "Your life is allowed to take up space now, not after the inbox is empty.",
] as const;

export const contributors: Contributor[] = Array.from({ length: 12 }, (_, index) => ({
  id: String(index + 1).padStart(2, "0"),
  name: "Contributor name",
  role: "Role or business",
  pattern: "[specific pattern]",
  outcome: "[specific business and life outcome]",
}));

export const registrationContent = {
  eyebrow: "",
  headingStart:
    "Join me for Beyond the Bottleneck and hear how thriving online business owners stopped turning their freedom back into a job, what they changed, and what opened up when they did.",
  headingItalic: "",
  description: "",
  emailCapture: {
    provider: "drip",
    formId: "419624977",
    action: "https://www.getdrip.com/forms/419624977/submissions",
    campaignTag: "Beyond the Bottleneck Audio Series 2026",
    recaptchaSiteKey: "6LdKtHUtAAAAAKOHfTjUMdNYjc0H1vfetOitEMMP",
  },
} as const;
