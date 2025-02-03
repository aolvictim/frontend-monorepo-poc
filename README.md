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

