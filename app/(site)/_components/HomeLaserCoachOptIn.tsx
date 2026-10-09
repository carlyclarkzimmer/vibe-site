"use client";

import Image from "next/image";
import { FormEvent, InvalidEvent, useState } from "react";
import { DripRecaptcha } from "../../../components/campaign/DripRecaptcha";
import { breakthroughEmailCapture } from "../../../content/campaigns/breakthrough";
import styles from "../page.module.css";

type FieldName = "firstName" | "email";
type FieldErrors = Partial<Record<FieldName, string>>;

export function HomeLaserCoachOptIn() {
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.preventDefault();
    const field = event.currentTarget;
    const fieldName = field.name === "fields[first_name]" ? "firstName" : "email";
    const message = field.validity.valueMissing
      ? fieldName === "firstName"
        ? "Please enter your first name."
        : "Please enter your email address."
      : "Please enter a valid email address.";

    setFieldErrors((current) => ({ ...current, [fieldName]: message }));
  }

  function clearFieldError(fieldName: FieldName) {
    setFieldErrors((current) => ({ ...current, [fieldName]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const recaptcha = form.elements.namedItem(
      "g-recaptcha-response-data[form_submission]",
    );

    if (!(recaptcha instanceof HTMLInputElement) || !recaptcha.value) return;

    event.preventDefault();
    setStatus("submitting");

    try {
      await fetch(form.action, {
        body: new FormData(form),
        method: "POST",
        mode: "no-cors",
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.laserCoach} id="laser-coach">
      <div className={styles.laserCoachInner}>
        <div className={styles.laserCoachImage}>
          <Image
            alt="Profile silhouette with gears representing pattern recognition"
            height={1080}
            src="/laser-coach-pattern-head-transparent.png?v=2"
            unoptimized
            width={1080}
          />
        </div>
        <div className={styles.laserCoachContent}>
          <p className={styles.laserCoachEyebrow}>Free Tool</p>
          <h2>
            Not sure where your bottleneck is? <em>Start here.</em>
          </h2>
          <p className={styles.laserCoachBody}>
            The 5-Minute Laser Coach asks the same pattern-finding questions I use with private clients, then gives you an 80/20 read: what to stop carrying and the one next move that matters.
          </p>
          {status === "success" ? (
            <p className={styles.laserCoachSuccess} role="status">
              It&apos;s on its way. Check your inbox for your Laser Coach link.
            </p>
          ) : (
            <>
              <form
                action={breakthroughEmailCapture.action}
                className={styles.laserCoachForm}
                data-drip-embedded-form={breakthroughEmailCapture.formId}
                id="home-laser-coach-form"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className={styles.laserCoachField}>
                  <label htmlFor="home-laser-coach-first-name">First name</label>
                  <input
                    aria-describedby={fieldErrors.firstName ? "home-laser-coach-first-name-error" : undefined}
                    aria-invalid={Boolean(fieldErrors.firstName)}
                    autoComplete="given-name"
                    id="home-laser-coach-first-name"
                    name="fields[first_name]"
                    onInput={() => clearFieldError("firstName")}
                    onInvalid={handleInvalid}
                    required
                    type="text"
                  />
                  {fieldErrors.firstName ? (
                    <span className={styles.laserCoachError} id="home-laser-coach-first-name-error">
                      {fieldErrors.firstName}
                    </span>
                  ) : null}
                </div>
                <div className={styles.laserCoachField}>
                  <label htmlFor="home-laser-coach-email">Email</label>
                  <input
                    aria-describedby={fieldErrors.email ? "home-laser-coach-email-error" : undefined}
                    aria-invalid={Boolean(fieldErrors.email)}
                    autoComplete="email"
                    id="home-laser-coach-email"
                    name="fields[email]"
                    onInput={() => clearFieldError("email")}
                    onInvalid={handleInvalid}
                    required
                    type="email"
                  />
                  {fieldErrors.email ? (
                    <span className={styles.laserCoachError} id="home-laser-coach-email-error">
                      {fieldErrors.email}
                    </span>
                  ) : null}
                </div>
                <DripRecaptcha
                  inputId="g-recaptcha-response-data-form-submission-home-laser-coach"
                  siteKey={breakthroughEmailCapture.recaptchaSiteKey}
                />
                <input name="tags[]" type="hidden" value={breakthroughEmailCapture.campaignTag} />
                <button disabled={status === "submitting"} type="submit">
                  Send Me the Laser Coach
                </button>
              </form>
              {status === "error" ? (
                <p className={styles.laserCoachSubmitError} role="alert">
                  We couldn&apos;t submit the form. Please try again.
                </p>
              ) : null}
              <p className={styles.laserCoachFinePrint}>
                Free. Instant access. Unsubscribe anytime. <a href="/privacy">Privacy Policy</a>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
