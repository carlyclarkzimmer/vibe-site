export type SiteNavigationItem = {
  href: string;
  label: string;
};

export const siteNavigation: SiteNavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Work With Carly" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const sitePrimaryCta = {
  href: "https://carlyclarkzimmer.as.me",
  label: "Book a call",
  newTab: true,
} as const;
