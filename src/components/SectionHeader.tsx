import ScrollReveal from "./ScrollReveal";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  number: string;
  label: string;
  id?: string;
}

export default function SectionHeader({ number, label, id }: SectionHeaderProps) {
  return (
    <ScrollReveal>
      <div className={styles.header} id={id}>
        <span className={styles.number}>{number}</span>
        <span className={styles.label}>{label}</span>
        <div className={styles.rule} />
      </div>
    </ScrollReveal>
  );
}
