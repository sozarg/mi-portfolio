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

export default function TaskApiPage() {
  const projectData = {
    company: "Proyecto Personal",
    title: "API de Gestión de Tareas",
    subtitle: "Desarrollador Backend (Node.js + Express)",
    purpose: "API REST completa para la gestión de tareas y proyectos con autenticación JWT, base de datos y documentación automática.",
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
