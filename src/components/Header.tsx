"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    // Only hide after scrolling past the header height
    if (latest > 80 && latest > previous) {
      setHidden(true);
    } else if (latest < previous) {
      setHidden(false);
    }
    lastScrollY.current = latest;
  });

  return (
    <>
      <motion.header
        className={styles.header}
        id="site-header"
        animate={{ y: hidden && !menuOpen ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.inner}>
          <div />

          <nav className={styles.nav} id="header-nav">
            <button
              className={styles.menuToggle}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              id="menu-toggle"
            >
              {menuOpen ? "Close" : "Menu"}{" "}
              <span className={styles.menuIcon}>{menuOpen ? "×" : "+"}</span>
            </button>
          </nav>

          <Link href="#contact" className={styles.cta} id="header-cta">
            Inquire
          </Link>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            id="menu-overlay"
          >
            <div className={styles.overlayContent}>
              <div className={styles.overlayGrid}>
                <div className={styles.overlayCol}>
                  <span className={styles.overlayLabel}>Navigation</span>
                  <nav className={styles.overlayNav}>
                    {[
                      { href: "/#collection", label: "Collection" },
                      { href: "/#process", label: "Process" },
                      { href: "/#about", label: "About" },
                      { href: "/#contact", label: "Contact" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.15 + i * 0.08,
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <Link
                          href={item.href}
                          className={styles.overlayLink}
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                <div className={styles.overlayCol}>
                  <span className={styles.overlayLabel}>Connect</span>
                  <div className={styles.overlayInfo}>
                    <p>hello@moizkhan.art</p>
                    <p>Instagram</p>
                    <p>Behance</p>
                  </div>
                </div>

                <div className={styles.overlayCol}>
                  <span className={styles.overlayLabel}>Studio</span>
                  <div className={styles.overlayInfo}>
                    <p>Based in London</p>
                    <p>Available for commissions</p>
                    <p>& exhibitions worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
