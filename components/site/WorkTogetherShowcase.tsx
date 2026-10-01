import Image from "next/image";
import type { ReactNode } from "react";
import { homeContent } from "../../content/site/home";
import { Eyebrow } from "../ui/Eyebrow";
import { Section } from "../ui/Section";
import styles from "./WorkTogetherShowcase.module.css";

type Service = {
  prompt?: string;
  title: string;
  href: string;
  description?: ReactNode;
  newTab?: boolean;
};

type WorkTogetherShowcaseProps = {
  eyebrow?: string | null;
  heading?: string;
  headingLevel?: "h1" | "h2";
  id?: string;
  imageAlt?: string;
  imageSrc?: string;
  services?: readonly Service[];
};

export function WorkTogetherShowcase({
  eyebrow = homeContent.servicesShowcase.eyebrow,
  heading = homeContent.servicesShowcase.heading,
  headingLevel: Heading = "h2",
  id,
  imageAlt = "Carly Clark Zimmer in a flowing metallic dress",
  imageSrc = "/carly-services-showcase.jpg",
  services = homeContent.servicesShowcase.services,
}: WorkTogetherShowcaseProps) {
  return (
    <Section className={styles.showcase} id={id}>
      <div className={styles.backdrop}>
        <Image
          className={styles.image}
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          unoptimized
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>
      <div className={styles.panel}>
        <div className={styles.intro}>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <Heading>{heading}</Heading>
        </div>
        <div className={styles.list}>
          {services.map((service, index) => (
            <article className={styles.item} key={service.title}>
              <div>
                {service.prompt ? (
                  <p className={styles.prompt}>
                    <strong>{service.prompt}</strong>
                  </p>
                ) : null}
                <h3>
                  <a
                    href={service.href}
                    target={service.newTab ? "_blank" : undefined}
                    rel={service.newTab ? "noreferrer" : undefined}
                  >
                    {service.title}
                  </a>
                </h3>
              </div>
              {service.description ? (
                <p className={styles.description}>{service.description}</p>
              ) : null}
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
