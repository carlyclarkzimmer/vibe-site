import styles from "./FeaturedVideoTestimonial.module.css";

export function FeaturedVideoTestimonial() {
  return (
    <section className={styles.section} aria-labelledby="laurel-video-heading">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>CLIENT EXPERIENCE</p>
          <h2 id="laurel-video-heading">What It&apos;s Like to Work With Carly</h2>
          <p>
            Laurel discusses Carly&apos;s holistic coaching approach, including support across mindset,
            business, technology, and personal development.
          </p>
          <p>
            Her experience shows the breadth of support available when the business challenge is
            connected to how you think, lead, work, and live.
          </p>
          <p className={styles.duration}>VIDEO TESTIMONIAL · 7 MINUTES 25 SECONDS</p>
        </div>
        <div className={styles.videoFrame}>
          <video
            aria-label="Laurel's video testimonial about working with Carly"
            controls
            playsInline
            poster="/testimonials/laurel-poster.jpg"
            preload="metadata"
          >
            <source src="/testimonials/laurel-testimonial.mp4" type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </div>
      </div>
    </section>
  );
}
