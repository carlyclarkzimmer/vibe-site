export type DeliveryEpisode = {
  number: string;
  slug: string;
  contributorName?: string;
  contributorImage?: string;
  title: string;
  audioSource?: string;
  audioEmbed?: string;
  shortBio?: string;
  showNotes: string[];
  resourceName?: string;
  resourceDescription?: string;
  resourceUrl?: string;
  patternInterruptHref: string;
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
    title: "Intro",
    showNotes: ["[SHOW NOTES TO BE ADDED]"],
    patternInterruptHref,
  },
  ...contributorEpisodes.map(([slug, contributorName, title], index) => ({
    number: String(index + 2).padStart(2, "0"),
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
