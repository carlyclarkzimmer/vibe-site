export type CampaignNavItem = {
  href: string;
  label: string;
};

export type Contributor = {
  id: string;
  name: string;
  role: string;
  episodeTitle: string;
  soundbite: string;
  image?: string;
};

export type ContributorChapter = {
  number: string;
  title: string;
  contributors: Contributor[];
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
  image: "/btb-hero-carly-center.png",
  imageAlt: "Carly Clark Zimmer in an emerald green blazer centered among the Beyond the Bottleneck contributors",
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

export const featuredHost: {
  name: string;
  role: string;
  episodeTitle: string;
  image?: string;
} = {
  name: "Carly Clark Zimmer",
  role: "Behavioral Change Coach, ICF PCC",
  episodeTitle: "The Pattern Behind the Plateau",
};

export const contributorChapters: ContributorChapter[] = [
  {
    number: "01",
    title: "When what made you successful becomes the bottleneck",
    contributors: [
      {
        id: "kristin-brabant",
        name: "Kristin Brabant",
        image: "/contributors/kristin-brabant.jpg",
        role: "Business Strategist, helping service providers become Rich & Rested",
        episodeTitle: "From Push Harder to Rich and Rested: Kristin Brabant on Breaking Her Oldest Business Pattern",
        soundbite: "I had to learn that rest wasn’t something I earned after the work was done.",
      },
      {
        id: "michelle-knight",
        name: "Michelle Knight",
        image: "/contributors/michelle-knight.jpg",
        role: "Personal Branding & Storytelling Expert, Founder of Brandmerry",
        episodeTitle: "When Overachieving Becomes Your Safety Net with Michelle Knight",
        soundbite: "Overachieving made me feel safe.",
      },
      {
        id: "jen-liddy",
        name: "Jen Liddy",
        image: "/contributors/jen-liddy.jpg",
        role: "Messaging Strategist",
        episodeTitle: "Care Deeply. Carry Less: Jen Liddy on Releasing Over-Responsibility",
        soundbite: "I would put my clients in my backpack and walk them up the mountain.",
      },
      {
        id: "sarah-young",
        name: "Sarah Young",
        image: "/contributors/sarah-young.jpg",
        role: "Scaling & Wealth Strategist",
        episodeTitle: "$100K Months and Still Stressed About Payroll: How Sarah Young Changed Course",
        soundbite: "We were doing $100K-plus months, and I was still stressing about payroll.",
      },
      {
        id: "emily-reagan",
        name: "Emily Reagan",
        image: "/contributors/emily-reagan.jpg",
        role: "Fractional CMO & Marketing Strategist, Founder of The Digital Marketer’s Workgroup",
        episodeTitle: "She Lost Her Voice and Found a New Direction: Emily Reagan on the Business Changes She’d Been Avoiding",
        soundbite: "I was suppressing this desire or need to evolve.",
      },
      {
        id: "ashley-krooks",
        name: "Ashley Krooks",
        image: "/contributors/ashley-krooks.jpg",
        role: "Nervous System & Somatic Coach, Founder of The Nourished Woman",
        episodeTitle: "The Freedom Was There. She Just Couldn’t Feel It: Ashley Krooks on Nervous System Regulation",
        soundbite: "What got you here will not get you there.",
      },
    ],
  },
  {
    number: "02",
    title: "Rewriting the rules of how you work",
    contributors: [
      {
        id: "katie-ferro",
        name: "Katie Ferro",
        role: "CPA & Bookkeeping Business Mentor",
        episodeTitle: "They’re Not Your Rules: Katie Ferro on Rewriting the Rules of Work",
        soundbite: "Just because this is the way I’ve always done it doesn’t mean this is the way I have to keep doing it.",
      },
      {
        id: "reland-logan",
        name: "Réland Logan",
        image: "/contributors/reland-logan.jpg",
        role: "Brand Strategist, Creator of BrandExtraordinary™",
        episodeTitle: "The Business Rules You’re Allowed to Break with Réland Logan",
        soundbite: "I get to decide what this looks like.",
      },
      {
        id: "holly-haynes",
        name: "Holly Haynes",
        image: "/contributors/holly-haynes.jpg",
        role: "Business Strategist, Founder of Anti-Social School™",
        episodeTitle: "Stop Waiting for Life to Calm Down: Holly Haynes on Building a Life-First Business",
        soundbite: "I started putting the life things on the calendar first.",
      },
      {
        id: "christine-williams",
        name: "Christine Williams",
        image: "/contributors/christine-williams.jpg",
        role: "Business Mentor, Founder of The Boutique CEO™",
        episodeTitle: "There’s More Than One Way to Scale: Christine Williams on Building Better, Not Bigger",
        soundbite: "There’s more than one way to scale.",
      },
      {
        id: "heather-sager",
        name: "Heather Sager",
        image: "/contributors/heather-sager.jpg",
        role: "Speaking & Visibility Strategist, Host of Hint of Hustle",
        episodeTitle: "The 13-Hour Workweek: How Heather Sager Stopped Feeling Behind",
        soundbite: "I had to stop measuring my success by how much I was doing.",
      },
      {
        id: "holly-ostrout",
        name: "Holly Ostrout",
        image: "/contributors/holly-ostrout.jpg",
        role: "Book Coach & Publisher, Creator of the Book Mapping Process",
        episodeTitle: "You’re Not Back at the Beginning: Holly Ostrout on Making a Different Choice This Time",
        soundbite: "I wasn’t starting over. I was starting with everything I knew now.",
      },
    ],
  },
  {
    number: "03",
    title: "Letting go of control, responsibility & “it has to be me”",
    contributors: [
      {
        id: "keenya-kelly",
        name: "Keenya Kelly",
        image: "/contributors/keenya-kelly.jpg",
        role: "Video Marketing & Monetization Strategist, CEO of If You Create It",
        episodeTitle: "“Always Me” to a Team That Runs Without Her: Keenya Kelly on the Inner Work of Leadership",
        soundbite: "I could not grow beyond myself.",
      },
      {
        id: "nata-salvatori",
        name: "Nata Salvatori",
        image: "/contributors/nata-salvatori.jpg",
        role: "Business Coach & Fractional COO, Founder of Accidental CEO",
        episodeTitle: "The Business Can’t Grow If Everything Runs Through You: Nata Salvatori on Becoming the CEO",
        soundbite: "I had to stop being the person doing everything and become the CEO.",
      },
      {
        id: "megan-yelaney",
        name: "Megan Yelaney",
        image: "/contributors/megan-yelaney.jpg",
        role: "Business Strategist, Creator of the Distinctive Edge Framework",
        episodeTitle: "When “I Can Just Do It Myself” Becomes the Bottleneck, with Megan Yelaney",
        soundbite: "If I can do it and save money, then I should just do it.",
      },
      {
        id: "zhara-marie-henry",
        name: "Zhara-Marie Henry",
        image: "/contributors/zhara-marie-henry.jpg",
        role: "Operations Consultant, Founder of Abide",
        episodeTitle: "You Hired Help. Now Let Them Help: Zhara-Marie Henry on Letting Go of Control",
        soundbite: "Just because I hired someone didn’t mean I had actually let go.",
      },
      {
        id: "renee-bowen",
        name: "Renee Bowen",
        image: "/contributors/renee-bowen.jpg",
        role: "Business Strategist & Coach, Host of Tried & True with a Dash of Woo",
        episodeTitle: "You Don’t Have to Be Everyone’s Nervous System: Renee Bowen on Letting Go of Holding It All Together",
        soundbite: "I was everyone’s nervous system.",
      },
      {
        id: "kimberly-tara",
        name: "Kimberly Tara",
        image: "/contributors/kimberly-tara.jpg",
        role: "CPA & Certified Tax Planner, Founder of The Tara CPA Firm",
        episodeTitle: "When Work Follows You Everywhere: Kimberly Tara on Rebuilding for Freedom",
        soundbite: "Work followed me everywhere.",
      },
    ],
  },
  {
    number: "04",
    title: "Simplifying, choosing & making room for what matters",
    contributors: [
      {
        id: "rosemary-dede",
        name: "Rosemary Dede",
        image: "/contributors/rosemary-dede.jpg",
        role: "Business Coach, Creator of the Balanced Business Formula™",
        episodeTitle: "Adding Was the Bottleneck: Rosemary Dede on Simplifying for the Life She Wanted",
        soundbite: "My instinct was always to add something, and adding was the bottleneck.",
      },
      {
        id: "ash-mcdonald",
        name: "Ash McDonald",
        image: "/contributors/ash-mcdonald.jpg",
        role: "The Entrepreneur’s Therapist, Host of Shamelessly Ambitious®",
        episodeTitle: "What She Got Back When She Left Instagram: Ash McDonald on Choosing Her Attention",
        soundbite: "I had to decide where I actually wanted my attention to go.",
      },
      {
        id: "linda-sidhu",
        name: "Linda Sidhu",
        image: "/contributors/linda-sidhu.jpg",
        role: "Founder of MixerMind & Personality Quiz Expert",
        episodeTitle: "Build Your Bucket-List Business with Linda Sidhu",
        soundbite: "I started asking, what do I want on my business bucket list?",
      },
      {
        id: "beth-nydick",
        name: "Beth Nydick",
        image: "/contributors/beth-nydick.jpg",
        role: "Media Strategist, Creator of Mic to Millions™",
        episodeTitle: "The Visibility Bottleneck: Beth Nydick on What Happens After You Get Seen",
        soundbite: "Getting the opportunity isn’t the end of the road. That’s actually the beginning.",
      },
      {
        id: "kari-poppleton",
        name: "Kari Poppleton",
        image: "/contributors/kari-poppleton.jpg",
        role: "Business Operations & Marketing Measurement Consultant",
        episodeTitle: "The Data That Lets You Do Less: Kari Poppleton on Simplifying Your Business",
        soundbite: "Once I knew what was actually working, I could stop doing so much.",
      },
    ],
  },
];

// The unpublished delivery-page draft still uses its original visible placeholders.
export const deliveryContributors = Array.from({ length: 12 }, (_, index) => ({
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
