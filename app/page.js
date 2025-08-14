"use client";
import styles from "../styles/home.module.css";
import { useState, useEffect } from "react";

export default function Page() {
  const [copyStatus, setCopyStatus] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("mateoterr@gmail.com");
      setCopyStatus("Copiado!");
    } catch {
      setCopyStatus("No se pudo copiar");
    }
  };

  useEffect(() => {
    if (!copyStatus) return;
    const t = setTimeout(() => setCopyStatus(""), 1500);
    return () => clearTimeout(t);
  }, [copyStatus]);
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <img
          src="/assets/perfil.jpg"
          alt="Foto de perfil"
          className={styles.avatar}
        />
        <div className={styles.heroText}>
          <h1 className={styles.name}>
            Mateo Terrile
          </h1>
          <p className={styles.subtitle}>
          Disciplina y constancia.
          </p>
        </div>
      </section>

      <hr className={styles.rule} />

      <section className={styles.info}>
        <ul>
                     <li>
             <span className={styles.icon}>
                               <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 9H2M6 17.5L8.5 15L6 12.5M11 17.5L15 17.5M2 7.8L2 16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3L6.8 3C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </span>
             Desarrollador Full Stack
           </li>
          <li>
            <span className={styles.icon}>
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M5 14.2864C3.14864 15.1031 2 16.2412 2 17.5C2 19.9853 6.47715 22 12 22C17.5228 22 22 19.9853 22 17.5C22 16.2412 20.8514 15.1031 19 14.2864M18 8C18 12.0637 13.5 14 12 17C10.5 14 6 12.0637 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
            </span>
            Buenos Aires, Argentina
          </li>
          <li>
            <span className={styles.icon}>
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M13.744 2.63358L21.272 7.52679C21.538 7.69969 21.671 7.78615 21.7674 7.90146C21.8527 8.00354 21.9167 8.12162 21.9558 8.24877C22 8.39241 22 8.55104 22 8.8683V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V8.8683C2 8.55104 2 8.39241 2.04417 8.24877C2.08327 8.12162 2.14735 8.00354 2.23265 7.90146C2.32901 7.78615 2.46201 7.69969 2.72802 7.52679L10.256 2.63358M13.744 2.63358C13.1127 2.22327 12.7971 2.01812 12.457 1.93829C12.1564 1.86774 11.8436 1.86774 11.543 1.93829C11.2029 2.01812 10.8873 2.22327 10.256 2.63358M13.744 2.63358L19.9361 6.65849C20.624 7.10559 20.9679 7.32915 21.087 7.61264C21.1911 7.86039 21.1911 8.13961 21.087 8.38737C20.9679 8.67086 20.624 8.89441 19.9361 9.34152L13.744 13.3664C13.1127 13.7767 12.7971 13.9819 12.457 14.0617C12.1564 14.1323 11.8436 14.1323 11.543 14.0617C11.2029 13.9819 10.8873 13.7767 10.256 13.3664L4.06386 9.34151C3.37601 8.89441 3.03209 8.67086 2.91297 8.38737C2.80888 8.13961 2.80888 7.86039 2.91297 7.61264C3.03209 7.32915 3.37601 7.1056 4.06386 6.65849L10.256 2.63358M21.5 19L14.8572 13M9.14282 13L2.5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
            </span>
            <span className={styles.emailWrapper}>
              <a className={styles.emailLink} href="mailto:mateoterr@gmail.com">mateoterr@gmail.com</a>
              <button className={styles.copyBtn} type="button" onClick={handleCopyEmail} aria-label="Copiar email">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M9 9V5C9 3.89543 9.89543 3 11 3H19C20.1046 3 21 3.89543 21 5V13C21 14.1046 20.1046 15 19 15H15M5 9H13C14.1046 9 15 9.89543 15 11V19C15 20.1046 14.1046 21 13 21H5C3.89543 21 3 20.1046 3 19V11C3 9.89543 3.89543 9 5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {copyStatus ? <span className={styles.copyStatus}>{copyStatus}</span> : null}
            </span>
          </li>
        </ul>
      </section>

      <section className={styles.links}>
        <a className={styles.card} href="https://www.linkedin.com/in/mateoterrile/" target="_blank" rel="noreferrer">
          <div className={styles.cardTitle}>LinkedIn</div>
          <div className={styles.cardSub}>mateoterrile</div>
        </a>
        <a className={styles.card} href="https://github.com/sozarg" target="_blank" rel="noreferrer">
          <div className={styles.cardTitle}>GitHub</div>
          <div className={styles.cardSub}>sozarg</div>
        </a>
        <a className={styles.card} href="/assets/terrile_mateo_cv.pdf" target="_blank" rel="noreferrer" download>
          <div className={styles.cardTitle}>CV</div>
          <div className={styles.cardSub}>Terrile Mateo · PDF</div>
        </a>
      </section>

      <section className={styles.about}>
        <h2 className={styles.aboutTitle}>Acerca de mí</h2>
        <div className={styles.aboutContent}>
          <p>
            Hola Mundo, soy Mateo Terrile.
          </p>
          <p>
            Estudiante de la Tecnicatura Universitaria en Programación en la UTN (70% completada) y desarrollador con 3 años de experiencia profesional. Con el tiempo fui explorando distintos stacks, pero FastAPI se ganó mi favoritismo por su eficiencia y versatilidad.
          </p>
          <p>
            Me encanta la programación creativa y experimentar con nuevas tecnologías incluso fuera del trabajo. Uno de mis proyectos más destacados fue para el evento municipal "Día del Niño" en Avellaneda, donde desarrollé una plataforma que gestionó el registro y la participación de más de 10.000 usuarios de manera fluida y segura.
          </p>
          <p>
            Hoy trabajo como desarrollador Full Stack con foco en Backend, transformando ideas en APIs funcionales y soluciones escalables que realmente aporten valor.
          </p>
        </div>
      </section>



      <section className={styles.experiences}>
        <h2 className={styles.experiencesTitle}>Experiencia Profesional</h2>
        <div className={styles.experiencesGrid}>
          <div className={styles.experienceCard}>
            <div className={styles.experienceHeader}>
              <div className={styles.projectInfoHeader}>
                <span className={styles.companyName}>Detta 3D</span>
                <h3 className={styles.experienceTitle}>Plataforma Web para Gestión de Ventas y Pedidos</h3>
              </div>
            </div>
            <p className={styles.experienceRole}>Desarrollador Full Stack</p>
            <p className={styles.experienceTime}>Abril 2025 - Presente</p>
            <div className={styles.experiencePreview}>
              <img 
                src="/assets/detta-preview.png" 
                alt="Preview Detta 3D"
                className={styles.previewImage}
              />
            </div>
            <div className={styles.experienceTech}>
              <span className={styles.techTag}>FastAPI</span>
              <span className={styles.techTag}>Python</span>
              <span className={styles.techTag}>Xata</span>
              <span className={styles.techTag}>React</span>
              <span className={styles.techTag}>Render</span>
              <span className={styles.techTag}>Postman</span>
              <span className={styles.techTag}>Git</span>
            </div>
            <a href="/proyectos/detta3d" className={styles.viewProjectBtn}>
              Ver Proyecto
            </a>
          </div>

          <div className={styles.experienceCard}>
            <div className={styles.experienceHeader}>
              <div className={styles.projectInfoHeader}>
                <span className={styles.companyName}>Municipalidad de Avellaneda</span>
                <h3 className={styles.experienceTitle}>Sistema de Inscripción y Administración de Sorteos</h3>
              </div>
            </div>
            <p className={styles.experienceRole}>Desarrollador Frontend</p>
            <p className={styles.experienceTime}>Julio 2025 - Agosto 2025</p>
            <div className={styles.experiencePreview}>
              <img 
                src="/assets/infancias-preview.png" 
                alt="Preview Plataforma Día del Niño"
                className={styles.previewImage}
              />
            </div>
            <div className={styles.experienceTech}>
              <span className={styles.techTag}>Next.js</span>
              <span className={styles.techTag}>React</span>
              <span className={styles.techTag}>CSS</span>
              <span className={styles.techTag}>FastAPI</span>
              <span className={styles.techTag}>Postman</span>
              <span className={styles.techTag}>GitLab</span>
            </div>
            <a href="/proyectos/dia-nino" className={styles.viewProjectBtn}>
              Ver Proyecto
            </a>
          </div>

          <div className={styles.experienceCard}>
            <div className={styles.experienceHeader}>
              <div className={styles.projectInfoHeader}>
                <span className={styles.companyName}>Municipalidad de Avellaneda</span>
                <h3 className={styles.experienceTitle}>Aplicación de Trivia Interactiva Táctil</h3>
              </div>
            </div>
            <p className={styles.experienceRole}>Desarrollador Frontend</p>
            <p className={styles.experienceTime}>Julio 2025 - Agosto 2025</p>
            <div className={styles.experiencePreview}>
              <img 
                src="/assets/trivia-preview.png" 
                alt="Preview Trivia Interactiva"
                className={styles.previewImage}
              />
            </div>
            <div className={styles.experienceTech}>
              <span className={styles.techTag}>Electron</span>
              <span className={styles.techTag}>JavaScript</span>
              <span className={styles.techTag}>HTML/CSS</span>
              <span className={styles.techTag}>Bootstrap 5</span>
              <span className={styles.techTag}>Electron Builder</span>
            </div>
            <a href="/proyectos/trivia" className={styles.viewProjectBtn}>
              Ver Proyecto
            </a>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <h2 className={styles.projectsTitle}>Proyectos</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <div className={styles.projectCardHeader}>
              <span className={styles.projectType}>Personal</span>
              <h3 className={styles.projectCardTitle}>Arithmetic Adventure</h3>
            </div>
            <p className={styles.projectDescription}>
              Juego creado en Python para la UTN (Universidad Tecnológica Nacional, Argentina), desarrollado con los temas aprendidos durante la cursada de Programación de la Tecnicatura Universitaria en Programación, siendo el único aprobado con la nota máxima (10).
            </p>
            <div className={styles.projectTech}>
              <span className={styles.techTag}>Python</span>
              <span className={styles.techTag}>Pygame</span>
              <span className={styles.techTag}>JSON</span>
              <span className={styles.techTag}>CSV</span>
            </div>
            <a href="https://github.com/sozarg/ArithmeticAdventure" className={styles.viewProjectBtn} target="_blank" rel="noreferrer">
              Ver Proyecto
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 