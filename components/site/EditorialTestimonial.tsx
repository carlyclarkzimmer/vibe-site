import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./EditorialTestimonial.module.css";

type TestimonialPhoto = {
  alt: string;
  src: string;
};

type EditorialTestimonialProps = {
  clientName: string;
  photo?: TestimonialPhoto;
  professionalTitle: string;
  testimonial: ReactNode;
};

export function EditorialTestimonial({
  clientName,
  photo,
  professionalTitle,
  testimonial,
}: EditorialTestimonialProps) {
  return (
    <section className={styles.section}>
      <figure className={styles.card}>
        <blockquote>{testimonial}</blockquote>
        <div className={styles.divider} aria-hidden="true" />
        {photo ? (
          <Image
            className={styles.photo}
            src={photo.src}
            alt={photo.alt}
            width={110}
            height={110}
            sizes="(max-width: 600px) 88px, 110px"
            unoptimized
          />
        ) : null}
        <figcaption className={styles.attribution}>
          <strong>{clientName}</strong>
          <span>{professionalTitle}</span>
        </figcaption>
      </figure>
    </section>
  );
}
