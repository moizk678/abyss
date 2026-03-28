import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <SectionHeader number="04" label="Get in Touch" id="contact-header" />

        <div className={styles.grid}>
          <ScrollReveal direction="up" delay={0.1}>
            <div className={styles.main}>
              <h2 className={styles.heading}>
                Interested in a piece,
                <br />a commission, or collaboration?
              </h2>
              <p className={styles.text}>
                I welcome inquiries from collectors, galleries, curators, and anyone
                who feels a connection with the work. Every painting has a story —
                I&apos;d love to share it with you.
              </p>
              <a
                href="mailto:hello@moizkhan.art"
                className={styles.email}
                id="contact-email"
              >
                hello@moizkhan.art
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className={styles.details}>
              <div className={styles.detailBlock}>
                <h4 className={styles.detailLabel}>Commissions</h4>
                <p className={styles.detailText}>
                  Custom paintings available in a range of sizes and styles.
                  Typical lead time: 4–8 weeks. Pricing on request.
                </p>
              </div>

              <div className={styles.detailBlock}>
                <h4 className={styles.detailLabel}>Gallery Representation</h4>
                <p className={styles.detailText}>
                  Open to gallery partnerships and representation. Please reach
                  out with your proposal and exhibition schedule.
                </p>
              </div>

              <div className={styles.detailBlock}>
                <h4 className={styles.detailLabel}>Studio Visits</h4>
                <p className={styles.detailText}>
                  By appointment. London-based studio open for collectors and
                  curators. Virtual studio tours also available.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
