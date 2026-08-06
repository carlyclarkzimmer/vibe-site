"use client";

import { useEffect, useRef, useState } from "react";

type Grecaptcha = {
  execute: (
    siteKey: string,
    options: { action: string },
  ) => Promise<string>;
  ready: (callback: () => void) => void;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

type DripRecaptchaProps = {
  siteKey: string;
  inputId?: string;
};

const recaptchaLoads = new Map<string, Promise<Grecaptcha>>();

function loadRecaptcha(siteKey: string) {
  const existingLoad = recaptchaLoads.get(siteKey);
  if (existingLoad) return existingLoad;

  const scriptSource = `https://www.recaptcha.net/recaptcha/api.js?render=${siteKey}`;
  const load = new Promise<Grecaptcha>((resolve, reject) => {
    function resolveWhenReady() {
      if (!window.grecaptcha) {
        reject(new Error("Google reCAPTCHA did not initialize."));
        return;
      }

      window.grecaptcha.ready(() => resolve(window.grecaptcha as Grecaptcha));
    }

    if (window.grecaptcha) {
      resolveWhenReady();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${scriptSource}"]`,
    );

    if (existingScript) {
      existingScript.addEventListener("load", resolveWhenReady, { once: true });
      existingScript.addEventListener(
        "error",
        () => reject(new Error("Google reCAPTCHA failed to load.")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = scriptSource;
    script.addEventListener("load", resolveWhenReady, { once: true });
    script.addEventListener(
      "error",
      () => reject(new Error("Google reCAPTCHA failed to load.")),
      { once: true },
    );
    document.head.appendChild(script);
  });

  recaptchaLoads.set(siteKey, load);
  void load.catch(() => {
    if (recaptchaLoads.get(siteKey) === load) {
      recaptchaLoads.delete(siteKey);
    }
  });
  return load;
}

export function DripRecaptcha({
  siteKey,
  inputId = "g-recaptcha-response-data-form-submission",
}: DripRecaptchaProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const input = inputRef.current;
    const form = input?.form;
    if (!input || !form) return;

    let isRefreshing = false;
    let hasFreshToken = false;

    async function handleSubmit(event: SubmitEvent) {
      if (hasFreshToken) {
        hasFreshToken = false;
        return;
      }

      event.preventDefault();
      if (isRefreshing) return;

      isRefreshing = true;
      setErrorMessage("");

      const submitter = event.submitter;
      if (
        submitter instanceof HTMLButtonElement ||
        submitter instanceof HTMLInputElement
      ) {
        submitter.disabled = true;
      }

      try {
        const recaptcha = await loadRecaptcha(siteKey);
        input.value = await recaptcha.execute(siteKey, {
          action: "form_submission",
        });
        hasFreshToken = true;
        form.requestSubmit();
      } catch {
        setErrorMessage(
          "We couldn’t verify this submission. Please try again.",
        );
      } finally {
        isRefreshing = false;
        if (
          submitter instanceof HTMLButtonElement ||
          submitter instanceof HTMLInputElement
        ) {
          submitter.disabled = false;
        }
      }
    }

    form.addEventListener("submit", handleSubmit);
    void loadRecaptcha(siteKey).catch(() => {
      // Submission displays a user-facing error if loading still fails.
    });

    return () => form.removeEventListener("submit", handleSubmit);
  }, [siteKey]);

  return (
    <>
      <input
        className="g-recaptcha g-recaptcha-response"
        data-sitekey={siteKey}
        id={inputId}
        name="g-recaptcha-response-data[form_submission]"
        ref={inputRef}
        type="hidden"
      />
      {errorMessage ? <p role="alert">{errorMessage}</p> : null}
    </>
  );
}
