"use client";

import { useEffect, useRef } from "react";
import { DripRecaptcha } from "../../../../components/campaign/DripRecaptcha";
import { registrationContent } from "../../../../content/campaigns/beyond-the-bottleneck";
import styles from "./RegistrationModal.module.css";

const emailCapture = registrationContent.emailCapture;

export function RegistrationModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    let previousOverflow = "";

    function handleRegistrationClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>('a[href="#register"]');
      if (!link || !link.closest("main")) return;

      event.preventDefault();
      if (dialog?.open) return;
      openerRef.current = link;
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      dialog?.showModal();
      closeRef.current?.focus();
    }

    function handleClose() {
      document.body.style.overflow = previousOverflow;
      openerRef.current?.focus();
      openerRef.current = null;
    }

    document.addEventListener("click", handleRegistrationClick);
    dialog.addEventListener("close", handleClose);

    return () => {
      document.removeEventListener("click", handleRegistrationClick);
      dialog.removeEventListener("close", handleClose);
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      aria-labelledby="btb-registration-title"
      aria-modal="true"
      className={styles.dialog}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
      ref={dialogRef}
    >
      <div className={styles.panel}>
        <button
          aria-label="Close registration form"
          className={styles.close}
          onClick={() => dialogRef.current?.close()}
          ref={closeRef}
          type="button"
        >
          ×
        </button>
        <form
          action={emailCapture.action}
          className={styles.form}
          data-drip-embedded-form={emailCapture.formId}
          id={`drip-ef-${emailCapture.formId}`}
          method="post"
        >
          <div className={styles.intro} data-drip-attribute="description">
            <h2 id="btb-registration-title">Get Beyond the Bottleneck</h2>
            <p>
              Enter your details below and I&apos;ll send you access to the complete
              audio series beginning October 5th.
            </p>
          </div>
          <div className={styles.field}>
            <label htmlFor="btb-first-name">First Name</label>
            <input autoComplete="given-name" id="btb-first-name" name="fields[first_name]" type="text" />
          </div>
          <div className={styles.field}>
            <label htmlFor="btb-email">Email Address</label>
            <input autoComplete="email" id="btb-email" name="fields[email]" required type="email" />
          </div>
          <div className={styles.field}>
            <label htmlFor="btb-social-media">Social Media</label>
            <input id="btb-social-media" name="fields[social_media]" type="text" />
          </div>
          <input name="fields[optin_source]" type="hidden" value="Beyond the Bottleneck Landing Page" />
          <div aria-hidden="true" className={styles.honeypot}>
            <label htmlFor="btb-website">Website</label>
            <input autoComplete="off" id="btb-website" name="website" tabIndex={-1} type="text" />
          </div>
          <DripRecaptcha siteKey={emailCapture.recaptchaSiteKey} />
          <input name="tags[]" type="hidden" value={emailCapture.campaignTag} />
          <button className={styles.submit} data-drip-attribute="sign-up-button" type="submit">
            Send Me the Series
          </button>
          <a className={styles.privacy} href="/privacy" rel="noreferrer" target="_blank">
            Privacy Policy
          </a>
        </form>
      </div>
    </dialog>
  );
}
