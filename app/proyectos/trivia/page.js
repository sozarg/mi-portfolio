import {
  ProjectLayout,
  Section,
  FunctionalityGrid,
  ChallengeSection,
  Metrics,
  LearningsAndStack
} from "../../components/proyectos";
import styles from "../proyecto.module.css";

export default function TriviaPage() {
  const projectData = {
    company: "Evento Presencial",
    title: "Aplicación de Trivia Interactiva Táctil",
    subtitle: "Desarrollador Frontend",
    purpose: "Trivia para pantallas verticales táctiles (kiosk) optimizada para eventos presenciales. Interfaz grande y legible, animaciones suaves y layout estable en resoluciones como 768×1366 y 1080×1920.",
    videoSrc: "/assets/trivia.webm",
    videoPoster: "/assets/trivia.webm"
  };

  // Funcionalidades específicas del proyecto Trivia
  const functionalities = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Pantalla de Inicio Llamativa",
      desc: "Título y subtítulo con tipografías grandes, animación sutil e indicación táctil para comenzar."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Interacción Táctil Completa",
      desc: "Botones y áreas 'tap-friendly' con tamaños generosos y feedback visual inmediato."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Ingreso de Edad con Teclado Numérico",
      desc: "Teclado on-screen de gran tamaño, validación básica y mensajes claros."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Preguntas con Texto o Imágenes",
      desc: "Soporte de layout 2×2 para opciones con imágenes y lista para opciones de texto; siempre legible en vertical."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Feedback en Tiempo Real",
      desc: "Animaciones para acierto/error, mensajes transitorios y transición a la siguiente pregunta."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Pantallas de Resultado y Reinicio",
      desc: "Cierre con mensaje/llamado a la acción y reinicio rápido para el siguiente participante."
    }
  ];

  // Desafíos específicos del proyecto Trivia
  const challengeProblem = [
    "Asegurar legibilidad y ergonomía táctil en pantallas verticales grandes; evitar 'overflow' en preguntas con imágenes (4 opciones 2×2) y mantener separación consistente con el logo.",
    "Soportar resoluciones específicas del evento (768×1366) sin que se rompa el diseño y garantizar que la interfaz sea completamente funcional en orientación vertical.",
    "Implementar un sistema de interacción táctil que proporcione feedback inmediato y mantenga la estabilidad del layout durante las transiciones entre pantallas."
  ];

  const challengeSolution = [
    "Diseño con CSS Grid/Flex y unidades relativas (vh/vw) combinado con límites y ajustes responsivos para pantallas verticales.",
    "Corrección del espaciado del logo/encabezado y garantía del grid 2×2 para respuestas con imágenes, optimizando para las resoluciones objetivo.",
    "Empaquetado con electron-builder para distribución sencilla y implementación de animaciones suaves que mantienen la estabilidad visual."
  ];

  // Métricas específicas del proyecto Trivia
  const metrics = [
    { value: "5000+", label: "participantes interactuaron" },
    { value: "0", label: "desbordes visuales" },
    { value: "Flujo", label: "'toque-y-juegue' estable" }
  ];

  // Aprendizajes específicos del proyecto Trivia
  const learnings = [
    "Probar temprano en la resolución real del hardware (p. ej., 768×1366) evita sorpresas",
    "Uso de unidades relativas y límites para escalar tipografías/espaciados sin romper el layout",
    "Ergonomía táctil: tamaños mínimos de toque, separación entre elementos y feedback inmediato",
    "Empaquetado con Electron Builder para entrega sin fricción",
    "Importancia de considerar la orientación vertical desde el diseño inicial",
    "Valor de las animaciones suaves para mantener la atención del usuario",
    "Necesidad de feedback visual inmediato en interfaces táctiles",
    "Relevancia de probar en el hardware real del evento antes del despliegue"
  ];

  // Stack específico del proyecto Trivia
  const stack = [
    { iconClass: "devicon-javascript-plain", label: "JavaScript" },
    { iconClass: "devicon-html5-plain", label: "HTML" },
    { iconClass: "devicon-css3-plain", label: "CSS" },
    { iconClass: "devicon-bootstrap-plain", label: "Bootstrap 5" },
    { iconClass: "devicon-electron-original", label: "Electron" },
    { iconClass: "devicon-electron-original", label: "Electron Builder" }
  ];

  return (
    <ProjectLayout 
      {...projectData} 
      videoVariant="compact"
      videoRate={0.45}
      
    >
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
        <a
          href="https://github.com/sozarg/trivia-electronjs"
          target="_blank"
          rel="noreferrer"
          className={styles.ctaButton}
        >
          Ver Código
        </a>
      </div>
    </ProjectLayout>
  );
}
