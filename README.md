# Frontend Monorepo Proof of Concept

Provides a skeleton for managing frontend projects with a monorepo while working out the details. 

## Objectives
- Project structure. How modules are organized.
- Excactly what tools to use to manage the monorepo.
- Reusable shared components.
- Allow both React app and SveletKit app to be composed into a Shell App.
- CI/CD Pipeline:
    - Deploy to multiple environments (test, staging, prod, etc.)
    - Each app has own AWS stack and can be deployed independently.
    - Incremental build. Only those changed are rebuild.

## Apps and Packages

- `sk-app`: a [svelte-kit](https://kit.svelte.dev/) app
- `ui-sk`: a stub Svelte component library used by `sk-app`
- `eslint-config-custom`: `eslint` configurations (includes `eslint-plugin-svelte` and `eslint-config-prettier`)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
