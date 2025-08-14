import styles from "../../proyectos/proyecto.module.css";

export default function Section({ 
  variant = "light", 
  title, 
  children 
}) {
  const sectionClass = `${styles.section} ${styles[`section${variant.charAt(0).toUpperCase() + variant.slice(1)}`]}`;
  
  return (
    <div className={sectionClass}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
