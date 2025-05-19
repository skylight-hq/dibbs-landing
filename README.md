# dibbs-landing
NextJS application for the dibbs landing page. This project builds into a static site.

## Getting Started
This site (currently just one page) is implemented with the NextJS framework. Pages were built using `@uswds/uswds` and `@trussworks/react-uswds`. The USWDS settings have been adjusted with the DIBBs design system palette.

You will need `node v20+` installed.

## Local development

Start the application in watch mode and hot reload with command:

`npm run dev`

Application will be available in `http://localhost:3000`.

### pre-commit hook

This project uses `lefthook` to trigger linting fixes on commit. As part of the local development setup install [lefthook](https://lefthook.dev/installation/index.html) in your local and run below command at the root:

`lefthook install`

## Prod deployment

To obtain the static assets run command:

`npm run build`

Assets will be available in the `out` folder at the root of the project. To see how the static assets look like install [http-server](https://www.npmjs.com/package/http-server) and run command:

`http-server out`

Application will be available in `http://localhost:8080`.