"use client";

import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

export default function HeroSection() {

  return (
    <section className={styles.hero} id="hero">
      {/* Background featured painting with parallax */}
      <div className={styles.bgImage}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.bgImg}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/animated_hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.content}>
        {/* Main hero text */}
        <div className={styles.textBlock}>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Original works exploring the tension between
            <br />
            form, emotion, and the act of seeing.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#collection" className="btn btn-accent">
              View Collection
            </a>
          </motion.div>
        </div>

        {/* Section progress indicator */}
        <motion.div
          className={styles.progress}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <span className={styles.progressNum}>01</span>
          <div className={styles.progressBar}>
            <motion.div
              className={styles.progressFill}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className={styles.progressNum}>05</span>
        </motion.div>
      </div>
    </section>
  );
}
