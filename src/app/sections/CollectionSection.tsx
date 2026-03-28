import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import PaintingRow from "@/components/PaintingRow";
import { paintings } from "@/data/paintings";
import styles from "./CollectionSection.module.css";

export default function CollectionSection() {
  return (
    <section className={`section ${styles.collection}`} id="collection">
      <div className="container">
        <SectionHeader number="02" label="Recent Works" id="collection-header" />

        <div className={styles.wrapper}>
          <div className={styles.stickyFigureWrap}>
            <div className={styles.stickyFigure}>
              <Image 
                src="/The_thing2.png" 
                alt="Artistic sculpture" 
                width={600} 
                height={800} 
                className={styles.figureImg}
              />
              <div className={styles.floorShadow} />
            </div>
          </div>

          <div className={styles.rows}>
            {paintings.map((painting, index) => (
              <PaintingRow
                key={painting.slug}
                painting={painting}
                index={index}
                priority={index < 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
