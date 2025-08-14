// Datos de placeholder para todos los proyectos
export const defaultFunctionalities = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Funcionalidad Principal",
    desc: "Descripción de la funcionalidad principal del proyecto y su impacto en el usuario final."
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Validación y Seguridad",
    desc: "Sistema robusto de validación que garantiza la integridad y seguridad de los datos."
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Rendimiento Optimizado",
    desc: "Arquitectura diseñada para maximizar el rendimiento y la escalabilidad del sistema."
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Interfaz Responsiva",
    desc: "Diseño adaptativo que proporciona una experiencia óptima en todos los dispositivos."
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Análisis y Reportes",
    desc: "Herramientas de análisis que proporcionan insights valiosos sobre el uso del sistema."
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Gestión de Usuarios",
    desc: "Sistema completo de gestión de usuarios con roles y permisos personalizables."
  }
];

export const defaultChallengeProblem = [
  "Se requería integrar múltiples sistemas complejos en una solución unificada que mantuviera la consistencia de datos y la experiencia del usuario.",
  "El proyecto enfrentaba desafíos de escalabilidad y rendimiento, necesitando manejar volúmenes de datos crecientes sin comprometer la velocidad de respuesta.",
  "Era crítico implementar un sistema robusto de validación y manejo de errores que previniera fallos y mantuviera la integridad de la información."
];

export const defaultChallengeSolution = [
  "Se implementó una arquitectura modular y escalable que permitió la integración fluida entre sistemas existentes, utilizando patrones de diseño modernos y tecnologías robustas.",
  "Se desarrolló un sistema de caché inteligente y optimización de consultas que mejoró significativamente el rendimiento y la capacidad de respuesta del sistema.",
  "Se estableció un framework completo de validación y manejo de errores que garantizó la estabilidad del sistema y proporcionó feedback claro a los usuarios."
];

export const defaultMetrics = [
  { value: "+10.000", label: "usuarios activos" },
  { value: "99.9%", label: "tiempo de actividad" },
  { value: "3 Semanas", label: "tiempo de desarrollo" }
];

export const defaultLearnings = [
  "Importancia de la planificación arquitectónica desde las primeras etapas del proyecto",
  "Valor de implementar pruebas automatizadas para garantizar la calidad del código",
  "Necesidad de documentación clara para facilitar el mantenimiento futuro",
  "Beneficios de la colaboración entre equipos de frontend y backend",
  "Relevancia de considerar la escalabilidad desde el diseño inicial",
  "Impacto positivo de la retroalimentación continua del usuario en el desarrollo"
];

export const defaultStack = [
  { iconClass: "devicon-nextjs-original-wordmark", label: "Next.js" },
  { iconClass: "devicon-react-original", label: "React" },
  { iconClass: "devicon-css3-plain", label: "CSS" },
  { iconClass: "devicon-fastapi-plain", label: "FastAPI" },
  { iconClass: "devicon-postman-plain", label: "Postman" },
  { iconClass: "devicon-gitlab-plain", label: "GitLab" }
];
