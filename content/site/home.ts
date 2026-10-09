export const siteMeta = {
  title: "Carly Clark Zimmer | Life & Leadership Coach",
  description:
    "Life and leadership coaching for people ready to redesign the structures that no longer fit.",
} as const;

export const homeContent = {
  hero: {
    eyebrow: "Business Leadership & Behavior Change Coach · ICF PCC",
    title: "Build a business that leaves room for life.",
    description:
      "Finding your real bottleneck is the most reliable way to build a business that doesn’t depend on you for everything, so you can log off and actually STAY off.",
    cta: "Let’s Find the Bottleneck",
    ctaHref: "/services",
  },
  recognition: {
    heading: "You built the business. Now you want your life back.",
    paragraphs: [
      "Maybe your business is profitable, your clients are happy, and from the outside, it looks like it’s working.",
      "But behind the scenes, you’re still the one everything depends on.",
      "You’re answering too quickly, carrying too much, pushing your own priorities aside, and telling yourself you’ll fix it when things calm down.",
    ],
    emphasis:
      "But things never seem to \"calm down\". The right time never appears and quarter after quarter, your life outside of work has all but disappeared.",
  },
  approach: {
    heading: "Most business owners try to fix it at the surface.",
    surfaceAttempts: [
      "They invest in a business coach, searching for the strategy that will save them.",
      "Or a new productivity system.",
      "They enforce new boundaries for a while, then slip back into old habits.",
    ],
    emphasis:
      "Those things help for a minute. But if the automatic patterns underneath are still running, the bottleneck just finds a new way back.",
    description:
      "My work goes under the surface. We find the behavior keeping you overextended, figure out what’s driving it, and make different decisions until the new way becomes how your business actually runs.",
    closing:
      "The result: a business that no longer needs you to carry all of it.",
    cta: "Find Your Next Step",
    ctaHref: "/services",
  },
  meetCarly: {
    heading: "Meet Carly",
    paragraphs: [
      { text: "I know this pattern because I lived it." },
      {
        text: "I built my business on being capable, responsive, and willing to work as hard as it took.",
      },
      { text: "For a long time, that worked." },
      {
        text: "Until I realized I had built a business that could only succeed if I kept overriding myself.",
      },
      {
        text: "I was answering clients from airports, working upstairs while the people I loved were downstairs, and telling myself I’d make more room for my life once things calmed down.",
      },
      { text: "Eventually, I saw the real problem." },
      { text: "Effort had become my default answer to every problem.", emphasis: true },
      {
        text: "And at some point, you can’t work harder to solve a way of working that already depends on you working too hard.",
      },
    ],
    closingParagraphs: [
      {
        text: "That’s why my work now focuses on the patterns underneath the bottleneck, not just the calendar, boundary, or system sitting on top of it.",
      },
      {
        text: "I help business owners see what they’re too close to see, make different decisions, and build those decisions into the business so the new way can actually last.",
      },
    ],
  },
  servicesShowcase: {
    eyebrow: "Work With Carly",
    heading: "Ways to Work Together",
    services: [
      {
        prompt: "Need quick clarity?",
        title: "5-Minute Laser Coach",
        href: "/breakthrough",
        newTab: true,
        description: "Cut through the overthinking and find your next move.",
      },
      {
        prompt: "Want to change one pattern?",
        title: "The Pattern Interrupt",
        href: "https://carlyclarkzimmer.thrivecart.com/the-pattern-interrupt/",
        newTab: true,
        description:
          "30 days to identify one bottleneck, interrupt it, and build evidence that you can choose differently.",
      },
      {
        prompt: "Want ongoing support?",
        title: "The Living Business Lounge",
        href: "https://app.acuityscheduling.com/catalog/21337638/?productId=2269284&clearCart=true",
        newTab: true,
        description:
          "Group coaching for the real-life decisions, boundaries, and patterns that come up as your business evolves.",
      },
      {
        prompt: "Ready for deeper change?",
        title: "Business Restoration Method",
        href: "/services",
        description:
          "Private coaching to change the patterns and structure keeping your business dependent on you.",
      },
    ],
  },
  testimonial: {
    quote:
      "Before working with Carly, I was constantly busy but unclear. Our work brought clarity to my priorities, how I structure my time, and how I move forward in my business without burning myself out.",
    attribution: "Laurie J., Financial Freedom Coach",
  },
} as const;
