# Test de Conexion Natural (ICN)

Auditoria de biofilia para espacios de oficina tradicionales.

Esta aplicacion web interactiva, desarrollada con React, TypeScript y Tailwind CSS, permite diagnosticar el nivel de conexion natural del cuerpo humano dentro de un puesto o centro de trabajo.

A traves de un cuestionario dinamico centrado en la experiencia del usuario, la herramienta calcula automaticamente el Indice de Conexion Natural (ICN), evaluando distintas dimensiones sensoriales biofilicas relevantes para entornos laborales.

## Caracteristicas principales

- **Evaluacion de 24 puntos:** analiza estimulos directos, indirectos y la experiencia general del entorno de trabajo conforme a principios de diseno biofilico.
- **Desglose sensorial dinamico:** muestra puntuaciones por dimensiones como impacto visual, sonido, olfato, confort termico y otras variables ambientales, con porcentajes e insignias de estado.
- **Acciones recomendadas inteligentes:** genera sugerencias concretas de mejora segun las respuestas obtenidas para transformar el espacio en un habitat de conexion activa.
- **Diseno limpio y agil:** utiliza una paleta natural inspirada en tonos tierra y verdes saludables, acompanada de transiciones fluidas en la experiencia de usuario.
- **Formato de impresion incorporado:** el reporte ejecutivo esta preparado para imprimir o guardar como PDF, ocultando elementos decorativos y generando una ficha corporativa clara para PRL o Recursos Humanos.
- **Privacidad total:** todo el procesamiento se realiza de forma local en el navegador, sin llamadas a APIs externas ni almacenamiento de datos personales en servidores.

## Tecnologias utilizadas

- **Vite:** entorno de desarrollo rapido y empaquetador para produccion.
- **React:** interfaz declarativa basada en componentes reutilizables.
- **TypeScript:** tipado estatico para mejorar la robustez del codigo.
- **Tailwind CSS v4:** utilidades de estilo modernas y adaptables.
- **Motion / Framer Motion:** animaciones suaves e interacciones visuales.
- **Lucide React:** iconografia vectorial limpia y consistente.

## Requisitos

- Node.js 20 o superior.
- npm.

## Instalacion local

Instala las dependencias del proyecto:

```bash
npm install
```

Ejecuta el entorno de desarrollo:

```bash
npm run dev
```

Compila la aplicacion para produccion:

```bash
npm run build
```

Previsualiza la build de produccion:

```bash
npm run preview
```

## Despliegue en GitHub Pages

El proyecto incluye un workflow de GitHub Actions en `.github/workflows/deploy.yml` para desplegar automaticamente la carpeta `dist` en GitHub Pages cuando se haga push a la rama `main`.

Antes de desplegar en otro repositorio, revisa el valor `base` en `vite.config.ts`:

```ts
base: '/test-conexion-natural/',
```

Debe coincidir con el nombre exacto del repositorio en GitHub, manteniendo la barra inicial y final.

## Privacidad

El test funciona completamente en el navegador. Las respuestas no se envian a servidores externos y no se almacenan de forma remota.
