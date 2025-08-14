import {
  ProjectLayout,
  Section,
  FunctionalityGrid,
  ChallengeSection,
  Metrics,
  LearningsAndStack
} from "../../components/proyectos";
import {
  defaultFunctionalities,
  defaultChallengeProblem,
  defaultChallengeSolution,
  defaultMetrics,
  defaultLearnings,
  defaultStack
} from "../../components/proyectos/placeholderData";
import styles from "../proyecto.module.css";

export default function Detta3dPage() {
  const projectData = {
    company: "Detta 3D",
    title: "Plataforma de Visualización 3D",
    subtitle: "Desarrollador Frontend (Three.js + React)",
    purpose: "Sistema web para visualización y manipulación de modelos 3D con herramientas avanzadas de renderizado y exportación.",
    videoSrc: null,
    videoPoster: "/assets/placeholder-info.md"
  };

  return (
    <ProjectLayout {...projectData}>
      <Section variant="light" title="Funcionalidades">
        <FunctionalityGrid items={defaultFunctionalities} />
      </Section>

      <ChallengeSection 
        problem={defaultChallengeProblem}
        solution={defaultChallengeSolution}
      />

      <Metrics metrics={defaultMetrics} />

      <LearningsAndStack 
        learnings={defaultLearnings}
        stack={defaultStack}
      />

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <button className={styles.ctaButton} disabled>
          Ver Proyecto Completo
        </button>
      </div>
    </ProjectLayout>
  );
}
