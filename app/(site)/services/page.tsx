import type { Metadata } from "next";
import Image from "next/image";
import { homeContent } from "../../../content/site/home";
import { EditorialTestimonial } from "../../../components/site/EditorialTestimonial";
import { WorkTogetherShowcase } from "../../../components/site/WorkTogetherShowcase";
import { Button } from "../../../components/ui/Button";
import { Section } from "../../../components/ui/Section";
import { HomeLaserCoachOptIn } from "../_components/HomeLaserCoachOptIn";
import { BusinessRestorationMethod } from "./_components/BusinessRestorationMethod";
import { ClientMessageGallery } from "./_components/ClientMessageGallery";
import { CredentialsSection } from "./_components/CredentialsSection";
import { FeaturedVideoTestimonial } from "./_components/FeaturedVideoTestimonial";
import styles from "./page.module.css";

const recommendationHref = "https://carlyclarkzimmer.as.me/connect";
const restorativeResetHref = "https://carlyclarkzimmer.as.me/restorative-reset";
const title = "Carly Clark Zimmer | Clarity for Life and Business Transitions";
const description =
  "For people who know something needs to change but are unsure what comes next. Private intensives and ongoing support for clarity and grounded decisions during life and business transitions.";
const canonicalUrl = "https://carlyclarkzimmer.com/services/";
const socialTitle = "When What You Built No Longer Fits";
const socialDescription =
  "For people who know something needs to change but are not sure what comes next. Clarity and grounded direction for life and business transitions.";
const socialImageUrl = "https://carlyclarkzimmer.com/services-social.png";

