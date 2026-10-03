export const podcastAppUrl =
  "https://podcasts.helloaudio.fm/subscribe/4e65bd8b-48e0-46c3-a41f-844a5435a02d/ErJfjS4Um0";

export type DeliveryResource = {
  name: string;
  description?: string;
  url: string;
  ctaLabel?: string;
};

export type DeliveryEpisode = {
  slug: string;
  contributorName?: string;
  contributorImage?: string;
  directoryHook?: string;
  title: string;
  audioSource?: string;
  audioEmbed?: string;
  aboutEpisode?: string;
  bioHeading?: string;
  bioParagraphs?: string[];
  contributorLinks?: { label: string; url: string }[];
  resourceHeading?: string;
  resources?: DeliveryResource[];
  placeholder?: boolean;
};

const helloAudioEmbed = (episodeId: string) =>
  `<iframe src="https://podcasts.helloaudio.fm/player?episodeId=${episodeId}&code=ErJfjS4Um0" width="400" height="100" scrolling="no" frameBorder="0" style="width: 400px; height: 100px; border: 0; overflow: hidden;"></iframe>`;

export type DeliveryDirectoryCard = {
  id: string;
  name: string;
  episodeHook: string;
  href: string;
  image?: string;
  imageAlt?: string;
  placeholder?: boolean;
};

