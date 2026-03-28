import SectionHeader from "@/components/SectionHeader";
import PaintingCard from "@/components/PaintingCard";
import { paintings } from "@/data/paintings";
import styles from "./CollectionSection.module.css";

export default function CollectionSection() {
  return (
    <section className={`section ${styles.collection}`} id="collection">
      <div className="container">
        <SectionHeader number="01" label="The Collection" id="collection-header" />

        <div className={styles.grid}>
          {paintings.map((painting, index) => (
            <PaintingCard
              key={painting.slug}
              painting={painting}
              index={index}
              priority={index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
