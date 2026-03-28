import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./ProcessSection.module.css";

const processPoints = [
  {
    number: "01",
    title: "Observation",
    description:
      "Each painting begins with prolonged looking — studying light, form, and the emotional weight of a subject before brush touches canvas.",
  },
  {
    number: "02",
    title: "Materials & Ground",
    description:
      "Working primarily in oil on stretched linen and canvas, each surface is prepared to respond to the specific demands of the composition.",
  },
  {
    number: "03",
    title: "The Act of Painting",
    description:
      "Balancing control and spontaneity — layered glazes build depth while gestural marks preserve the energy of creation.",
  },
  {
    number: "04",
    title: "Living With the Work",
    description:
      "A painting is never finished in a single session. Days of observation between sessions allow the work to reveal what it needs.",
  },
];

export default function ProcessSection() {
  return (
    <section className={`section ${styles.process}`} id="process">
      <div className="container">
        <SectionHeader number="02" label="Process" id="process-header" />

        <div className={styles.grid}>
          <ScrollReveal direction="up" delay={0.1}>
            <div className={styles.statement}>
              <h2 className={styles.heading}>
                Painting is an act of attention — a slow, deliberate practice of
                seeing what is ordinarily overlooked.
              </h2>
              <p className={styles.body}>
                My work moves between representation and abstraction, seeking the
                point where observation transforms into something more visceral.
                Each piece is a conversation between intention and accident, between
                the controlled mark and the unexpected discovery.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.points}>
            {processPoints.map((point, i) => (
              <ScrollReveal key={point.number} direction="up" delay={0.2 + i * 0.1}>
                <div className={styles.point}>
                  <div className={styles.pointNumber}>
                    <span>{point.number}</span>
                  </div>
                  <div className={styles.pointContent}>
                    <h4 className={styles.pointTitle}>{point.title}</h4>
                    <p className={styles.pointDesc}>{point.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