const contributorEpisodes: DeliveryEpisode[] = [
  {
    slug: "kimberly-tara",
    contributorName: "Kimberly Tara",
    contributorImage: "/contributors/kimberly-tara.jpg",
    directoryHook: "When Work Follows You Everywhere",
    title: "When Work Follows You Everywhere: Kimberly Tara on Rebuilding for Freedom",
    audioEmbed: helloAudioEmbed("3b1f3ab8-5653-4bbb-9320-67f556fb00b5"),
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
    resourceHeading: "Grab Kimberly Tara's Resource",
    resources: [{
      name: "Free Tax Savings Calculator",
      description: "Most business owners have no idea whether they're overpaying in taxes. Kimberly's free calculator takes about two minutes and gives you a personalized estimate of what you could be saving and what to do next.",
      url: "https://app.taxmove.io/",
      ctaLabel: "Grab Kimberly's Resource →",
    }],
  },
  {
    slug: "rosemary-dede",
    contributorName: "Rosemary Dede",
    contributorImage: "/contributors/rosemary-dede.jpg",
    directoryHook: "Adding Was the Bottleneck",
    title: "Adding Was the Bottleneck: Rosemary Dede on Simplifying for the Life She Wanted",
    audioEmbed: helloAudioEmbed("c1603c41-7681-4964-9538-bceffa8c47bd"),
    aboutEpisode: "Beyond the Bottleneck is about noticing the bottleneck hiding inside a habit that looks like growth, and Rosemary Dede's story catches it in the act. You add a layer, get comfortable with it, then add another, and another, until you're too busy in your business to have a life outside it. It's especially easy for high achievers, because you probably can do it all. But just because you can doesn't mean you should, or even have to. This conversation gives listeners a way to catch themselves before the next layer gets added.",
    bioHeading: "Meet Rosemary Dede",
    bioParagraphs: [
      "Rosemary Dede is a business coach helping purpose-driven women build profitable, sustainable businesses that support their lives, not run them. After more than a decade in sales and marketing, she combines practical business strategy with a holistic approach to help women simplify their businesses, attract the right clients, and grow with intention.",
      "Through her signature Balanced Business Formula™, she helps entrepreneurs move from overwhelmed and overworked to clear, confident CEOs who can grow without sacrificing their wellbeing, freedom, or the life they're building it for, because success should feel as good as it looks.",
    ],
    contributorLinks: [
      { label: "Website", url: "https://rosemarydede.com/" },
      { label: "Instagram", url: "https://www.instagram.com/rosemary.dede/" },
    ],
    resourceHeading: "Grab Rosemary Dede's Resource",
    resources: [{ name: "The Business Alignment Audit: Identify What's Keeping Your Business Stuck and What Needs to Change", url: "https://www.balancedbusinessformula.com/bizz-alignment-audit" }],
  },
  {
    slug: "meg-yelaney",
    contributorName: "Meg Yelaney",
    contributorImage: "/contributors/megan-yelaney.jpg",
    directoryHook: "When “I Can Just Do It Myself” Becomes the Bottleneck",
    title: "When “I Can Just Do It Myself” Becomes the Bottleneck, with Meg Yelaney",
    audioEmbed: helloAudioEmbed("f5c03d5f-d7cf-4f32-8c8f-ae2590c0b66b"),
    aboutEpisode: "Beyond the Bottleneck is about surfacing the bottleneck hiding inside a habit that feels harmless — and “I can just do it myself” is one of the most common. Meg Yelaney's story shows what's actually true about that pattern: the task itself might only take five minutes, but the cost isn't the task — it's the mental load of holding it in your head until it's done. This conversation reframes a habit most listeners will recognize instantly, and points toward what it takes to actually set it down.",
    bioHeading: "Meet Meg Yelaney",
    bioParagraphs: [
      "Meg Yelaney is a business strategist who's helped over 1,000 coaches grow their brands by getting crystal clear on what makes them different — and using that to create demand. Through her Distinctive Edge Framework, clients go from blending in and chasing inconsistent sales to being fully themselves, talking about what they do, and getting hired because of it. Some have hit their first $10K months; others have built multi-six and even million-dollar businesses.",
      "Offline, Meg is a twin mom to Ayden and Kevin, fur mom to mini goldendoodle Luna, musical theatre junkie, and avid fantasy smut reader.",
    ],
    contributorLinks: [
      { label: "Website", url: "http://www.meganyelaney.com" },
      { label: "Instagram", url: "https://www.instagram.com/meganyelaney/" },
      { label: "Business Not as Usual Podcast", url: "https://meganyelaney.com/podcast" },
    ],
    resourceHeading: "Grab Meg Yelaney's Resource",
    resources: [{ name: "Main Character Energy (private podcast)", url: "https://meganyelaney.com/main-character-energy" }],
  },
  {
    slug: "keenya-kelly",
    contributorName: "Keenya Kelly",
    contributorImage: "/contributors/keenya-kelly.jpg",
    directoryHook: "“Always Me” to a Team That Runs Without Her",
    title: "“Always Me” to a Team That Runs Without Her: Keenya Kelly on the Inner Work of Leadership",
    audioEmbed: helloAudioEmbed("a81c2c0e-964b-463f-abc4-2aa5e90c519f"),
    aboutEpisode: "Beyond the Bottleneck is about naming the bottleneck that's willing to keep showing up in new disguises — and Keenya Kelly's story is a masterclass in staying in the work even after you think you've already done it. This conversation is a reminder that inner work isn't a one-time fix; it's an ongoing practice of noticing where you're contributing to your own patterns, getting support, and building evidence — team hire by team hire — that you can lead differently.",
    bioHeading: "Meet Keenya Kelly",
    bioParagraphs: ["Keenya Kelly is a video and monetization strategist and host of the If You Create podcast. She helps business owners grow their audiences and generate revenue through video content."],
    contributorLinks: [
      { label: "Website", url: "http://www.keenyakelly.com" },
      { label: "Instagram", url: "https://www.instagram.com/keenyakelly/" },
    ],
    resourceHeading: "Grab Keenya Kelly's Resource",
    resources: [{ name: "400 Viral Hooks Bundle", description: "Keenya's complete library of proven opening lines designed to stop the scroll — organized by niche and ready to use in your content today.", url: "https://400hooksbundle.keenyakelly.com/400hooks" }],
  },
  {
    slug: "reland-logan",
    contributorName: "Réland Logan",
    contributorImage: "/contributors/reland-logan.jpg",
    directoryHook: "The Business Rules You’re Allowed to Break",
    title: "The Business Rules You’re Allowed to Break with Réland Logan",
    audioEmbed: helloAudioEmbed("f3e63769-2159-4560-8209-fafa96475fea"),
    aboutEpisode: "Beyond the Bottleneck is about the rules we follow so long that we forget we chose them, and Réland Logan's story is a perfect example. Early in her business, logic overrode alignment. She followed the standard playbook, including discovery calls, the go-to way many of us have been taught to sell one-on-one services. This conversation is a reminder that just because you can do something doesn't mean you should, and it shows what becomes possible when you start deciding which rules still belong in your business and your life.",
    bioHeading: "Meet Réland Logan",
    bioParagraphs: ["Réland Logan is the award-winning brand strategist behind the BrandExtraordinary™ method, helping brilliant women consultants stop getting passed over, under-quoted, or ghosted. She covers the intersection of messaging, authority, and the psychology that unlocks Champagne-level clients."],
    contributorLinks: [
      { label: "Website", url: "http://www.graydigitalmktg.co" },
      { label: "LuxeLeap Podcast", url: "https://podcasts.apple.com/us/podcast/the-luxe-leap/id1801702536" },
    ],
    resourceHeading: "Grab Réland Logan's Resource",
    resources: [{ name: "Profit from Hello", description: "Discover the zero-discovery-call method that builds trust in sequence and converts 1 in 3 buyers into high-ticket clients.", url: "https://graydigitalmktg.co/profit-from-hello" }],
  },
  {
    slug: "linda-sidhu",
    contributorName: "Linda Sidhu",
    contributorImage: "/contributors/linda-sidhu.jpg",
    directoryHook: "Build Your Bucket-List Business",
    title: "Build Your Bucket-List Business with Linda Sidhu",
    audioEmbed: helloAudioEmbed("3e8a53db-704a-4d1b-9252-b4e08596209d"),
    aboutEpisode: "Beyond the Bottleneck is about noticing the bottleneck hiding on the other side of a strength, and Linda Sidhu's story does that beautifully. She's a natural giver, a connector, someone who instinctively sees how to support people and bring them together. But complex life circumstances put her in a place where she had to practice something much less familiar: receiving. This conversation moves past the spiritual-space talk about “opening up to receive” and gets into what that actually looks and feels like in practice.",
    bioHeading: "Meet Linda Sidhu",
    bioParagraphs: [
      "Linda Sidhu is the founder of MixerMind, a curated community for high-caliber entrepreneurs who value meaningful connections, strategic collaborations, and long-term business growth. As a super connector, she's known for bringing the right people into the right rooms, where real opportunities are created.",
      "She's also an expert in creating compelling personality quizzes that attract aligned subscribers and turn cold audiences into engaged communities. Recognized by Forbes, Linda's insights have been featured on platforms like Cubicle to CEO and The Systems Saved Me Podcast, where she shares how to grow a business through connection-driven strategies rather than constant content creation.",
      "Her work is rooted in one core belief: when you build the right relationships, everything changes.",
    ],
    contributorLinks: [
      { label: "Website", url: "http://www.lindasidhu.com" },
      { label: "MixerMind Waitlist", url: "https://lindasidhu.com/mixermind-waitlist" },
    ],
    resourceHeading: "Grab Linda Sidhu's Resource",
    resources: [{ name: "Quiz: What's Your Visibility If-Factor", description: "Find out how you express yourself naturally in the spotlight, uncover your untapped visibility gifts, and get access to a curated strategy designed to support your personality.", url: "https://lindasidhu.com/quiz" }],
  },
  {
    slug: "emily-reagan",
    contributorName: "Emily Reagan",
    contributorImage: "/contributors/emily-reagan.jpg",
    directoryHook: "She Lost Her Voice and Found a New Direction",
    title: "She Lost Her Voice and Found a New Direction: Emily Reagan on the Business Changes She’d Been Avoiding",
    audioEmbed: helloAudioEmbed("a42bec00-913d-4237-92b4-157ab548ec1b"),
    aboutEpisode: "Beyond the Bottleneck is about the beliefs that quietly keep us in charge of everything, and Emily Reagan's story names a big one: it's my responsibility to make sure everybody has what they need. It showed up in her team, where things kept coming back onto her plate, and in her community, where she felt responsible for everyone's information, trainings, and upskilling. This conversation shows what became possible when she chose to do less: a simpler business and a clearer sense of the direction she actually wants to take it.",
    bioHeading: "Meet Emily Reagan",
    bioParagraphs: [
      "Emily Reagan is a fractional CMO, marketing strategist, and founder of The Digital Marketer's Workgroup, an application-only community for marketing and ops specialists. With 15+ years in PR and digital marketing, she curates a room where email strategists, launch managers, copywriters, funnel builders, and fractional CMOs connect, refer, and vouch for each other: trust you can't post, advertise, or buy. She helps specialists sharpen their positioning and become the name that gets referred in rooms they're not even in.",
      "Off the clock, you'll find her on Catan roads, soccer sidelines, and the family pickleball court. Catch her top-rated podcast, The Marketing Freelancer: Unicorns Unite, with 130,000+ downloads.",
    ],
    contributorLinks: [
      { label: "Website", url: "https://emilyreaganpr.com" },
      { label: "Instagram", url: "https://www.instagram.com/emilyreaganpr/" },
      { label: "The Marketing Freelancer Podcast", url: "https://emilyreaganpr.com/podcast/" },
    ],
    resourceHeading: "Grab Emily Reagan's Resource",
    resources: [{ name: "Guide: Hire Your First Virtual Assistant Within 4 Weeks", description: "A guide to help you stop doing everything yourself and bring on your first virtual assistant, step by step.", url: "https://emilyreaganpr.com/hire" }],
  },
  {
    slug: "jen-liddy",
    contributorName: "Jen Liddy",
    contributorImage: "/contributors/jen-liddy.jpg",
    directoryHook: "Care Deeply. Carry Less",
    title: "Care Deeply. Carry Less: Jen Liddy on Releasing Over-Responsibility",
    audioEmbed: helloAudioEmbed("e7f3c646-a84b-404c-a47b-44beaee3a0d9"),
    aboutEpisode: "Beyond the Bottleneck exists to help small business owners spot the bottleneck they can't quite see — and this conversation is a case study in one of the sneakiest ones: the pattern of over-delivering until you become the thing holding your business back. Jen Liddy's story shows what it actually looks like to make yourself indispensable, why that feels like relief in the short term, and what it costs long term. Her shift — from carrying clients all the way through to owning only their clarity — is a concrete, repeatable model listeners can hold up against their own bottlenecks.",
    bioHeading: "Meet Jen Liddy",
    bioParagraphs: [
      "When your genius is clear but your messaging won't land, call Jen Liddy. Jen helps experienced experts get their words working again — without overhauling their brand or burning it all down.",
      "Before this work, Jen spent 15 years in education doing something most people would never think of as a business skill: grading essays and giving feedback. That's exactly why she's so good at spotting what isn't working, diagnosing the gap, and showing people how to fix it.",
      "These days, she gets to do that one-on-one with people who actually want to be in the room — minus the red teacher pen.",
    ],
    contributorLinks: [
      { label: "Website", url: "http://www.jenliddy.com" },
      { label: "Instagram", url: "https://www.instagram.com/heyjenliddy/" },
    ],
    resourceHeading: "Grab Jen Liddy's Resource",
    resources: [{ name: "Social Proof = Messaging Gold: The Guide to Testimonials That Prove You're the One to Hire", description: "Jen's free guide walks you through a three-step system for getting specific, believable testimonials — the kind that help future clients understand exactly why you're the right person to hire.", url: "http://www.jenliddy.com/socialproof" }],
  },
  {
    slug: "renee-bowen",
    contributorName: "Renee Bowen",
    contributorImage: "/contributors/renee-bowen.jpg",
    directoryHook: "You Don’t Have to Be Everyone’s Nervous System",
    title: "You Don’t Have to Be Everyone’s Nervous System: Renee Bowen on Letting Go of Holding It All Together",
    audioEmbed: helloAudioEmbed("d260f755-d029-4fe0-9c03-4db3b1d97513"),
    aboutEpisode: "Beyond the Bottleneck is about spotting the thing quietly running your business from the background — and for a lot of high-achieving owners, that thing is themselves. Renee Bowen's story names a bottleneck that's rarely talked about in business terms: becoming “everyone else's nervous system,” where your capability quietly turns into everyone's responsibility, and you become the constraint your business can't scale past. This conversation gives listeners language for that pattern and a gentler way out — starting with small pauses instead of a full overhaul.",
    bioHeading: "Meet Renee Bowen",
    bioParagraphs: [
      "Renee Bowen is a business strategist, coach, photographer, and host of the Tried & True with a Dash of Woo podcast. Her work lives at the intersection of identity, unconscious programming, creativity, and business — helping women understand how they're actually wired instead of constantly trying to become who they think they should be.",
      "She's especially passionate about the ways high-achieving women mask, overfunction, and lose themselves inside competence, and what becomes possible when they begin operating differently.",
    ],
    contributorLinks: [
      { label: "Website", url: "https://reneebowen.com" },
      { label: "Instagram", url: "https://www.instagram.com/reneebowen/" },
      { label: "Tried and True with a Dash of Woo Podcast", url: "https://reneebowen.com/podcast/" },
    ],
    resourceHeading: "Grab Renee Bowen's Resource",
    resources: [{ name: "The Overfunctioning Reset: Is It Really You... or Is It Conditioning?", description: "A 10-minute identity audit and guided hypnosis for high-achieving women who are tired of being the one who always has it handled.", url: "https://reneebowen.myflodesk.com/overfunctioning" }],
  },
  {
    slug: "zhara-marie-henry",
    contributorName: "Zhara-Marie Henry",
    contributorImage: "/contributors/zhara-marie-henry.jpg",
    directoryHook: "You Hired Help. Now Let Them Help",
    title: "You Hired Help. Now Let Them Help: Zhara-Marie Henry on Letting Go of Control",
    audioEmbed: helloAudioEmbed("3c9d5cfb-41cb-42af-879d-773dc97d2da6"),
    aboutEpisode: "Beyond the Bottleneck is about naming the bottleneck hiding in plain sight — and this one is a common trap: hiring help, but still being the one who ends up doing the work. Zhara-Marie Henry's story shows that the bottleneck isn't solved by adding support; it's solved by doing the internal work around trust and control that makes support actually work. This conversation gives listeners a clear, practical bridge between the mindset shift and the operational systems that make delegation stick.",
    bioHeading: "Meet Zhara-Marie Henry",
    bioParagraphs: [
      "Zhara-Marie Henry is an Operations Consultant who helps visionary women build businesses and lives that can carry the weight of their calling. A Jamaican attorney turned entrepreneur, Zhara specializes in turning big ideas into clear strategies, strong systems, and sustainable operations that create more freedom for founders.",
      "She's also the founder and host of Abide, a community for Christian women pursuing big dreams while staying rooted in faith, stewardship, and intentional living.",
    ],
    contributorLinks: [
      { label: "Website", url: "https://zharamarie.org/" },
      { label: "Instagram", url: "https://www.instagram.com/zhara.marie/" },
      { label: "YouTube", url: "https://www.youtube.com/@zhara.marie97" },
    ],
    resourceHeading: "Grab Zhara-Marie Henry's Resource",
    resources: [{ name: "The Home Run", description: "A well-run business starts with a well-run home. Zhara's free resource shares simple life systems for female founders who want more balance at home and in business.", url: "https://zharamarie.myflodesk.com/the-home-run" }],
  },
  {
    slug: "michelle-knight",
    contributorName: "Michelle Knight",
    contributorImage: "/contributors/michelle-knight.jpg",
    directoryHook: "When Overachieving Becomes Your Safety Net",
    title: "When Overachieving Becomes Your Safety Net with Michelle Knight",
    audioEmbed: helloAudioEmbed("fdd0f365-93ce-4089-86c3-370d5c86be72"),
    aboutEpisode: "Beyond the Bottleneck is about finding the pattern underneath a business that feels like a cage, and Michelle Knight's story shows how convincing that pattern can be when it's working. Her business kept doubling and tripling, and every new level of success reinforced the belief that this was the right way to operate. This conversation makes clear that ambition was never the problem. The real bottleneck was the link between overachieving and safety, and understanding that link is the first step toward building a business that grows with you instead of holding you in place.",
    bioHeading: "Meet Michelle Knight",
    bioParagraphs: [
      "Michelle Knight is a personal branding and storytelling expert who believes your story is your strategy. Over nearly ten years, she's built Brandmerry into a $2 million business and helped more than 1,000 women turn their real, lived stories into brands that feel like them.",
      "A homeschooling mom who runs her company between school mornings, Michelle teaches that magnetism doesn't come from louder tactics; it comes from you. She's also the author of The Beautiful Climb, her premier book arriving October 2026.",
    ],
    contributorLinks: [
      { label: "Website", url: "https://brandmerry.com" },
      { label: "Instagram", url: "https://www.instagram.com/_brandmerry/" },
    ],
    resourceHeading: "Explore Michelle Knight's Resources",
    resources: [
      { name: "When Personal Growth Turns into Personal Pressure (free Substack)", description: "Michelle's free Substack post explores what happens when the drive to keep growing quietly turns into pressure, a good companion to today's conversation.", url: "https://brandmerry.substack.com/p/when-personal-growth-turns-into-personal?r=28uk93", ctaLabel: "Read the Post →" },
      { name: "Join the waitlist for The Beautiful Climb", description: "Michelle's premier book arrives October 2026. Get on the waitlist to be first to know when it's available.", url: "https://www.brandmerry.com/book", ctaLabel: "Join the Waitlist →" },
    ],
  },
  {
    slug: "ashley-krooks",
    contributorName: "Ashley Krooks",
    contributorImage: "/contributors/ashley-krooks.jpg",
    directoryHook: "The Freedom Was There. She Just Couldn’t Feel It",
    title: "The Freedom Was There. She Just Couldn’t Feel It: Ashley Krooks on Nervous System Regulation",
    audioEmbed: helloAudioEmbed("1ebd8607-4ee7-4ed1-a1b0-480f4e4fdca6"),
    aboutEpisode: "Beyond the Bottleneck is about the difference between changing your circumstances and changing your pattern, and Ashley Krooks' story shows exactly why that distinction matters. She built a business that let her travel the world with her husband, standing in places like the Pyramids of Egypt and the coast of Portugal, without needing to be there day-to-day. And yet, in her words, “no matter what external freedoms I had, I didn't actually feel free internally.” This conversation is a reminder that creating the freedom is one thing; learning to live inside it is another.",
    bioHeading: "Meet Ashley Krooks",
    bioParagraphs: [
      "Ashley Krooks is the founder of The Nourished Woman and host of the podcast That's So Nourishing, where she helps women who hold it all together understand that the patterns keeping them stuck are nervous system adaptations, not personality flaws.",
      "Certified across multiple somatic and subconscious modalities, she uses nervous system regulation and body-based healing to help women unravel their conditioning, return to the most regulated, authentic version of themselves, and reclaim full agency over how they feel, who they are, and the life they're building, in everyday life, not just on vacation.",
    ],
    contributorLinks: [{ label: "Instagram", url: "https://www.instagram.com/ohtheplacesashgoes" }],
    resourceHeading: "Grab Ashley Krooks' Resource",
    resources: [{ name: "Light It Up", description: "A personalized, intuitive read revealing the hidden block between you and the kind of success that lights you up from the inside out.", url: "https://ohtheplacesashgoes.com/find-out-whats-really-blocking-you-intuitive-read/" }],
  },
  {
    slug: "kari-poppleton",
    contributorName: "Kari Poppleton",
    contributorImage: "/contributors/kari-poppleton.jpg",
    directoryHook: "The Data That Lets You Do Less",
    title: "The Data That Lets You Do Less: Kari Poppleton on Simplifying Your Business",
    audioEmbed: helloAudioEmbed("3884b576-0d6b-48b3-a72b-94fcb36dbac7"),
    aboutEpisode: "Beyond the Bottleneck is about helping small business owners find the thing quietly slowing them down — and here, Kari Poppleton names one of the most common versions of it: not knowing what's actually working. When you can't confidently point to what's producing results, it becomes nearly impossible to stop doing anything, and “doing everything” becomes its own bottleneck. This conversation gives listeners a concrete way out — not more data for its own sake, but the right data, chosen from the right question, used to give yourself permission to put something down.",
    bioHeading: "Meet Kari Poppleton",
    bioParagraphs: [
      "Kari Poppleton is a Business Operations Consultant, Fractional Director of Operations, and marketing measurement specialist who helps online business owners stop guessing and start making confident, data-backed decisions.",
      "She helps entrepreneurs determine what they actually need to measure, set up reliable tracking, and turn scattered data into clear, usable information — so they can see what's working, what isn't, and where to focus next.",
    ],
    contributorLinks: [
      { label: "Website", url: "https://karipoppleton.com/" },
      { label: "Instagram", url: "https://www.instagram.com/karipoppleton/" },
    ],
    resourceHeading: "Grab Kari Poppleton's Resource",
    resources: [{ name: "Metrics Generator", description: "Stop guessing which numbers matter. Kari's free Metrics Generator helps you identify the metrics that actually matter for your business and goals — including what to track, where to find the data, and how to use it to make better decisions.", url: "https://www.karipoppleton.com/beyond" }],
  },
  {
    slug: "sarah-young",
    contributorName: "Sarah Young",
    contributorImage: "/contributors/sarah-young.jpg",
    directoryHook: "$100K Months and Still Stressed About Payroll",
    title: "$100K Months and Still Stressed About Payroll: How Sarah Young Changed Course",
    audioEmbed: helloAudioEmbed("e6c16d25-1abe-4820-a07f-2da341893ef5"),
    aboutEpisode: "Beyond the Bottleneck is about the beliefs that quietly shape how a business grows, and Sarah Young's story surfaces a tricky one: if I'm capable of building something bigger, then I should. Sarah bet on herself, and that willingness to take a real risk is a quality worth cultivating. But this conversation is also about the second half of that skill: knowing when to re-evaluate the bet. After she bought the firm, the business got more complicated, with more offers, more moving pieces, and more clients, but not necessarily more profit. Her story gives listeners a way to tell the difference between growth and complexity.",
    bioHeading: "Meet Sarah Young",
    bioParagraphs: [
      "Sarah Young is a Scaling and Wealth Strategist helping service pros build multi-6 and 7-figure businesses and turn revenue into wealth. A former Big 4 accountant, CPA, and CFP® who built and sold a professional services firm, she pivoted to entrepreneurship in 2018 to help business owners grow without sacrificing their lives.",
      "Her mission is to help 100 business owners build $1M+ in personal wealth, and she has worked with 350+ clients scaling to 7-8 figures while sustaining profit margins. Outside client work, she's drinking iced coffee, adventuring with her son, reading three books at once, and evaluating personal investments.",
    ],
    contributorLinks: [
      { label: "Website", url: "http://sarahhyoung.com" },
      { label: "Instagram", url: "https://www.instagram.com/itssarahyoung/" },
    ],
    resourceHeading: "Grab Sarah Young's Resource",
    resources: [{ name: "Built For Millions Telegram Community", description: "Join Sarah's free community for service pros building toward multi-6 and 7-figure businesses and turning revenue into wealth.", url: "https://sarahyoung.kit.com/community", ctaLabel: "Join the Community →" }],
  },
  {
    slug: "katie-ferro",
    contributorName: "Katie Ferro",
    contributorImage: "/contributors/katie-ferro.jpg",
    directoryHook: "They’re Not Your Rules",
    title: "They’re Not Your Rules: Katie Ferro on Rewriting the Rules of Work",
    audioEmbed: helloAudioEmbed("76d83f7c-7312-49e8-9534-6e5d5e123ad5"),
    aboutEpisode: "Beyond the Bottleneck is about spotting the invisible thing holding a business back — and for Katie Ferro, that thing was a set of inherited rules about work and success that no one was actually enforcing. This conversation reframes the bottleneck as a mindset one: the belief that the life you want is somewhere off in the future, rather than something you can start building through small experiments right now. It's a practical, low-pressure model for listeners who feel stuck following rules they never actually chose.",
    bioHeading: "Meet Katie Ferro",
    bioParagraphs: [
      "Katie Ferro is a CPA, reformed rule follower, corporate escapee, and mom of three. She built her bookkeeping business to surpass her former corporate tax manager salary — while working around the life she actually wanted with her family.",
      "Today, she helps accountants and aspiring bookkeepers build bookkeeping businesses that support their lives instead of keeping them from living them.",
    ],
    contributorLinks: [
      { label: "Website", url: "http://www.katieferro.com" },
      { label: "Instagram", url: "https://www.instagram.com/orderlyaccountingbykatie/" },
    ],
    resourceHeading: "Explore Katie Ferro's Resources",
    resources: [
      { name: "Monthly Tax & Bookkeeping Reminders", description: "Stay on top of your books and important tax deadlines with simple monthly reminders sent straight to your inbox — so you know what needs to be done and when, without having to keep track of it all yourself.", url: "https://www.orderlyaccounting.com/reminders" },
      { name: "Ask Me Anything Live Session", description: "Join Katie live for a free, no-pitch bookkeeping business Q&A. Bring your questions and get support with what you're working through.", url: "https://www.katieferro.com/ama", ctaLabel: "Join the Live Session →" },
    ],
  },
  {
    slug: "christine-williams",
    contributorName: "Christine Williams",
    contributorImage: "/contributors/christine-williams.jpg",
    directoryHook: "There’s More Than One Way to Scale",
    title: "There’s More Than One Way to Scale: Christine Williams on Building Better, Not Bigger",
    audioEmbed: helloAudioEmbed("0b97a1a5-7a66-458a-b8af-08a3da5abf11"),
    aboutEpisode: "Beyond the Bottleneck is about questioning the rules we never actually chose, and Chris Williams' story tackles one of the biggest: the belief that there's only one right way to scale. When her coach advised her to step out of the coaching role, she felt an immediate contraction, because she loved that part of her business. Instead of automatically following advice from someone she respected, she paused to ask what she actually wanted. This conversation shows listeners how to separate genuine growth from inherited definitions of success.",
    bioHeading: "Meet Christine Williams",
    bioParagraphs: [
      "Christine “Chris” Williams is a 7-figure entrepreneur, business mentor, bestselling author, and founder of The Boutique CEO™. With more than 30 years in business, Chris helps women coaches and holistic practitioners build simple, spacious, highly profitable $100K–$500K businesses through relationships, trust, and soulful sales.",
      "Her philosophy, Build Better, Not Bigger™, challenges the belief that women need massive audiences, complicated funnels, or big teams to create meaningful wealth and impact. Through her Client-Creating Ecosystem™, Chris helps women turn their expertise into consistent clients, greater financial freedom, and businesses that support the lives they truly want.",
    ],
    contributorLinks: [
      { label: "Website", url: "http://theboutiqueceo.com" },
      { label: "Instagram", url: "https://www.instagram.com/christinewilliamscoaching/" },
    ],
    resourceHeading: "Grab Christine Williams' Resource",
    resources: [{ name: "Get A Client In 7 Days", description: "Stop waiting for clients. Start signing them.", url: "https://chriswilliams.kartra.com/page/Getapayingclientin7days" }],
  },
  {
    slug: "kristin-brabant",
    contributorName: "Kristin Brabant",
    contributorImage: "/contributors/kristin-brabant.jpg",
    directoryHook: "From Push Harder to Rich and Rested",
    title: "From Push Harder to Rich and Rested: Kristin Brabant on Breaking Her Oldest Business Pattern",
    audioEmbed: helloAudioEmbed("fa65ca58-09f9-4e65-ba23-1bf4244560a7"),
    aboutEpisode: "Beyond the Bottleneck is about tracing a pattern back to where it started, and Kristin Brabant's story goes all the way back to childhood. The bottleneck began with fear and uncertainty. When revenue dropped, an old fear of “are we going to have enough?” kicked in, and it triggered the behavior she'd learned would keep her safe: work harder. This conversation shows what it looks like to interrupt that response with support, and to build a life around rest instead of around fear.",
    bioHeading: "Meet Kristin Brabant",
    bioParagraphs: [
      "Kristin Brabant is a business strategist living in Mexico, hellbent on creating ways for experienced service providers to be both Rich and Rested. She helps ambitious business owners define their Genius, and adapt their business model, offerings, and growth strategies to sustainably scale to multiple 6 and 7 figures, while taking 2+ months off a year.",
      "Her clients have doubled monthly revenue while taking 3 weeks off, and scaled beyond $1M in annual revenue, working less and enjoying life and their people more — proof of her firm belief that you earn more when you rest more.",
    ],
    contributorLinks: [
      { label: "Website", url: "https://www.kristinbrabant.com/" },
      { label: "Instagram", url: "https://www.instagram.com/kristinbrabantcoaching/" },
      { label: "Voxer", url: "https://voxer.app.link/profile?username=kristinbrabant" },
    ],
    resourceHeading: "Grab Kristin Brabant's Resource",
    resources: [{ name: "5 Rich & Rested Calendars for Sustainable Business Growth", description: "Design a monthly calendar to increase your revenue and your rest.", url: "https://www.kristinbrabant.com/5-calendar-freebie" }],
  },
  {
    slug: "holly-haynes",
    contributorName: "Holly Haynes",
    contributorImage: "/contributors/holly-haynes.jpg",
    directoryHook: "Stop Waiting for Life to Calm Down",
    title: "Stop Waiting for Life to Calm Down: Holly Haynes on Building a Life-First Business",
    audioEmbed: helloAudioEmbed("bb230f7c-d268-45b7-92f7-c46f05c0fa83"),
    aboutEpisode: "Beyond the Bottleneck is about the beliefs that keep the same pattern in place, and Holly Haynes names one of the most common: the idea that life will eventually calm down. It won't. There's always another launch, another client project, another circumstance of the month. This conversation reframes the bottleneck not as a scheduling problem but as a decision point: design the schedule you want now, rather than waiting for space that isn't coming.",
    bioHeading: "Meet Holly Haynes",
    bioParagraphs: [
      "Holly Haynes helps women build businesses that fit their real lives, without the pressure to post daily or hustle 24/7. A former Fortune 500 strategist, she grew her company while working full-time and raising twins, then retired herself and her husband in under two years.",
      "She's the founder of Anti-Social School™, host of the top-100 Crush the Rush™ podcast, and creator of systems that have helped thousands of women grow without the scroll.",
    ],
    contributorLinks: [
      { label: "Website", url: "http://www.hollymariehaynes.com" },
      { label: "Instagram", url: "https://www.instagram.com/crushtherushpodcast/" },
      { label: "Crush the Rush Podcast", url: "https://www.hollymariehaynes.com/podcast" },
    ],
    resourceHeading: "Grab Holly Haynes' Resource",
    resources: [{ name: "The Anti-Social Shift", description: "A 9-episode private podcast for founders in the messy middle of business growth. Holly walks through the framework she uses to run a million-dollar business while spending less than one hour a week on social media, including email marketing, AI, GEO, and the systems behind a sales-generating business that doesn't depend on daily posting.", url: "https://www.hollymariehaynes.com/shift" }],
  },
  {
    slug: "heather-sager",
    contributorName: "Heather Sager",
    contributorImage: "/contributors/heather-sager.png",
    directoryHook: "The 13-Hour Workweek",
    title: "The 13-Hour Workweek: How Heather Sager Stopped Feeling Behind",
    audioEmbed: helloAudioEmbed("71dc6880-b7cd-4bdd-81db-1b664430c7a4"),
    aboutEpisode: "Beyond the Bottleneck is about the story we tell ourselves about our constraints, and Heather Sager's story is a striking example of how much that story matters. Her actual circumstances never changed; she still had 13 hours a week. But she shifted from “I only have 13 hours to run my business” to “I run my business in only 13 hours.” Same constraint, completely different relationship to it. This conversation is a reminder that the bottleneck isn't always the resource itself, it's the sentence we're repeating about it.",
    bioHeading: "Meet Heather Sager",
    bioParagraphs: ["Heather Sager is a former corporate executive turned entrepreneur with 1,500+ stages under her belt. She now helps visible leaders show up at the level of their brilliance. She's the host of Hint of Hustle, and when she's not behind the mic, she's chasing three young boys, training for a half marathon, or baking sourdough in her cozy log cabin in Bend, OR."],
    contributorLinks: [
      { label: "Website", url: "https://heathersager.com" },
      { label: "Instagram", url: "https://www.instagram.com/theheathersager/" },
    ],
    resourceHeading: "Grab Heather Sager's Resource",
    resources: [{ name: "The Profitable Speaking Guide: Turn Your Next Unpaid Speaking Gig into a Profitable Outcome", description: "Download 7 strategies to turn each speaking opportunity into a lead generator for your business.", url: "http://heathersager.com/guide" }],
  },
  {
    slug: "beth-nydick",
    contributorName: "Beth Nydick",
    contributorImage: "/contributors/beth-nydick.jpg",
    directoryHook: "The Visibility Bottleneck",
    title: "The Visibility Bottleneck: Beth Nydick on What Happens After You Get Seen",
    audioEmbed: helloAudioEmbed("a67c53a5-51cc-451f-9c31-14345e24d252"),
    aboutEpisode: "Beyond the Bottleneck is about what happens once you clear the obstacle you thought was the whole problem, and Beth Nydick's story is a perfect example. She landed a national television appearance on Dr. Oz, the kind of visibility most people chase, and discovered afterward that her opt-in wasn't working. This conversation makes the case that the real bottleneck usually isn't getting seen; it's what happens after, and the internal stories that keep experts from pitching, pressing send, or showing up fully once the spotlight is on them.",
    bioHeading: "Meet Beth Nydick",
    bioParagraphs: [
      "Beth Nydick spent 25 years producing national television for NBC, MTV, VH1, and Paramount, starting as Jay Leno's intern at The Tonight Show after heckling him at the Comedy Cellar. As a Fox News Channel booker, she knew within five minutes whether a guest was a go.",
      "That producer's ear now lives inside Mic to Millions™, her AI media coach that helps service providers, experts, and authors turn podcast interviews into paying clients. Her thesis: experts have a words problem, not a visibility problem.",
    ],
    contributorLinks: [
      { label: "Website", url: "http://app.bethnydick.com" },
      { label: "Instagram", url: "https://www.instagram.com/bethnydick/" },
    ],
    resourceHeading: "Grab Beth Nydick's Resource",
    resources: [{ name: "The First 90 Seconds of Your Next Podcast Interview", description: "Most experts lose the podcast listener at “tell us a little about yourself.” This free resource helps you turn that moment into an opener a host would actually want to cut a promo from. It's a free preview of Mic to Millions™, built from Beth's 25 years of television production experience.", url: "http://first90.bethnydick.com" }],
  },
  {
    slug: "nata-salvatori",
    contributorName: "Nata Salvatori",
    contributorImage: "/contributors/nata-salvatori.jpg",
    directoryHook: "The Business Can’t Grow If Everything Runs Through You",
    title: "The Business Can’t Grow If Everything Runs Through You: Nata Salvatori on Becoming the CEO",
    audioEmbed: helloAudioEmbed("43393aaf-056f-475e-a928-b869d5077781"),
    aboutEpisode: "Beyond the Bottleneck exists to help small business owners see the constraint they've become too close to notice — and for Nata Salvatori, that constraint was literal: everything ran through her, until a missed client meeting made it impossible to ignore. This conversation traces the real bottleneck behind “I just need to delegate more” — the identity built around being capable and needed, and the discomfort of stepping back once the space finally exists. It's a candid look at what it actually takes to move from founder-and-doer into CEO.",
    bioHeading: "Meet Nata Salvatori",
    bioParagraphs: [
      "Nata Salvatori is a business coach, fractional COO, and the founder of Accidental CEO. Her work sits at the intersection of operations and identity — helping high-performing founders build businesses that don't depend on them for every decision, while making the internal transition required to lead differently.",
      "She holds a doctorate, has trained in psychology, and spent more than a decade in leadership before building multiple businesses of her own.",
    ],
    contributorLinks: [
      { label: "Website", url: "https://accidentalceo.co/" },
      { label: "Instagram", url: "https://www.instagram.com/accidentalceo.co/" },
      { label: "Podcast", url: "https://accidentalceo.co/podcast" },
    ],
    resourceHeading: "Grab Nata Salvatori's Resource",
    resources: [{ name: "3-Day Delegation Challenge", description: "Delegate your first task in three days using the exact system Nata used to move out of a 60-hour workweek, build a team she trusts, and eventually take a two-week unplugged vacation.", url: "https://accidentalceo.myflodesk.com/3daydeleg" }],
  },
  {
    slug: "ash-mcdonald",
    contributorName: "Ash McDonald",
    contributorImage: "/contributors/ash-mcdonald.jpg",
    directoryHook: "What She Got Back When She Left Instagram",
    title: "What She Got Back When She Left Instagram: Ash McDonald on Choosing Her Attention",
    audioEmbed: helloAudioEmbed("d1263fde-04ec-4166-b023-c381d48474bd"),
    aboutEpisode: "Beyond the Bottleneck is about the courage it takes to question a strategy that's working, even when it costs you something in the short term. Ash McDonald left Instagram, even though it had played a major role in growing her business, and accepted that things might slow down as a result. This conversation is about gathering enough evidence to make a different choice before you know exactly how it will turn out, and it shows what Ash got back that she hadn't fully realized she'd lost: her attention.",
    bioHeading: "Meet Ash McDonald",
    bioParagraphs: ["Ash McDonald is The Entrepreneur's Therapist, a therapist, business mentor, speaker, and host of the Shamelessly Ambitious® podcast. She helps ambitious women build burnout-proof businesses by combining her master's degree in Counseling Psychology with more than 15 years of entrepreneurial experience."],
    contributorLinks: [
      { label: "Website", url: "https://ashmcdonaldmentoring.com/" },
      { label: "Instagram", url: "https://www.instagram.com/ashmcdonald/" },
      { label: "Shamelessly Ambitious® Podcast", url: "https://ashmcdonaldmentoring.com/podcast" },
    ],
    resourceHeading: "Grab Ash McDonald's Resource",
    resources: [{ name: "Shamelessly Ambitious® Soundcheck", description: "Whether you're barely holding it together, feeling like you lost your edge, or tired of letting fear, overthinking, and self-doubt call the shots, the Soundcheck helps you understand what's keeping you stuck and gives you the mindset shifts and action steps to move forward with more confidence.", url: "https://ashmcdonaldmentoring.com/soundcheck" }],
  },
  {
    slug: "holly-ostrout",
    contributorName: "Holly Ostrout",
    contributorImage: "/contributors/holly-ostrout.jpg",
    directoryHook: "You’re Not Back at the Beginning",
    title: "You’re Not Back at the Beginning: Holly Ostrout on Making a Different Choice This Time",
    audioEmbed: helloAudioEmbed("c8981a56-cde7-44c2-9d38-aaf13db5f3d3"),
    aboutEpisode: "Beyond the Bottleneck is about recognizing a bottleneck when it comes back — sometimes in a familiar shape, sometimes disguised as failure. Holly Ostrout's story is a reminder that an old pattern resurfacing doesn't erase the growth you've already made; it's a chance to notice how you're responding differently this time. This conversation gives listeners permission to stop measuring their setbacks against “starting over” and start measuring them against actual evidence of change.",
    bioHeading: "Meet Holly Ostrout",
    bioParagraphs: ["Holly Ostrout is a book coach and publisher for business owners ready to write a damn good book that attracts the right clients, opens doors to speaking opportunities, and positions them as the authority in their field. She uses her signature Book Mapping process to make the writing process quick and humane, building the book over her proven Heroine's Journey framework — moving readers from curious to reaching out, so the book becomes their best lead generator for years to come."],
    contributorLinks: [
      { label: "Website", url: "http://www.hollyostrout.com" },
      { label: "Instagram", url: "https://www.instagram.com/hollyostrout/" },
    ],
    resourceHeading: "Explore Holly Ostrout's Resources",
    resources: [
      { name: "What's Working in Business Books in 2026", description: "A workbook to help you choose the right book topic and understand what's currently working for business books that stand out, sell, and support your reputation.", url: "https://hollyostrout.kit.com/whats-working" },
      { name: "The Guide to Creating a 6-Figure, Multi-Revenue Book", description: "Walks through the main ways a business book can create additional revenue — so you can think strategically about what you want the book to lead to before you start writing it.", url: "https://hollyostara.thrivecart.com/strategy-stacks" },
    ],
  },
  {
    slug: "carly-clark-zimmer",
    contributorName: "Carly Clark Zimmer",
    contributorImage: "/contributors/carly-clark-zimmer-host-2.jpg",
    directoryHook: "The Pattern Behind the Plateau",
    title: "Host Episode: The Pattern Behind the Plateau, with Carly Clark Zimmer",
    audioEmbed: helloAudioEmbed("560f3068-dfb9-41a7-9bdc-1162b2811494"),
    aboutEpisode: "Beyond the Bottleneck started with a question: What happens when the behaviors that helped you build a successful business eventually become the very things keeping you from where you want to go next? In this final episode, Carly Clark Zimmer connects the dots across 23 very different bottleneck stories and introduces The Pattern Behind the Plateau: the friction that happens when you've grown and evolved, but the automatic ways you work, lead, and make decisions haven't caught up yet. You'll learn about short-term relief behaviors, how to recognize the Decision Point where another choice becomes available, and why collecting evidence is such an important part of lasting behavior change.",
    bioHeading: "Meet Carly Clark Zimmer",
    bioParagraphs: [
      "Carly Clark Zimmer is a Business Leadership & Behavior Change Coach who helps high-achieving business owners recognize and change the patterns pulling them back into ways of working they've already outgrown.",
      "She is the creator of The Business Restoration Method, a three-phase process that helps business owners Stop the Leaks, Open the Walls, and Rebuild the Business Backbone so the business they're running begins to match the person they've become and the life they actually want to live.",
    ],
    contributorLinks: [
      { label: "Website", url: "https://carlyclarkzimmer.com/" },
      { label: "Instagram", url: "https://www.instagram.com/carlyclarkzimmer/" },
    ],
  },
];

export const deliveryEpisodes: DeliveryEpisode[] = [
  {
    slug: "intro",
    title: "How to Use This Series",
    audioEmbed: helloAudioEmbed("bac0af12-8048-4020-9ec1-6c28fb2d919f"),
  },
  ...contributorEpisodes,
];

export const directoryCards: DeliveryDirectoryCard[] = contributorEpisodes.map((episode) => ({
  id: episode.slug,
  name: episode.contributorName ?? "Contributor",
  episodeHook: episode.directoryHook ?? episode.title,
  href: `#episode-${episode.slug}`,
  image: episode.contributorImage,
  imageAlt: `${episode.contributorName ?? "Beyond the Bottleneck contributor"} portrait`,
}));
