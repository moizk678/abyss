"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Painting } from "@/data/paintings";
import styles from "./PaintingCard.module.css";

interface PaintingCardProps {
  painting: Painting;
  index: number;
  priority?: boolean;
}

export default function PaintingCard({
  painting,
  index,
  priority = false,
}: PaintingCardProps) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      id={`painting-card-${painting.slug}`}
    >
      <Link href={`/paintings/${painting.slug}`} className={styles.link}>
        <div className={styles.imageWrap}>
          <Image
            src={painting.image}
            alt={painting.title}
            width={700}
            height={700}
            className={styles.image}
            priority={priority}
          />
          <div className={styles.imageOverlay}>
            <span className={styles.viewLabel}>View Work →</span>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.meta}>
            <span className={styles.tag}>{painting.year}</span>
            <span className={styles.separator}>·</span>
            <span className={styles.medium}>{painting.medium}</span>
          </div>
          <h3 className={styles.title}>{painting.title}</h3>
          <p className={styles.category}>{painting.category}</p>
        </div>
      </Link>
    </motion.article>
  );
}
