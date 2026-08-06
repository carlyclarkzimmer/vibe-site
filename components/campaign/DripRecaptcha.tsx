"use client";

import { useEffect } from "react";

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

export function DripRecaptcha({
  siteKey,
  inputId = "g-recaptcha-response-data-form-submission",
}: DripRecaptchaProps) {
  useEffect(() => {
    const scriptSource = `https://www.recaptcha.net/recaptcha/api.js?render=${siteKey}`;

    function executeRecaptcha() {
      window.grecaptcha?.ready(() => {
        window.grecaptcha
          ?.execute(siteKey, { action: "form_submission" })
          .then((token) => {
            const input = document.getElementById(
              inputId,
            ) as HTMLInputElement | null;

            if (input) input.value = token;
          });
      });
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${scriptSource}"]`,
    );

    if (existingScript) {
      existingScript.addEventListener("load", executeRecaptcha);
      executeRecaptcha();
      return () => {
        existingScript.removeEventListener("load", executeRecaptcha);
      };
    }

    const script = document.createElement("script");
    script.src = scriptSource;
    script.addEventListener("load", executeRecaptcha);
    document.head.appendChild(script);

    return () => {
      script.removeEventListener("load", executeRecaptcha);
    };
  }, [inputId, siteKey]);

  return (
    <input
      className="g-recaptcha g-recaptcha-response"
      data-sitekey={siteKey}
      id={inputId}
      name="g-recaptcha-response-data[form_submission]"
      type="hidden"
    />
  );
}
