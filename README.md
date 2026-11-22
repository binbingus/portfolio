# Portfolio · Olga Alonso Grela

Portfolio personal hecho con **React + TypeScript + Vite**.

## Estructura

```
src/
├── data/          # Aquí está TODO el contenido (textos, proyectos, estudios)
│   ├── profile.ts
│   ├── projects.ts
│   └── education.ts
├── components/    # Un componente por sección, cada uno con su CSS Module
├── styles/        # Variables de diseño (colores, fuentes) y estilos globales
├── assets/img/    # Imágenes (Vite las optimiza al compilar)
├── App.tsx
└── main.tsx
```

Para añadir un proyecto basta con añadir un objeto en `src/data/projects.ts`;
no hace falta tocar ningún componente. Los colores y fuentes se cambian en
`src/styles/tokens.css`.

## Uso en local

```bash
npm install
npm run dev        # servidor de desarrollo
npm run build      # genera la carpeta dist/
npm run preview    # prueba el build
```

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica la web cada vez
que haces push a `main`. Solo hay que activarlo una vez:

1. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Haz push a `main`.
