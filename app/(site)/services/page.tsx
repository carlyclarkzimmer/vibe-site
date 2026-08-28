import type { Metadata } from "next";
import Image from "next/image";
import { homeContent } from "../../../content/site/home";
import { Button } from "../../../components/ui/Button";
import { Eyebrow } from "../../../components/ui/Eyebrow";
import { Section } from "../../../components/ui/Section";
import styles from "./page.module.css";

const recommendationHref = "https://carlyclarkzimmer.as.me/connect";
const title = "Carly Clark Zimmer | Clarity for Life and Business Transitions";
const description =
  "For people who know something needs to change but are unsure what comes next. Private intensives and ongoing support for clarity and grounded decisions during life and business transitions.";
const canonicalUrl = "https://carlyclarkzimmer.com/services/";
const socialTitle = "When What You Built No Longer Fits";
const socialDescription =
  "For people who know something needs to change but are not sure what comes next. Clarity and grounded direction for life and business transitions.";
const socialImageUrl = "https://carlyclarkzimmer.com/services-social.png";

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

const claritySessionDifferences = [
  "I've delivered hundreds of sessions, which has given me the experience to uncover hidden narratives, intentions, and the question underneath the question.",
  "I have nine years of coaching experience and multiple coaching certifications: Professionally Certified from the International Coaching Federation (PCC) - known as the gold standard in coaching, Certified in Equity Centered Coaching to remove personal bias and understand the intersection of identity and cultural sensitivity, Certified in the Kolbe Index to identify your natural strengths, and certified in the BodyMind Method to bring integration and body wisdom to the work along with the intellectual tools.",
  "Formally trained in Internal Family Systems, aka Parts Work, which has helped my clients make behavioral changes faster than before I started using this modality.",
  "Skilled at pattern and blind spot identification",
  "Structured intake process to avoid rehashing what you've already tried or covered",
];

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
            The <strong>Business Restoration Method</strong> is private coaching for successful
            business owners who are ready to stop overfunctioning, reclaim their time and
            capacity, and rebuild the business around the way they actually want to work and live.
          </p>
        </div>
        </section>

        <Section className={styles.approach}>
          <h2>
            <span>The goal isn’t to burn it all down.</span>
            <span>It’s to stop recreating the parts that are wearing you out.</span>
          </h2>
          <p>
            <strong>What I see happen all the time is this:</strong> a woman builds a business that
            looks successful on paper, but behind the scenes she’s exhausted, working too much,
            and starting to resent how little life she has outside of it.
          </p>
          <p>
            And usually, the problem isn’t that she’s doing something wrong.
          </p>
          <p>
            It’s that the same habits and behaviors that helped her build the business in the first
            place are now the very things making it harder to grow without sacrificing more of
            herself.
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
          <div className={styles.meetCarlyCopy}>
            <div className={styles.meetCarlyStory}>
              <p>
                We start by finding the bottlenecks that are costing you the most time, energy,
                and capacity.
              </p>
              <p>
                Then we look at the patterns underneath them, the automatic decisions, old rules,
                and ways of working that keep recreating the same pressure.
              </p>
              <p>
                From there, we rebuild the parts of the business that need to change, your
                boundaries, access, pricing, capacity, and rhythms, so the business can keep
                growing <strong>without depending on you for everything.</strong> ✨
              </p>
              <div className={styles.restorationMethod}>
                <h3>The Business Restoration Method</h3>

                <h4>1. Stop the Leaks</h4>
                <p>
                  We identify where your time, energy, and attention are getting drained. That
                  might be client urgency, over-delivering, doing work your team could own, saying
                  yes too quickly, or constantly pushing your own priorities aside.
                </p>

                <h4>2. Open the Walls</h4>
                <p>
                  We look at what’s driving those patterns. The people-pleasing,
                  over-responsibility, perfectionism, old rules, and beliefs that make it hard to
                  follow through on the way you say you want to work.
                </p>

                <h4>3. Rebuild the Business Backbone</h4>
                <p>
                  Then we turn those new decisions into the actual structure of your business.
                  Pricing, access, scope, communication, capacity, delegation, and weekly rhythm
                  all get rebuilt so the business no longer relies on you overriding yourself to
                  keep it running.
                </p>

                <p className={styles.restorationGoal}>
                  The goal: a business that supports your clients and revenue without costing you
                  your life outside of it. ✨
                </p>
              </div>
            </div>
          </div>
          <div className={styles.meetCarlyMedia}>
            <div className={styles.meetCarlyImage}>
              <Image
                src="/carly-services-restoration.jpg"
                alt="Carly Clark Zimmer wearing a berry jacket"
                width={3840}
                height={5760}
                sizes="(max-width: 760px) 100vw, 42vw"
                unoptimized
              />
            </div>
            <Button
              className={styles.restorationApply}
              href="https://carlyclarkzimmer.as.me/connect"
              newTab
              variant="outline"
            >
              Apply Here
            </Button>
          </div>
        </Section>

        <Section className={styles.servicesShowcase}>
          <div className={styles.servicesBackdrop}>
            <Image
              className={styles.servicesShowcaseImage}
              src="/carly-services-showcase.jpg"
              alt="Carly Clark Zimmer in a flowing metallic dress"
              fill
              sizes="100vw"
              unoptimized
            />
            <div className={styles.servicesOverlay} aria-hidden="true" />
          </div>
          <div className={styles.servicesPanel}>
            <div className={styles.servicesIntro}>
              <Eyebrow>{homeContent.servicesShowcase.eyebrow}</Eyebrow>
              <h2>{homeContent.servicesShowcase.heading}</h2>
            </div>
            <div className={styles.servicesList}>
              {homeContent.servicesShowcase.services
                .filter((service) => service.title !== "Business Restoration Method")
                .map((service, index) => (
                <article className={styles.serviceItem} key={service.title}>
                  <div>
                    <p className={styles.servicePrompt}>
                      <strong>{service.prompt}</strong>
                    </p>
                    <h3>
                      {"href" in service ? (
                        <a
                          href={service.href}
                          target={"newTab" in service && service.newTab ? "_blank" : undefined}
                          rel={"newTab" in service && service.newTab ? "noreferrer" : undefined}
                        >
                          {service.title}
                        </a>
                      ) : (
                        service.title
                      )}
                    </h3>
                  </div>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <span className={styles.serviceNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </article>
                ))}
            </div>
          </div>
        </Section>

        <section className={styles.intro}>
          <div className={styles.introCard}>
            <div className={styles.introPortrait}>
              <Image
                src="/testimonial-emily.png"
                alt="Emily J., Fractional CFO"
                width={510}
                height={506}
                unoptimized
              />
            </div>
            <blockquote className={styles.introQuote}>
              <p>
                “Working with Carly leads to drastic change that was needed. My true self was buried
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
                couldn’t do that. Carly could.”
              </p>
              <footer>—Emily J. · Fractional CFO</footer>
            </blockquote>
          </div>
        </section>
      </div>

      <section className={styles.darkSplit}>
        <div>
          <h2>What makes this different from other clarity sessions</h2>
        </div>
        <ul>
          {claritySessionDifferences.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

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

      <section className={styles.finalTestimonial}>
        <blockquote>
          <p>
            “I’ve invested in many programs, including high-ticket ones that left me feeling
            scammed. Carly’s support was worth every penny – I wanted more clients, and I signed
            them, and now I have a system to keep getting them.
          </p>
          <p>Our work together will benefit my business for years to come.”</p>
          <footer>— Rochelle Y. · Founder, Restorative Dialogue Consultant</footer>
        </blockquote>
        <Image
          src="/testimonial-rochelle.png"
          alt="Rochelle Y., Founder and Restorative Dialogue Consultant"
          width={430}
          height={435}
          unoptimized
        />
      </section>
    </>
  );
}
