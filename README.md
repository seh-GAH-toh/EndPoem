[![Website](.github/assets/banner.svg)](https://www.theendpoem.com)
[![Uptime](https://img.shields.io/website?url=https%3A%2F%2Fwww.theendpoem.com)](https://img.shields.io/website?url=https%3A%2F%2Fwww.theendpoem.com)
[![HSTS Status](https://img.shields.io/hsts/preload/theendpoem.com)](https://img.shields.io/hsts/preload/theendpoem.com)
[![Mozilla HTTP Observatory](https://img.shields.io/mozilla-observatory/grade/www.theendpoem.com?publish)](https://img.shields.io/mozilla-observatory/grade/www.theendpoem.com?publish)
[![Vercel Production Deployment](https://github.com/ArthurSegato/EndPoem/actions/workflows/deploy-production.yaml/badge.svg)](https://github.com/ArthurSegato/EndPoem/actions/workflows/deploy-production.yaml)
[![Vercel Preview Deployment](https://github.com/ArthurSegato/EndPoem/actions/workflows/deploy-preview.yaml/badge.svg)](https://github.com/ArthurSegato/EndPoem/actions/workflows/deploy-preview.yaml)

The End Poem is a freehand poem written by musician Julian Gough that appears when the player finishes minecraft, before the credits. It has been in the public domain, under the CC0 1.0 Universal (CC0 1.0) Public Domain Dedication, since 2022.

## Getting Started

These instructions will give you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push.

- [Bun v1.1.8](https://bun.sh/) or above

Environment variables required to run this project:

```Properties
WEBHOOK_DISCORD=""
```

### Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## Deployment

This project is automatically deployed on the Vercel Edge network. However, if it is necessary to deploy it in another environment, adjust or completely remove, the Nitro preset configuration on `nuxt.config.ts`, based on the deployment environment you intend to use.

```Javascript
nitro: {
  /* Preset for vercel */
  preset: "vercel-edge",
},
```

Refer to the [deployment page](https://nuxt.com/docs/getting-started/deployment) in the Nuxt 3 documentation for guidance.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **Julian Gough** - Author of the End Poem - [juliangough.com](https://www.juliangough.com/)
- **Arthur Segato** - Author of this project - [seh-GAH-toh](https://github.com/seh-GAH-toh)

See also the list of [contributors](https://github.com/seh-GAH-toh/EndPoem) who participated in this project.

## License

This project is licensed under the [MIT](LICENSE) License - see the [LICENSE.md](LICENSE) file for details.

## Acknowledgments

### External Assets

Below is a list of all the external assets used in the development of this website with their respective licenses.

- [BootStrapp Icons](https://icons.getbootstrap.com) ([MIT](https://github.com/twbs/icons/blob/main/LICENSE.md))
- [Animista](https://animista.net) ([FreeBSD](https://animista.net/license))
- [Nothing You Could Do](https://fonts.google.com/specimen/Nothing+You+Could+Do) ([Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL))
- [Open Sans](https://fonts.google.com/specimen/Open+Sans) ([Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL))
- [Menu Button](https://codepen.io/himalayasingh/pen/KOdJPM) (?)

### Data protection legislations (GDPR, LGPD and others)

By acessing theendpoem.com, there is one occasion where user data is collected, it happens when the user inputs any text into the name field and submit it. In this case, the content entered into "name" field is directly sent to a text channel on my personal Discord server, **accessible only by me** (as illustrated below), via a webhook.

![My Discord private server](.github/assets/discord.jpg "My Discord private server")

**If the user wishes to delete their name, they can simply reach out to me through any available channel on my GitHub profile or [personal website](https://www.arthursegato.dev/)**.

### Special Thanks

To all those who generously donated and supported me in sustaining this project:

- [Laura Newman](https://lauranewman.com/pages/index.php), for helping with the project costs.
- [Eric Schneider](https://github.com/ericschn), for fixing my spelling mistakes.
- [Ria](https://github.com/MYSan7), for fixing my coloring mistakes.
