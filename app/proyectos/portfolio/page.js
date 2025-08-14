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

export default function PortfolioPage() {
  const projectData = {
    company: "Portfolio Personal",
    title: "Sitio Web Portfolio Profesional",
    subtitle: "Desarrollador Frontend (Next.js + CSS)",
    purpose: "Portfolio personal moderno y responsivo que muestra proyectos, habilidades técnicas y experiencia profesional de manera atractiva.",
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
