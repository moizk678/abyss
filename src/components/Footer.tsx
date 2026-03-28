import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <span className={styles.colLabel}>Artist</span>
            <div className={styles.brand}>
              <span className={styles.brandMark}>MK</span>
              <div>
                <p className={styles.brandName}>Moiz Khan</p>
                <p className={styles.brandTagline}>Painter & Visual Artist</p>
              </div>
            </div>
          </div>

          <div className={styles.col}>
            <span className={styles.colLabel}>Site Map</span>
            <nav className={styles.nav}>
              <Link href="/#collection">Collection</Link>
              <Link href="/#process">Process</Link>
              <Link href="/#about">About</Link>
              <Link href="/#contact">Contact</Link>
            </nav>
          </div>

          <div className={styles.col}>
            <span className={styles.colLabel}>Connect</span>
            <nav className={styles.nav}>
              <a href="mailto:hello@moizkhan.art">Email</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Behance</a>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </nav>
          </div>

          <div className={styles.col}>
            <span className={styles.colLabel}>Studio</span>
            <div className={styles.info}>
              <p>London, United Kingdom</p>
              <p>Available for commissions</p>
              <p>& gallery representation</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Moiz Khan. All rights reserved.
          </p>
          <p className={styles.credit}>
            Paintings Gallery
          </p>
        </div>
      </div>
    </footer>
  );
}
