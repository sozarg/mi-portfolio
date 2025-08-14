import "./globals.css";
import "../styles/background.css";

export const metadata = {
  title: "Portfolio",
  description: "Personal site",
  charset: "utf-8",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
} 