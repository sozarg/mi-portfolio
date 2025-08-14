import styles from "../../proyectos/proyecto.module.css";

export default function FunctionalityGrid({ items }) {
  return (
    <div className={styles.functionalityGrid}>
      {items.map((item, index) => (
        <div key={index} className={styles.functionalityCard}>
          <div className={styles.functionalityIcon}>
            {item.icon}
          </div>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
