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

export default function DiaNinoPage() {
  // Datos específicos del proyecto Día del Niño
  const projectData = {
    company: "Municipalidad de Avellaneda",
    title: "Sistema de Inscripción y Administración de Sorteos",
    subtitle: "Desarrollador Frontend (integración con APIs REST)",
    purpose: "Plataforma integral para la gestión de inscripciones y sorteos del evento Día del Niño, con capacidad para manejar miles de registros en tiempo real.",
    videoSrc: "/assets/infancias.webm",
    videoPoster: "/assets/infancias.webm"
  };

  // Funcionalidades específicas del proyecto
  const functionalities = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Registro de Usuarios",
      desc: "Sistema de inscripción simplificado que permite a los usuarios registrarse en menos de 1 minuto con validación en tiempo real."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Validación de Datos",
      desc: "Verificación automática de información con alertas inmediatas para corregir errores antes del envío."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Publicación de Ganadores",
      desc: "Sistema automático de selección y publicación de ganadores con notificaciones en tiempo real."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Panel de Control",
      desc: "Interfaz administrativa para organizadores con monitoreo en tiempo real de inscripciones y estadísticas."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Reportes y Estadísticas",
      desc: "Generación automática de reportes con métricas de participación y análisis de tendencias."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Seguridad y Privacidad",
      desc: "Protección de datos personales con encriptación y cumplimiento de normativas de privacidad."
    }
  ];

  // Desafíos específicos del proyecto
  const challengeProblem = [
    "Se requería integrar en un solo flujo el registro de usuarios, la validación de datos y la publicación de ganadores.",
    "El sistema debía proporcionar información en tiempo real y control interno para los organizadores del evento.",
    "El reto principal era garantizar la integridad de los datos, evitar errores en la carga de información y asegurar el funcionamiento estable durante toda la jornada."
  ];

  const challengeSolution = [
    "Se implementó una arquitectura unificada que permitió la comunicación fluida entre todos los módulos del sistema, incorporando validaciones automáticas para garantizar la calidad de los datos.",
    "Se desarrolló un panel de control en tiempo real para el seguimiento de inscripciones y ganadores, optimizando la gestión y reduciendo significativamente los tiempos de respuesta.",
    "Se estableció un proceso de despliegue seguro: cada cambio se probaba en preproducción, se verificaba su funcionamiento y luego se publicaba en producción sin afectar el servicio."
  ];

  // Métricas específicas del proyecto
  const metrics = [
    { value: "+10.000", label: "registros gestionados" },
    { value: "100%", label: "servicio continuo" },
    { value: "2 Semanas", label: "registro activo" }
  ];

  // Aprendizajes específicos del proyecto
  const learnings = [
    "Importancia de la escalabilidad en sistemas de alta concurrencia",
    "Valor de implementar validaciones robustas desde el inicio",
    "Necesidad de monitoreo en tiempo real para eventos masivos",
    "Integración eficiente con APIs externas mediante Postman y pruebas automatizadas",
    "Trabajo colaborativo y control de versiones con GitLab",
    "Manejo de entornos de desarrollo, preproducción y producción",
    "Optimización de rendimiento en interfaces React/Next.js",
    "Uso de componentes reutilizables y escalables en front-end"
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
