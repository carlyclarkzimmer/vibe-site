export const restorationStudio = {
  title: "The Restoration Studio",
  headline: "Creative Coaching Workshop",
  description: "A free, live workshop for successful, hardworking business owners and entrepreneurs.",
  date: "Friday, November 6, 2026",
  time: "12–1 PM Eastern",
  location: "Live on Zoom",
  cta: "Save My Spot",
  steps: [
    { title: "Make something", description: "Spend time drawing and exploring what you want more room for outside work." },
    { title: "Reflect with coaching prompts", description: "Identify the patterns that keep pulling you back into work." },
    { title: "Choose one practical change", description: "Decide what could shift in how you work to create more space for what matters." },
  ],
  takeaways: [
    "A visual representation of what you want your next chapter to look and feel like.",
    "A clearer understanding of what's getting in the way.",
    "One practical change you can begin making in your business to create more space for what matters.",
  ],
} as const;

export const restorationStudioEmailCapture = {
  provider: "drip",
  formId: "994182651",
  action: "https://www.getdrip.com/forms/994182651/submissions",
  campaignTag: "Restoration Studio Nov 6th 2026",
  workflowName: "Restoration Studio Nov 6th",
  doubleOptIn: false,
  optinSource: "Restoration Studio November 6th – Vibe site",
  recaptchaSiteKey: "6LdKtHUtAAAAAKOHfTjUMdNYjc0H1vfetOitEMMP",
} as const;
