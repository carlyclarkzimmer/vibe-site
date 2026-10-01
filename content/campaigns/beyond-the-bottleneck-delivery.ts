export const podcastAppUrl =
  "https://podcasts.helloaudio.fm/subscribe/4e65bd8b-48e0-46c3-a41f-844a5435a02d/ErJfjS4Um0";

export type DeliveryEpisode = {
  slug: string;
  contributorName?: string;
  contributorImage?: string;
  title: string;
  audioSource?: string;
  audioEmbed?: string;
  aboutEpisode?: string;
  bioHeading?: string;
  bioParagraphs?: string[];
  contributorLinks?: { label: string; url: string }[];
  resourceEyebrow?: string;
  resourceHeading?: string;
  resourceName?: string;
  resourceDescription?: string;
  resourceUrl?: string;
  resourceCtaLabel?: string;
  placeholder?: boolean;
};

export type DeliveryDirectoryCard = {
  id: string;
  name: string;
  episodeHook: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  placeholder?: boolean;
};

export const directoryCards: DeliveryDirectoryCard[] = [
  {
    id: "kimberly-tara",
    name: "Kimberly Tara",
    episodeHook: "When Work Follows You Everywhere",
    href: "#episode-kimberly-tara",
    image: "/contributors/kimberly-tara.jpg",
    imageAlt: "Kimberly Tara",
  },
  ...Array.from({ length: 23 }, (_, index) => ({
    id: `contributor-placeholder-${index + 1}`,
    name: "Contributor Name",
    episodeHook: "Episode Title",
    placeholder: true,
  })),
];

export const deliveryEpisodes: DeliveryEpisode[] = [
  {
    slug: "intro",
    title: "Welcome to Beyond the Bottleneck: How to Use This Series",
  },
  {
    slug: "kimberly-tara",
    contributorName: "Kimberly Tara",
    contributorImage: "/contributors/kimberly-tara.jpg",
    title: "When Work Follows You Everywhere: Kimberly Tara on Rebuilding for Freedom",
    audioEmbed:
      '<iframe src="https://podcasts.helloaudio.fm/player?episodeId=3b1f3ab8-5653-4bbb-9320-67f556fb00b5&code=ErJfjS4Um0" width="400" height="100" scrolling="no" frameBorder="0" style="width: 400px; height: 100px; border: 0; overflow: hidden;"></iframe>',
    aboutEpisode:
      "Beyond the Bottleneck exists to help business owners see the gap between fixing the structure of a business and fixing the pattern underneath it — and Kimberly Tara's story is a clear example of both at once. She rebuilt her CPA firm's operations, but what actually made it stick was the internal work: trusting other people, tolerating mistakes, and loosening her grip on the belief that everything had to come back to her. This conversation shows listeners why structural change alone doesn't hold if the underlying pattern stays the same.",
    bioHeading: "Meet Kimberly Tara",
    bioParagraphs: [
      "Kimberly Tara is a CPA and Certified Tax Planner who helps profitable business owners keep more of what they earn by making tax planning a year-round strategy instead of an April scramble.",
      "She started The Tara CPA Firm in 2016, hit six figures in her first year, and now leads a team of six while raising four kids in Charlotte, North Carolina.",
    ],
    contributorLinks: [
      { label: "Website", url: "https://www.taracpafirm.com/" },
      { label: "Instagram", url: "https://instagram.com/kimberlytaracpa" },
    ],
    resourceEyebrow: "From Kimberly",
    resourceHeading: "Grab Kimberly Tara's Resource",
    resourceName: "Free Tax Savings Calculator",
    resourceDescription:
      "Most business owners have no idea whether they're overpaying in taxes. Kimberly's free calculator takes about two minutes and gives you a personalized estimate of what you could be saving and what to do next.",
    resourceUrl: "https://app.taxmove.io/",
    resourceCtaLabel: "Grab Kimberly's Resource →",
  },
  {
    slug: "placeholder-one",
    contributorName: "Contributor Name",
    title: "Episode Title",
    aboutEpisode: "[EPISODE DESCRIPTION PLACEHOLDER]",
    bioHeading: "Meet Contributor Name",
    bioParagraphs: ["[CONTRIBUTOR BIO PLACEHOLDER]"],
    resourceEyebrow: "From Contributor",
    resourceHeading: "Grab Contributor Name's Resource",
    resourceName: "[RESOURCE PLACEHOLDER]",
    resourceDescription: "[RESOURCE DESCRIPTION PLACEHOLDER]",
    placeholder: true,
  },
  {
    slug: "placeholder-two",
    contributorName: "Contributor Name",
    title: "Episode Title",
    aboutEpisode: "[EPISODE DESCRIPTION PLACEHOLDER]",
    bioHeading: "Meet Contributor Name",
    bioParagraphs: ["[CONTRIBUTOR BIO PLACEHOLDER]"],
    resourceEyebrow: "From Contributor",
    resourceHeading: "Grab Contributor Name's Resource",
    resourceName: "[RESOURCE PLACEHOLDER]",
    resourceDescription: "[RESOURCE DESCRIPTION PLACEHOLDER]",
    placeholder: true,
  },
];
