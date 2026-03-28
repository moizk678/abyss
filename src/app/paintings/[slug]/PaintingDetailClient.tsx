"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Painting } from "@/data/paintings";
import ScrollReveal from "@/components/ScrollReveal";
import PaintingCard from "@/components/PaintingCard";
import styles from "./PaintingDetail.module.css";

interface PaintingDetailClientProps {
  painting: Painting;
  related: Painting[];
}

export default function PaintingDetailClient({
  painting,
  related,
}: PaintingDetailClientProps) {
  return (
    <article className={styles.detail}>
      {/* Back navigation */}
      <motion.div
        className={styles.backNav}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link href="/#collection" className={styles.backLink}>
          ← Back to Collection
        </Link>
      </motion.div>

      {/* Hero image */}
      <motion.div
        className={styles.heroImage}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={painting.image}
          alt={painting.title}
          width={1200}
          height={1200}
          className={styles.image}
          priority
        />
      </motion.div>

      {/* Info section */}
      <div className={styles.info}>
        <div className={styles.infoGrid}>
          <ScrollReveal direction="up" delay={0.1}>
            <div className={styles.titleBlock}>
              <div className={styles.meta}>
                <span className={styles.tag}>{painting.year}</span>
                <span className={styles.sep}>·</span>
                <span className={styles.category}>{painting.category}</span>
              </div>
              <h1 className={styles.title}>{painting.title}</h1>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className={styles.specs}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Medium</span>
                <span className={styles.specValue}>{painting.medium}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Dimensions</span>
                <span className={styles.specValue}>{painting.dimensions}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Year</span>
                <span className={styles.specValue}>{painting.year}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Status</span>
                <span className={styles.specValue}>Available</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <div className={styles.description}>
            <p>{painting.description}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className={styles.inquire}>
            <a href="mailto:hello@moizkhan.art" className="btn btn-accent">
              Inquire About This Work →
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Related works */}
      {related.length > 0 && (
        <div className={styles.related}>
          <div className={styles.relatedInner}>
            <ScrollReveal>
              <div className={styles.relatedHeader}>
                <span className={styles.relatedLabel}>Related Works</span>
                <div className={styles.relatedRule} />
              </div>
            </ScrollReveal>

            <div className={styles.relatedGrid}>
              {related.map((p, i) => (
                <PaintingCard key={p.slug} painting={p} index={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
