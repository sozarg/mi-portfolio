# Mi Portfolio

Un portfolio personal minimalista y elegante construido con Next.js 15+ y App Router, sin dependencias externas de UI.

## 🚀 Características

- **Next.js 15+** con App Router
- **JavaScript puro** (sin TypeScript)
- **CSS personalizado** (sin Tailwind)
- **Tema oscuro** con patrón de grilla y diagonales sutiles
- **Diseño responsive** optimizado para móvil y desktop
- **Avatar placeholder** incluido (fácil de reemplazar)

## 📁 Estructura del Proyecto

```
mi-portfolio/
├── app/
│   ├── layout.js          # Layout principal con metadatos
│   └── page.js            # Página principal del portfolio
├── styles/
│   ├── globals.css        # Estilos globales y variables CSS
│   └── home.module.css    # Estilos específicos de la página
├── public/
│   └── avatar.svg         # Avatar placeholder (reemplazar)
├── package.json
└── next.config.mjs
```

## 🛠️ Instalación

1. **Clonar o descargar** el proyecto
2. **Instalar dependencias:**
   ```bash
   npm install
   ```
3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```
4. **Abrir** [http://localhost:3000](http://localhost:3000)

## ✏️ Personalización

### 1. Avatar
- **Reemplazar:** `public/avatar.svg` con tu imagen
- **Formato:** JPG, PNG o SVG (recomendado: 200x200px)
- **Actualizar:** cambiar `src="/avatar.svg"` en `app/page.js`

### 2. Información Personal
**En `app/page.js`, editar:**

```javascript
// Nombre y badge
<h1 className={styles.name}>
  Tu Nombre <span className={styles.badge}>●</span>
</h1>

// Subtítulo
<p className={styles.subtitle}>
  Creating with code. Small details matter.
</p>

// Lista de información
<li>
  <span className={styles.icon}>{"</>"}</span>
  Senior Frontend Developer & UI Design Lead @Empresa
</li>
<li>
  <span className={styles.icon}>★</span>
  Founder @Proyecto
</li>
<li>
  <span className={styles.icon}>📍</span>
  Tu Ciudad, Tu País
</li>
<li>
  <span className={styles.icon}>✉️</span>
    tu-email@dominio.com
</li>
<li>
  <span className={styles.icon}>🌐</span>
  tunombre.com
</li>
<li>
  <span className={styles.icon}>👤</span>
  he/him
</li>

// Links sociales
<a className={styles.card} href="https://www.linkedin.com/in/tuusuario">
  <div className={styles.cardTitle}>LinkedIn</div>
  <div className={styles.cardSub}>@tuusuario</div>
</a>
```

### 3. Colores y Estilos
**En `styles/globals.css`, modificar variables CSS:**

```css
:root{
  --bg: #0b0b0c;           /* Fondo principal */
  --text: #e5e7eb;         /* Texto principal */
  --muted: #9ca3af;        /* Texto secundario */
  --card: #111213;          /* Fondo de tarjetas */
  --border: rgba(255,255,255,0.06); /* Bordes */
  --accent: #60a5fa;       /* Color de acento */
  --grid: rgba(255,255,255,0.04);   /* Patrón de grilla */
  --diag: rgba(255,255,255,0.03);   /* Patrón diagonal */
}
```

### 4. Metadatos
**En `app/layout.js`:**
```javascript
export const metadata = {
  title: "Tu Nombre - Portfolio",
  description: "Portfolio personal de desarrollo web",
};
```

## 🎨 Características de Diseño

- **Fondo oscuro** con patrón de grilla y diagonales sutiles
- **Tipografía del sistema** (no requiere fuentes externas)
- **Layout responsive** con máximo ancho de 1100px
- **Hover effects** en tarjetas sociales
- **Accesibilidad** con focus visible y aria-labels

## 📱 Responsive Design

- **Desktop:** Layout en grid con avatar a la izquierda
- **Mobile:** Layout vertical con avatar centrado
- **Breakpoint:** 720px para cambios de layout

## 🚀 Build y Deploy

```bash
# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

## 🔧 Tecnologías

- **Framework:** Next.js 15+
- **Lenguaje:** JavaScript (ES6+)
- **Estilos:** CSS Modules + CSS Variables
- **Routing:** App Router (nuevo en Next.js 13+)
- **Build:** Webpack 5 (incluido en Next.js)

## 📝 Notas

- No se incluyen librerías de UI externas
- CSS puro con variables CSS para fácil personalización
- Estructura modular y limpia
- Optimizado para SEO y performance

---

¡Listo para personalizar y deployar! 🎉 