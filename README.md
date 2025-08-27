# TechMart — Electronics Storefront

TechMart is a modern e-commerce UI inspired by leading electronics retailers. It showcases a responsive storefront with a hero section, product highlights, search input, and a clean, accessible design.

Built with Next.js, TypeScript, and Tailwind CSS, following clean, production-ready code practices.

## Features

- Responsive layout with modern UI components
- Hero section and promotional banners
- Reusable UI primitives (e.g., input)
- Footer with helpful links and branding
- Type-safe codebase with ESLint + Prettier

## Tech Stack

- Next.js 13 (Pages Router)
- TypeScript
- Tailwind CSS (+ tailwind-merge, tailwindcss-animate)
- React 18
- Icons: lucide-react, react-icons
- UI utilities: clsx, class-variance-authority

## Project Structure

Key paths:

- `src/pages/` — application pages (Pages Router)
- `src/components/` — UI and layout components
  - `src/components/HeroSection.tsx`
  - `src/components/layouts/FooterSection.tsx`
  - `src/components/ui/input.tsx`
- `src/styles/globals.css` — Tailwind styles entry
- `tailwind.config.js` — Tailwind configuration
- `next.config.js` — Next.js configuration

## Getting Started

Prerequisites:

- Node.js 18+
- Yarn 1.x

Install dependencies:

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Open http://localhost:3000 to view the app.

Build for production:

```bash
yarn build
```

Start the production server:

```bash
yarn start
```

Run linting:

```bash
yarn lint
```

## Scripts

Defined in `package.json`:

- `dev` — start Next.js in development mode
- `build` — build the production bundle
- `start` — run the production server
- `lint` — run ESLint

## Styling

- Tailwind CSS is set up via `tailwind.config.js` and `postcss.config.js`.
- Global styles live in `src/styles/globals.css` and are loaded by `_app.tsx`.
- Prefer utility-first styling and composable components.

## Roadmap

- Product listing and detail pages
- Category navigation and filtering
- Cart and checkout flow (mock or real backend)
- Authentication and user profile
- CMS/product data integration

## Acknowledgements

- Inspired by popular electronics storefront patterns for layout and UX ideas.
- Built with Next.js, Tailwind CSS, and the React ecosystem.

## License

No license specified. Add a `LICENSE` file to define usage terms for this project.
