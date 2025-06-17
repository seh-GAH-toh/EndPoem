## Getting Started

These instructions will give you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Requirements for the software and other tools to build, test and push.

- [Bun v1.2.16](https://bun.sh/) or above

Environment variables required to run this project:

```Properties
NAME_WEBHOOK=""
EMAIL_WEBHOOK=""
```

### Setup

Make sure to install the dependencies:

```bash
bun install
```

### Development

Start the development server on: `http://localhost:5173`

```bash
bun dev
```

### Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```

### Project structure

```bash
EndPoem/
├── src
│   ├── app.css # Tailwind and animations
│   ├── app.html # Page root
│   ├── lib
│   │   ├── components # Client side stuff
│   │   ├── server # Server side assets
│   │   └── states # A.k.a global variables
│   └── routes
│       ├── api # API endpoints
│       ├── +error.svelte # Error page
│       ├── +layout.svelte
│       └── +page.svelte
└─ static # Icons, Fonts, Images
```

## Deployment

This project is automatically deployed to Cloudflare Pages through [CI/CD pipelines](https://github.com/seh-GAH-toh/EndPoem/tree/main/.github/workflows). However, if deployment to a different environment is required, you will need to update the SvelteKIt adapter.

Refer to the [Deployments](https://svelte.dev/docs/kit/adapter-auto) page in the SvelteKit documentation for guidance.