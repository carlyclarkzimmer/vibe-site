export type DeliveryEpisode = {
  number: string;
  slug: string;
  contributorName?: string;
  contributorImage?: string;
  title: string;
  audioSource?: string;
  audioEmbed?: string;
  fullSeriesPrompt?: string;
  fullSeriesLabel?: string;
  fullSeriesUrl?: string;
  aboutEpisode?: string;
  shortBio?: string;
  bioHeading?: string;
  bioParagraphs?: string[];
  contributorLinks?: { label: string; url: string }[];
  showNotes: string[];
  resourceName?: string;
  resourceHeading?: string;
  resourceDescription?: string;
  resourceUrl?: string;
  resourceCtaLabel?: string;
  patternInterruptHref: string;
  hidePatternCallout?: boolean;
};

const patternInterruptHref = "#pattern-interrupt";

const contributorEpisodes = [
  ["kimberly-tara", "Kimberly Tara", "When Work Follows You Everywhere: Kimberly Tara on Rebuilding for Freedom"],
  ["rosemary-dede", "Rosemary Dede", "Adding Was the Bottleneck: Rosemary Dede on Simplifying for the Life She Wanted"],
  ["megan-yelaney", "Megan Yelaney", "When “I Can Just Do It Myself” Becomes the Bottleneck, with Megan Yelaney"],
  ["keenya-kelly", "Keenya Kelly", "“Always Me” to a Team That Runs Without Her: Keenya Kelly on the Inner Work of Leadership"],
  ["reland-logan", "Réland Logan", "The Business Rules You’re Allowed to Break with Réland Logan"],
  ["linda-sidhu", "Linda Sidhu", "Build Your Bucket-List Business with Linda Sidhu"],
  ["emily-reagan", "Emily Reagan", "She Lost Her Voice and Found a New Direction: Emily Reagan on the Business Changes She’d Been Avoiding"],
  ["jen-liddy", "Jen Liddy", "Care Deeply. Carry Less: Jen Liddy on Releasing Over-Responsibility"],
  ["renee-bowen", "Renee Bowen", "You Don’t Have to Be Everyone’s Nervous System: Renee Bowen on Letting Go of Holding It All Together"],
  ["zhara-marie-henry", "Zhara-Marie Henry", "You Hired Help. Now Let Them Help: Zhara-Marie Henry on Letting Go of Control"],
  ["michelle-knight", "Michelle Knight", "When Overachieving Becomes Your Safety Net with Michelle Knight"],
  ["ashley-krooks", "Ashley Krooks", "The Freedom Was There. She Just Couldn’t Feel It: Ashley Krooks on Nervous System Regulation"],
  ["kari-poppleton", "Kari Poppleton", "The Data That Lets You Do Less: Kari Poppleton on Simplifying Your Business"],
  ["sarah-young", "Sarah Young", "$100K Months and Still Stressed About Payroll: How Sarah Young Changed Course"],
  ["katie-ferro", "Katie Ferro", "They’re Not Your Rules: Katie Ferro on Rewriting the Rules of Work"],
  ["christine-williams", "Christine Williams", "There’s More Than One Way to Scale: Christine Williams on Building Better, Not Bigger"],
  ["kristin-brabant", "Kristin Brabant", "From Push Harder to Rich and Rested: Kristin Brabant on Breaking Her Oldest Business Pattern"],
  ["holly-haynes", "Holly Haynes", "Stop Waiting for Life to Calm Down: Holly Haynes on Building a Life-First Business"],
  ["heather-sager", "Heather Sager", "The 13-Hour Workweek: How Heather Sager Stopped Feeling Behind"],
  ["beth-nydick", "Beth Nydick", "The Visibility Bottleneck: Beth Nydick on What Happens After You Get Seen"],
  ["nata-salvatori", "Nata Salvatori", "The Business Can’t Grow If Everything Runs Through You: Nata Salvatori on Becoming the CEO"],
  ["ash-mcdonald", "Ash McDonald", "What She Got Back When She Left Instagram: Ash McDonald on Choosing Her Attention"],
  ["holly-ostrout", "Holly Ostrout", "You’re Not Back at the Beginning: Holly Ostrout on Making a Different Choice This Time"],
] as const;

