"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { DripRecaptcha } from "../../../components/campaign/DripRecaptcha";
import { breakthroughEmailCapture } from "../../../content/campaigns/breakthrough";
import styles from "./page.module.css";

const SignupDialogContext = createContext<(() => void) | null>(null);

export function SignupButton({ children, className }: Readonly<{ children: ReactNode; className?: string }>) {
  const openDialog = useContext(SignupDialogContext);

  if (!openDialog) throw new Error("SignupButton must be used inside SignupExperience.");

  return <button className={className} onClick={openDialog} type="button">{children}</button>;
}

export function SignupExperience({ children }: Readonly<{ children: ReactNode }>) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openDialog() {
    setIsOpen(true);
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function handleClose() {
      setIsOpen(false);
    }

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  return <SignupDialogContext.Provider value={openDialog}>
    {children}
    <dialog
      aria-labelledby="breakthrough-form-title"
      className={styles.signupDialog}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog();
      }}
      ref={dialogRef}
    >
      <div className={styles.dialogPanel}>
        <button aria-label="Close signup form" className={styles.dialogClose} onClick={closeDialog} type="button">×</button>
        <form
          action={breakthroughEmailCapture.action}
          className={styles.signupForm}
          data-drip-embedded-form={breakthroughEmailCapture.formId}
          id="get-access"
          method="post"
        >
          <div className={styles.formHeading}>
            <h2 id="breakthrough-form-title">Get your free 5-Minute Laser Coach Custom GPT</h2>
            <p>Complete the form for immediate access.</p>
          </div>
          <div className={styles.formField}>
            <label htmlFor="breakthrough-first-name">First Name <strong>(Required)</strong></label>
            <input autoComplete="given-name" id="breakthrough-first-name" name="fields[first_name]" placeholder="Your first name" required type="text" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="breakthrough-email">Email Address <strong>(Required)</strong></label>
            <input autoComplete="email" id="breakthrough-email" name="fields[email]" placeholder="you@example.com" required type="email" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="breakthrough-social-media">Social Media <span>(Optional)</span></label>
            <input autoComplete="url" id="breakthrough-social-media" name="fields[social_media]" placeholder="@yourhandle or profile link" type="text" />
          </div>
          <div aria-hidden="true" className={styles.honeypot}>
            <label htmlFor="breakthrough-website">Website</label>
            <input autoComplete="off" id="breakthrough-website" name="website" tabIndex={-1} type="text" />
          </div>
          <DripRecaptcha siteKey={breakthroughEmailCapture.recaptchaSiteKey} />
          <input name="tags[]" type="hidden" value={breakthroughEmailCapture.campaignTag} />
          <button data-drip-attribute="sign-up-button" type="submit">Send Me the 5-Minute Laser Coach Custom GPT</button>
          <a className={styles.privacyLink} href="/privacy" rel="noreferrer" target="_blank">Privacy Policy</a>
        </form>
      </div>
    </dialog>
  </SignupDialogContext.Provider>;
}
