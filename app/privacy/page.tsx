import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Carly Clark Zimmer",
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <Link className={styles.back} href="/">Back to Beyond the Bottleneck</Link>
      <article className={styles.policy}>
        <p className={styles.eyebrow}>Carly Clark Zimmer</p>
        <h1>Privacy Policy</h1>
        <p>
          Carly Clark Zimmer and Balance By The Bay, LLC are committed to keeping personal
          information collected through this site accurate, confidential, secure, and private.
          This policy describes the information we collect, how we use it, and the choices
          available to visitors.
        </p>

        <h2>Collection of Information</h2>
        <p>
          We may collect information you voluntarily provide, including your name and email
          address, when you register for a listening tour, request information, purchase
          services, or otherwise contact us. We may also collect information automatically
          when you visit, including browser, device, IP address, cookies, third-party tracking
          technologies, and server logs.
        </p>

        <h2>Use of Information Collected</h2>
        <p>
          We use personal information to operate this site, provide requested services and
          listening-tour emails, and communicate about related services when you choose to
          receive those communications. Email signup information is processed through Drip.
        </p>
        <p>
          Carly Clark Zimmer and Balance By The Bay, LLC do not sell, rent, or lease customer
          lists or names to third parties.
        </p>
        <p>
          We may disclose personal information when required by law or when reasonably necessary
          to protect our rights, property, visitors, or the public.
        </p>

        <h2>Children Under Age 18</h2>
        <p>
          We do not knowingly collect personally identifiable information from children under
          eighteen without verifiable parental consent. Anyone under eighteen must obtain a
          parent or guardian’s permission to use this site.
        </p>

        <h2>Unsubscribe or Opt Out</h2>
        <p>
          You may stop receiving marketing emails at any time by using the unsubscribe link in
          an email or by contacting <a href="mailto:support@carlyclarkzimmer.com">support@carlyclarkzimmer.com</a>.
        </p>

        <h2>Links to Other Websites</h2>
        <p>
          This site may link to other websites. We are not responsible for their privacy
          practices, and encourage visitors to review the privacy policy of each site they use.
        </p>

        <h2>Security</h2>
        <p>
          We take reasonable physical, procedural, and technical precautions to protect personal
          information under our control. No method of electronic transmission or storage is
          completely secure, however.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. The current version will be posted on this
          page.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to <a href="mailto:support@carlyclarkzimmer.com">support@carlyclarkzimmer.com</a>.
        </p>
        <p className={styles.updated}>Last updated May 5, 2020.</p>
      </article>
    </main>
  );
}
