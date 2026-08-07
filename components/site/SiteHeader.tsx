import Link from "next/link";
import { siteNavigation, sitePrimaryCta } from "../../content/site/navigation";
import { Button } from "../ui/Button";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation} aria-label="Site navigation">
        <Link className={styles.monogram} href="/" aria-label="Carly Clark Zimmer home">
          ccz
        </Link>
        <div className={styles.desktopLinks}>
          {siteNavigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <Button href={sitePrimaryCta.href}>{sitePrimaryCta.label}</Button>
        <details className={styles.mobileMenu}>
          <summary>Menu</summary>
          <div>
            {siteNavigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <a href={sitePrimaryCta.href}>{sitePrimaryCta.label}</a>
          </div>
        </details>
      </nav>
    </header>
  );
}
