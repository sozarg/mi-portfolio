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

export default function DashboardAnalyticsPage() {
  const projectData = {
    company: "Empresa de Tecnología",
    title: "Dashboard de Analytics y Métricas",
    subtitle: "Desarrollador Full Stack (React + Backend)",
    purpose: "Plataforma integral de análisis de datos que proporciona insights en tiempo real para la toma de decisiones empresariales.",
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
