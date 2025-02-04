# Frontend Monorepo Proof of Concept

Provides a skeleton for managing frontend projects with a monorepo while working out the details.

## Objectives

- [X] Project structure. How modules are organized.
- [X] Excactly what tools to use to manage the monorepo. We use Turborepo
- [X] Reusable shared components.
- [X] Allow both React app and SveletKit app to be composed into a Shell App.
- [ ] CI/CD Pipeline:
  - [ ] Deploy to multiple environments (test, staging, prod, etc.)
  - [ ] ~~Each app has own AWS stack and can be deployed independently.~~
  - [X] Incremental build. Only those changed are rebuild.

## Apps and Packages

- `apps/shell-app`: a svelte-kit app that holds the menu and the main content area. It links to `svelte-app` and `react-app`.
- `apps/svelte-app`: a svelte-kit app
- `apps/react-app`: a react app
- `pacakges/svelte-components`: a Svelte component library used by both `svelte-app` and `shell-app`
- `pacakges/react-components`: a React component library used by `react-app`
- `pacakges/eslint-config`: Shared`eslint` configurations (includes `eslint-plugin-svelte` and `eslint-config-prettier`)
- `pacakges/typescript-config`: Shared `typescript` configurations

## Running Locally
In project root
```bash
npm install
npm run dev
```
Open the `shell-app` url in browser.