const restorationPhases = [
  {
    number: "1",
    title: "Stop the Leaks",
    image: {
      src: "/business-restoration/stop-the-leaks-reading-nook.jpg",
      alt: "A sunlit Tuscan reading nook with a cracked ceiling leaking into a brass bowl",
    },
    description:
      "We identify where your time, energy, and attention are getting drained. That might be client urgency, over-delivering, doing work your team could own, saying yes too quickly, or constantly pushing your own priorities aside.",
    outcome: "Less reactivity. More space.",
  },
  {
    number: "2",
    title: "Open the Walls",
    image: {
      src: "/business-restoration/open-the-walls.jpg",
      alt: "A refined interior with an opened plaster wall revealing wooden framing",
    },
    description:
      "We look at what’s driving those patterns. The people-pleasing, over-responsibility, perfectionism, old rules, and beliefs that make it hard to follow through on the way you say you want to work.",
    outcome: "Deeper awareness. New possibilities.",
  },
  {
    number: "3",
    title: "Rebuild the Business Backbone",
    image: {
      src: "/business-restoration/rebuild-the-business-backbone.jpg",
      alt: "A restored light-filled interior with arches and open connected rooms",
    },
    description:
      "Then we turn those new decisions into the actual structure of your business. Pricing, access, scope, communication, capacity, delegation, and weekly rhythm all get rebuilt so the business no longer relies on you overriding yourself to keep it running.",
    outcome: "Sustainable growth. A business that supports your life.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    siteName: "Carly Clark Zimmer",
    title: socialTitle,
    description: socialDescription,
    url: canonicalUrl,
    images: [
      {
        url: socialImageUrl,
        width: 2400,
        height: 1573,
        alt: "Carly Clark Zimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: [socialImageUrl],
  },
};

export default function ServicesPage() {
  return (
    <>
      <div className={styles.heroSequence}>
        <section className={styles.hero} id="services-hero">
        <Image
          className={styles.heroImage}
          src="/carly-services-hero.jpg"
          alt="Carly Clark Zimmer standing in an elegant room surrounded by plants"
          fill
          priority
          sizes="100vw"
          unoptimized
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.readingWidth}>
          <h1>Business Restoration</h1>
          <p>
            The Business Restoration Method is private coaching for successful business owners
            who are tired of feeling like everything depends on them and want to build a business
            that gives them more freedom, time, and space to actually enjoy the life they&apos;ve
            worked so hard to create.
          </p>
        </div>
        </section>

        <Section className={styles.approach}>
          <h2>The goal is simple: stop recreating the parts of the business that are wearing you out.</h2>
          <p>
            <strong>What I see happen all the time is this:</strong> a woman builds a business that
            looks successful on paper, but behind the scenes she’s exhausted, working too much,
            and starting to resent how little life she has outside of it.
          </p>
          <p>
            <strong>
              And usually, she&apos;s not doing anything wrong. The same habits that helped her build
              the business are now the very things making it harder to grow without sacrificing
              more of herself.
            </strong>
          </p>
          <Button
            className={styles.approachCta}
            href="https://carlyclarkzimmer.as.me/schedule/21337638"
            newTab
            variant="outline"
          >
            Book a Recommendation Call
          </Button>
        </Section>

        <Section className={styles.meetCarly}>
          <h2>That’s where the Business Restoration Method comes in.</h2>
          <div className={styles.methodIntroduction}>
            <p>
              Think of your business like an architecturally beautiful home. You&apos;ve spent years
              building it, but over time, some of the systems, structures, and ways of operating
              that once served you may no longer fit the life you want to live.
            </p>
            <p>
              <strong>The Business Restoration Method</strong> is my holistic approach to
              identifying where your time, energy, and attention are being drained, uncovering the
              behavioral patterns keeping you stuck, and making practical changes to how your
              business runs.
            </p>
            <p>
              <strong>The goal?</strong> Fewer unnecessary demands on your time, clearer
              boundaries, a business that doesn&apos;t depend on you for every decision, and more
              freedom to actually enjoy your life outside of work.
            </p>
            <p className={styles.methodPullQuote}>
              <strong>
                We&apos;re not tearing down what you&apos;ve built. We&apos;re restoring it to work better for
                the person you&apos;ve become.
              </strong>
            </p>
          </div>
          <BusinessRestorationMethod
            phases={restorationPhases}
            applyHref="https://carlyclarkzimmer.as.me/connect"
          />
        </Section>

        <Section className={styles.restorativeReset} id="restorative-reset">
          <div className={styles.resetHeading}>
            <p>A Private, Two-Hour Working Session</p>
            <h2>Restorative Reset</h2>
          </div>
          <div className={styles.resetBody}>
            <p className={styles.resetLead}>
              <strong>
                Get clear on what deserves your time, energy, and attention over the next 90 days,
                and what you can finally put down.
              </strong>
            </p>
            <p>
              When you&apos;re the person who can handle just about everything, it&apos;s easy to find
              yourself carrying far more than you actually need to.
            </p>
            <p>
              In this focused session, we&apos;ll take an honest look at how you&apos;re spending your
              time and energy, what&apos;s creating unnecessary pressure, and where your business may
              be asking more of you than you want to give.
            </p>
            <p>
              Together, we&apos;ll create a practical 90-day plan grounded in your values, your
              capacity, and what matters most in your life outside of work.
            </p>
            <p className={styles.resetClosing}>
              <strong>
                You&apos;ll walk away knowing what to prioritize, what to stop carrying, and what
                needs to change so your business starts making more room for YOU.
              </strong>
            </p>
            <Button href={restorativeResetHref} newTab>
              Book a Restorative Reset
            </Button>
          </div>
        </Section>

        <EditorialTestimonial
          testimonial={
            <>
              <p>
                I was feeling stuck in my wellness business and couldn’t seem to find the work-life
                balance I always strived for. Carly helped me to align my business with my values in
                a way that felt authentic to me.
              </p>
              <p>
                Carly’s heart-centered approach and her calm, non-judgemental demeanor….but also,
                her commitment to holding me accountable! I am so grateful to her that I can now
                truly enjoy my day-to-day activities and feel aligned.
              </p>
            </>
          }
          clientName="Diane I."
          professionalTitle="Registered Dietitian"
          photo={{
            src: "/testimonials/testimonial-diane.jpg",
            alt: "Diane I., Registered Dietitian",
          }}
        />

        <FeaturedVideoTestimonial />

        <WorkTogetherShowcase
          services={homeContent.servicesShowcase.services.filter(
            (service) => service.title !== "Business Restoration Method",
          )}
        />

        <EditorialTestimonial
          testimonial={
            <>
              <p>
                Working with Carly leads to drastic change that was needed. My true self was buried
                under 1000 feet of concrete. I had become someone who cared about brands, status, and
                being a cog in the corporate wheel – things I never cared about before.
              </p>
              <p>
                She helped me return to myself. Now, instead of staying up working until 2 am, my days
                include yoga, cooking dinner, choosing my own schedule, and building a business that
                feels right for me.
              </p>
              <p>
                She’s like a wise friend who helps you identify what’s making you feel off, and then
                brings her skills and tools as a seasoned, truth-telling coach to solve it. My therapist
                couldn’t do that. Carly could.
              </p>
            </>
          }
          clientName="Emily J."
          professionalTitle="Fractional CFO"
          photo={{
            src: "/testimonials/testimonial-emily.jpg",
            alt: "Emily J., Fractional CFO",
          }}
        />

        <ClientMessageGallery />
      </div>

      <section className={styles.recommendation}>
        <h2>Which Option is Right for You?</h2>
        <div>
          <p>If you are unsure which container fits, you&apos;re welcome to book a quick recommendation call.</p>
          <p>
            It will quickly clarify whether clarity is the bottleneck or whether ongoing
            implementation support will serve you better.
          </p>
          <Button className={styles.approachCta} href={recommendationHref} variant="outline">
            Book A Recommendation Call
          </Button>
        </div>
      </section>

      <CredentialsSection />

      <HomeLaserCoachOptIn />
    </>
  );
}
