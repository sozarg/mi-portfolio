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
    company: "Detta3D",
    title: "Sistema de Gestión de Pedidos 3D",
    subtitle: "Desarrollador Full Stack",
    purpose:
      "Plataforma integral para la gestión de pedidos personalizados de impresión 3D, diseñada para centralizar el flujo de trabajo y facilitar el control de producción y entrega.",
    videoSrc: null,
    videoPoster: null,
    headerExtra: (
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <button className={styles.projectLink} disabled>
          Demo no disponible
        </button>
      </div>
    )
  };

  const functionalities = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7h18M3 12h12M3 17h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 16l3 3m0 0l3-3m-3 3V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Creación de pedidos",
      desc: "Alta de pedidos con cliente, producto, precio, método de pago, entrega y notas."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Edición rápida",
      desc: "Modificación en línea con guardado instantáneo."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Pedidos en curso",
      desc: "Listado principal ordenado por fecha para el trabajo diario."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 21H5a2 2 0 01-2-2V7h18v12a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Histórico de pedidos",
      desc: "Registro de pedidos completados para trazabilidad."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 6v12M15 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Interfaz responsiva",
      desc: "Acceso óptimo desde cualquier dispositivo."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 10h10M7 14h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2v4m0 12v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Integración con Xata",
      desc: "Persistencia segura y confiable en la nube."
    }
  ];

  const challengeProblem = [
    "Cambios en pedidos no reflejados de forma inmediata.",
    "Lentitud en la carga inicial."
  ];

  const challengeSolution = [
    "Implementación de actualización optimista y confirmación en backend.",
    "Optimización de consultas y paginación."
  ];

  const metrics = [
    { value: "+170", label: "clientes registrados" },
    { value: "100%", label: "tiempo ahorrado" },
    { value: "Control total", label: "de producción y entregas" }
  ];

  const learnings = [
    "Importancia de planificar la estructura de datos desde el inicio.",
    "Beneficios de trabajar con un stack moderno y modular.",
    "Autogestión para cumplir objetivos en plazos establecidos.",
    "Configuración eficiente de entornos en Render.",
    "Integración fluida de Xata con el backend para reducir complejidad."
  ];

  const stack = [
    { iconClass: "devicon-react-original", label: "React" },
    { iconClass: "devicon-bootstrap-plain", label: "React-Bootstrap" },
    { iconClass: "devicon-fastapi-plain", label: "FastAPI" },
    { label: "Xata" },
    { label: "Render" },
    { iconClass: "devicon-postman-plain", label: "Postman" }
  ];

  return (
    <ProjectLayout {...projectData}>
      <Section variant="light" title="Funcionalidades">
        <FunctionalityGrid items={functionalities} />
      </Section>

      <ChallengeSection 
        problem={challengeProblem}
        solution={challengeSolution}
      />

      <Metrics metrics={metrics} />

      <LearningsAndStack 
        learnings={learnings}
        stack={stack}
      />

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <button className={styles.ctaButton} disabled>
          Ver Proyecto Completo
        </button>
      </div>
    </ProjectLayout>
  );
}
