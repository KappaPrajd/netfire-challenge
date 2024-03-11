# NetFire coding challenge - Tomasz Molski

This repository contains solution for coding challenge that is part of the interview process of NetFire.

## Running project locally

```code
git clone https://github.com/KappaPrajd/netfire-challenge.git
cd netfire-challenge
npm install
npm run dev
```

## Technologies used

- Framework - **React 18**
- Static typing - **Typescript**
- Build tool - **Vite**
- Compiler - **SWC**
- Hosting - **Github Pages**
- CI/CD - **Github Actions**
- Linter - **ESLint**
- Formatter - **Prettier**
- Icons library - **react-icons**
- Pre-commit hook - **Husky, lint-staged**

## Notes

- For CI/CD I have set up a simple pipeline that ensures the code is formatted accordingly to project config and it does not have any lint errors. If that's the case - it builds and deploys to Github Pages.
- Logo and background video is included in project files. For production I would consider using cloud storage/CDN/CMS depending on the use case. For bigger files I would look for Adaptive Bitrate Streaming solution.
- Project is using TS path aliases for cleaner imports.
