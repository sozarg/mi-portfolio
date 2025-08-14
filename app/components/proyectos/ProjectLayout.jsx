import styles from "../../proyectos/proyecto.module.css";
import VideoPlayer from "./VideoPlayer";

export default function ProjectLayout({ 
  company, 
  title, 
  subtitle, 
  purpose, 
  videoSrc, 
  videoPoster, 
  children,
  videoVariant = "default",
  headerExtra = null,
  videoRate = 1
}) {
  const previewClass = `${styles.videoPreview} ${videoVariant === "compact" ? styles.videoPreviewCompact : ""}`;
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <a href="/" className={styles.backButton}>
          ← Volver al Portfolio
        </a>
        
        <div className={styles.projectHeader}>
          <div className={styles.projectTitleSection}>
            <span className={styles.companyName}>{company}</span>
            <h1 className={styles.projectTitle}>{title}</h1>
            <h2 className={styles.projectSubtitle}>{subtitle}</h2>
            <p className={styles.projectPurpose}>{purpose}</p>
          </div>
        </div>

        {headerExtra}

        {videoSrc && (
          <div className={previewClass}>
            <VideoPlayer
              className={styles.video}
              src={videoSrc}
              poster={videoPoster}
              playbackRate={videoRate}
            />
            <img 
              src={videoPoster} 
              alt="Preview del proyecto" 
              className={styles.poster}
            />
          </div>
        )}

        {children}
      </div>
    </main>
  );
}