export const deliveryEpisodes: DeliveryEpisode[] = [
  {
    number: "01",
    slug: "intro",
    title: "Welcome to Beyond the Bottleneck: How to Use This Series",
    showNotes: ["[SHOW NOTES TO BE ADDED]"],
    patternInterruptHref,
  },
  {
    number: "02",
    slug: "kimberly-tara",
    contributorName: "Kimberly Tara",
    contributorImage: "/contributors/kimberly-tara.jpg",
    title: "When Work Follows You Everywhere: Kimberly Tara on Rebuilding for Freedom",
    audioEmbed: '<iframe src="https://podcasts.helloaudio.fm/player?episodeId=3b1f3ab8-5653-4bbb-9320-67f556fb00b5&code=ErJfjS4Um0" width="400" height="100" scrolling="no" frameBorder="0" style="width: 400px; height: 100px; border: 0; overflow: hidden;"></iframe>',
    fullSeriesPrompt: "→ Take Beyond the Bottleneck with you.",
    fullSeriesLabel: "Listen to the full series in your favorite podcast app →",
    fullSeriesUrl: "https://podcasts.helloaudio.fm/subscribe/4e65bd8b-48e0-46c3-a41f-844a5435a02d/ErJfjS4Um0",
    aboutEpisode: "Beyond the Bottleneck exists to help business owners see the gap between fixing the structure of a business and fixing the pattern underneath it — and Kimberly Tara's story is a clear example of both at once. She rebuilt her CPA firm's operations, but what actually made it stick was the internal work: trusting other people, tolerating mistakes, and loosening her grip on the belief that everything had to come back to her. This conversation shows listeners why structural change alone doesn't hold if the underlying pattern stays the same.",
    bioHeading: "Meet Kimberly Tara",
    bioParagraphs: [
      "Kimberly Tara is a CPA and Certified Tax Planner who helps profitable business owners keep more of what they earn by making tax planning a year-round strategy instead of an April scramble.",
      "She started The Tara CPA Firm in 2016, hit six figures in her first year, and now leads a team of six while raising four kids in Charlotte, North Carolina.",
    ],
    contributorLinks: [
      { label: "Visit Kimberly's Website", url: "https://www.taracpafirm.com/" },
      { label: "Follow Kimberly on Instagram", url: "https://instagram.com/kimberlytaracpa" },
    ],
    showNotes: [],
    resourceHeading: "Grab Kimberly Tara’s Resource",
    resourceName: "Free Tax Savings Calculator",
    resourceDescription: "Most business owners have no idea whether they're overpaying in taxes. Kimberly's free calculator takes about two minutes and gives you a personalized estimate of what you could be saving and what to do next.",
    resourceUrl: "https://app.taxmove.io/",
    resourceCtaLabel: "Get the Free Tax Savings Calculator →",
    patternInterruptHref,
    hidePatternCallout: true,
  },
  ...contributorEpisodes.slice(1).map(([slug, contributorName, title], index) => ({
    number: String(index + 3).padStart(2, "0"),
    slug,
    contributorName,
    contributorImage: `/contributors/${slug}.jpg`,
    title,
    shortBio: "[SHORT BIO TO BE ADDED]",
    showNotes: ["[SHOW NOTES TO BE ADDED]"],
    resourceName: "[RESOURCE NAME]",
    resourceDescription: "[SHORT RESOURCE DESCRIPTION]",
    patternInterruptHref,
  })),
  {
    number: "25",
    slug: "carly-clark-zimmer",
    contributorName: "Carly Clark Zimmer",
    contributorImage: "/contributors/carly-clark-zimmer-host-2.jpg",
    title: "The Pattern Behind the Plateau, with Carly Clark Zimmer",
    shortBio: "[SHORT BIO TO BE ADDED]",
    showNotes: ["[SHOW NOTES TO BE ADDED]"],
    patternInterruptHref,
  },
];
