import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./AboutSection.module.css";

const exhibitions = [
  { year: "2024", title: "Solo Exhibition — Whitechapel Gallery, London" },
  { year: "2023", title: "Group Show — Saatchi Gallery, London" },
  { year: "2023", title: "Art Basel — Emerging Artists Pavilion" },
  { year: "2022", title: "Collective Visions — Tate Modern, London" },
];

export default function AboutSection() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <SectionHeader number="03" label="About the Artist" id="about-header" />

        <div className={styles.grid}>
          <ScrollReveal direction="up" delay={0.1}>
            <div className={styles.bio}>
              <h2 className={styles.heading}>
                A painter working at the intersection of
                <em className={styles.italic}> tradition </em>
                and
                <em className={styles.italic}> contemporary expression.</em>
              </h2>
              <p className={styles.text}>
                Moiz Khan is a London-based painter whose work spans abstract,
                landscape, portraiture, and still life. Trained in classical
                techniques and driven by modernist sensibility, his paintings seek
                to distill experience into its most essential visual form.
              </p>
              <p className={styles.text}>
                His work has been exhibited across Europe and the Middle East, and
                is held in private collections in London, Dubai, and New York. He
                maintains an active studio practice and is available for
                commissions, residencies, and gallery representation.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.details}>
            <ScrollReveal direction="up" delay={0.2}>
              <div className={styles.exhibitions}>
                <h4 className={styles.detailLabel}>Selected Exhibitions</h4>
                <div className={styles.exhibitionList}>
                  {exhibitions.map((item, i) => (
                    <div key={i} className={styles.exhibitionItem}>
                      <span className={styles.exhibitionYear}>{item.year}</span>
                      <span className={styles.exhibitionTitle}>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNum}>120+</span>
                  <span className={styles.statLabel}>Original Works</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>8</span>
                  <span className={styles.statLabel}>Solo Exhibitions</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>15</span>
                  <span className={styles.statLabel}>Private Collections</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
