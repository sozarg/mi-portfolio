import Section from "./Section";
import styles from "../../proyectos/proyecto.module.css";

export default function Metrics({ metrics }) {
  return (
    <Section variant="light" title="Resultados">
      <div className={styles.metricsGrid}>
        {metrics.map((metric, index) => (
          <div key={index} className={styles.metricCard}>
            <span className={styles.metricValue}>{metric.value}</span>
            <span className={styles.metricLabel}>{metric.label}</span>
          </div>
        ))}
      </div>
      <p className={styles.resultsDescription}>
        Resultados destacados del proyecto que demuestran el impacto y la efectividad de la solución implementada.
      </p>
    </Section>
  );
}
