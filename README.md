# Abdelhak Ajbouni Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/84436f14-5a0b-4c57-95d7-3cfae702e990/deploy-status)](https://app.netlify.com/sites/abdelhak-ajbouni/deploys)

A modern portfolio website built with [Astro](https://astro.build), React, TypeScript, and Tailwind CSS. Features a responsive design, 3D animations, and a working contact form.

## ✨ Features

- **Modern Stack**: Astro with React islands, TypeScript, and Tailwind CSS
- **Performance Optimized**: Server-side rendering with minimal JavaScript
- **Responsive Design**: Mobile-first approach with beautiful animations
- **3D Effects**: Interactive star field background using Three.js
- **Contact Form**: Working contact form with EmailJS integration
- **SEO Ready**: Optimized meta tags, sitemap, and Google Analytics

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- npm or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/abdelhak-ajbouni/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Edit `.env` with your EmailJS credentials:

- `PUBLIC_SERVICE_ID`: Your EmailJS service ID
- `PUBLIC_TEMPLATE_ID`: Your EmailJS template ID
- `PUBLIC_KEY`: Your EmailJS public key

Get these from [EmailJS Dashboard](https://www.emailjs.com/)

4. Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site.

## 🧞 Commands

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 🏗️ Project Structure

```
/
├── public/
│   ├── images/          # Static images
│   ├── files/           # Resume and documents
│   └── favicon.svg
├── src/
│   ├── components/      # Astro components
│   ├── islands/         # React components (client-side)
│   ├── layouts/         # Page layouts
│   ├── pages/           # File-based routing
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
└── tailwind.config.cjs  # Tailwind CSS configuration
```

## 🚀 Deployment

This site is configured for deployment on Netlify with server-side rendering.

### Netlify Deployment

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy!

### Environment Variables for Production

Make sure to set these in your deployment platform:

- `PUBLIC_SERVICE_ID`
- `PUBLIC_TEMPLATE_ID`
- `PUBLIC_KEY`

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **UI Library**: [React](https://reactjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **3D Graphics**: [Three.js](https://threejs.org) with [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Forms**: [React Hook Form](https://react-hook-form.com)
- **Email**: [EmailJS](https://www.emailjs.com)
- **Analytics**: Google Analytics with [Partytown](https://partytown.builder.io)
- **Deployment**: [Netlify](https://netlify.com)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👀 Want to learn more about Astro?

Feel free to check [Astro documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).
