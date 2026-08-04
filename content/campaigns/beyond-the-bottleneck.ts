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
  launchDate: "October 5th",
} as const;

export const campaignNavigation: CampaignNavItem[] = [
  { href: "#for-you", label: "Who it’s for" },
  { href: "#inside", label: "Inside the series" },
  { href: "#about", label: "About Carly" },
];

export const heroContent = {
  brand: "BEYOND THE BOTTLENECK",
  eyebrow: "A free, bingeable audio series",
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
  "BEGINS OCTOBER 5TH",
  "LISTEN ON YOUR OWN TIME",
] as const;

export const checklistItems = [
  "You say yes before checking your calendar.",
  "You treat a client request like an emergency because waiting or the possibility of disappointing them feels uncomfortable.",
  "You carry work that someone else could own because it seems faster to do it yourself.",
  "You spend your best energy delivering for clients while the next version of your own business gets pushed to the back burner, every.single.passing.quarter.",
  "You know you need to hold the boundary, raise the rate, delegate the work, change the offer, or have the conversation.",
  "You are not confused about what needs to change.",
  "You just cannot seem to make yourself do it.",
] as const;

export const fearQuestions = [
  "What if the client is disappointed?",
  "What if you lose momentum?",
  "What if making the change creates more work before it creates relief?",
  "What if everything really does depend on you?",
] as const;

export const possibilityItems = [
  "More energy.",
  "More creativity.",
  "More room to think and develop the next evolution of your business",
  "More time with the people you love.",
  "More mornings that do not begin inside Slack.",
  "More afternoons that belong to your actual life.",
] as const;

export const evidenceItems = [
  "The pattern is not who you are.",
  "The change may be more manageable than you think.",
  "You do not have to change everything at once.",
  "A different way of working can be safe.",
  "You can care deeply about your clients without becoming responsible for everything.",
  "Your business is allowed to change because you are changing.",
  "Your life is allowed to take up space now, not after the inbox is empty.",
] as const;

export const conversationTopics = [
  "The specific change they made",
  "What they were afraid would happen",
  "How they respond to new bottlenecks now",
  "What opened up in their business and their life once they made the change.",
] as const;

export const contributors: Contributor[] = ["01", "02", "03"].map((id) => ({
  id,
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
  details: [
    "Begins October 5th",
    "Short audio interviews, each 20 minutes or less.",
    "Listen on your own schedule",
  ],
  finalLine:
    "Because the change you keep putting off may not be nearly as hard as continuing to live inside the pattern.",
} as const;
