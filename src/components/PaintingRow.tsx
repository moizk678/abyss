"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Painting } from "@/data/paintings";
import styles from "./PaintingRow.module.css";

interface PaintingRowProps {
  painting: Painting;
  index: number;
  priority?: boolean;
}

export default function PaintingRow({
  painting,
  index,
  priority = false,
}: PaintingRowProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      className={`${styles.row} ${isEven ? styles.rowNormal : styles.rowReverse}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      id={`painting-row-${painting.slug}`}
    >
      <div className={styles.imageColumn}>
        <Link href={`/paintings/${painting.slug}`} className={styles.imageLink}>
          <div className={styles.imageWrap}>
            <Image
              src={painting.image}
              alt={painting.title}
              width={1000}
              height={1200}
              className={styles.image}
              priority={priority}
            />
          </div>
        </Link>
      </div>

      <div className={styles.spacerColumn} />

      <div className={styles.contentColumn}>
        <div className={styles.meta}>
          <span className={styles.category}>{painting.category}</span>
          <span className={styles.separator}>·</span>
          <span className={styles.year}>{painting.year}</span>
        </div>
        
        <h3 className={styles.title}>{painting.title}</h3>
        
        <p className={styles.medium}>{painting.medium}</p>
        <p className={styles.dimensions}>{painting.dimensions}</p>
        
        <div className={styles.description}>
          <p>{painting.description}</p>
        </div>

        <Link href={`/paintings/${painting.slug}`} className={styles.viewLink}>
          View Project details →
        </Link>
      </div>
    </motion.article>
  );
}
