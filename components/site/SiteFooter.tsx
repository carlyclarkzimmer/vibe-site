import Link from "next/link";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Balance by the Bay, LLC</p>
      <div>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
      </div>
    </footer>
  );
}
