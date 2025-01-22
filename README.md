# React Native Product Challenge

## Overview

This project is a mobile app product search catalog designed as part of the a recruitment process. It aggregates products into categories, allowing users to search, view results, and manage search history. The app demonstrates skills in React Native, TypeScript, API integration, and clean code practices.

## Features

- Fetch and display products and categories from FakeStoreAPI.
- Map API categories to UI-specific categories.
- Persist user search history locally.
- Dynamically filter and display search results for products and categories.
- Optimized user interface with React Native.
- Integration of animations and transitions (optional).

## ⭐ Key Features / Technologies Used

- ✅ Latest Expo SDK with Custom Dev Client: Leverage the best of the Expo ecosystem while maintaining full control over your app.
- 🎉 [TypeScript](https://www.typescriptlang.org/) for enhanced code quality and bug prevention through static type checking.
- 💅 Minimal UI kit built with [TailwindCSS](https://www.nativewind.dev/), featuring common components essential for your app.
- ⚙️ Multi-environment build support (Production, Staging, Development) using Expo configuration.
- 🦊 Husky for Git Hooks: Automate your git hooks and enforce code standards.
- 💡 Clean project structure with Absolute Imports for easier code navigation and management.
- 🚫 Lint-staged: Run Eslint and TypeScript checks on Git staged files to maintain code quality.
- 🗂 VSCode recommended extensions, settings, and snippets for an enhanced developer experience.
- ☂️ Pre-installed [Expo Router](https://docs.expo.dev/router/introduction/) with examples for comprehensive app navigation.
- 💫 Auth flow implementation using [Zustand](https://github.com/pmndrs/zustand) for state management and [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) for secure data storage.
- 🛠 10+ [Github Actions](https://github.com/features/actions) workflows for building, releasing, testing, and distributing your app.
- 🔥 [React Query](https://react-query.tanstack.com/) and [axios](https://github.com/axios/axios) for efficient data fetching and state management.
- 🧵 Robust form handling with [react-hook-form](https://react-hook-form.com/) and [zod](https://github.com/colinhacks/zod) for validation, plus keyboard handling.
- 🎯 Localization support with [i18next](https://www.i18next.com/), including Eslint for validation.
- 🧪 Unit testing setup with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
- 🔍 E2E testing capabilities with [Maestro](https://maestro.mobile.dev/) for comprehensive app testing.

## Requirements

- [React Native dev environment ](https://reactnative.dev/docs/environment-setup)
- [Node.js LTS release](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall), required only for macOS or Linux users
- [Pnpm](https://pnpm.io/installation)
- [VS Code Editor](https://code.visualstudio.com/download) ⚠️ Make sure to install all recommended extension from `.vscode/extensions.json`

## 👋 Quick start

Clone the repo to your machine and install deps :

```sh
git clone https://github.com/<your-username>/react-native-ecomm-merchant-starter

cd ./react-native-ecomm-merchant-starter

pnpm install
```

To run the app on ios

```sh
pnpm ios
```

To run the app on Android

```sh
pnpm android
```

## API Integration

The app uses the FakeStoreAPI for fetching products and categories. The categories provided by the API are mapped to the following UI-specific categories:

API Category |	UI Category
- electronics  |  Fresh Food & Vegetables
- jewelery  |	Dairy & Eggs
- men's clothing  |	Bakery
- women's clothing  |	Meat

## Features Implementation

1. Display Categories and Products

On loading the app:
- Fetch all categories and products from the API.
- Display categories with their associated design (per Figma).

2. Search Functionality

- Users can search for products and categories by keywords.
- Search results display both products and categories matching the query.

3. Persistent Search History

- Store user search history locally using MMKV.
- Limit history to the last 10 searches.

4. User Interface

- Designed per the Figma guidelines.
- Added personal enhancements for improved UX.

## How to Use

1. Launch the app.
2. View the categories and products on the home screen.
3. Use the search bar to find specific items.
4. Navigate between tabs for additional functionality (optional demo of blank pages).


### Code Structure

```bash
.
├── README.md
├── __mocks__
│   ├── @gorhom
│   │   └── bottom-sheet.ts
│   ├── moti.ts
│   ├── react-native-gesture-handler.ts
│   └── react-native-keyboard-controller.ts
├── app.config.ts
├── assets
│   ├── adaptive-icon.png
│   ├── bakery.png
│   ├── favicon.png
│   ├── fonts
│   │   └── Inter.ttf
│   ├── fruits.png
│   ├── icon.png
│   ├── meat.png
│   ├── oil.png
│   └── splash-icon.png
├── babel.config.js
├── commitlint.config.js
├── eas.json
├── env.js
├── expo-env.d.ts
├── global.css
├── jest-setup.ts
├── jest.config.js
├── lint-staged.config.js
├── metro.config.js
├── nativewind-env.d.ts
├── package.json
├── pnpm-lock.yaml
├── scripts
│   ├── genrate-apk-and-install
│   └── i18next-syntax-validation.js
├── src
│   ├── api
│   │   ├── categories
│   │   │   ├── index.ts
│   │   │   ├── types.ts
│   │   │   └── use-categories.ts
│   │   ├── common
│   │   │   ├── api-provider.tsx
│   │   │   ├── client.tsx
│   │   │   ├── index.tsx
│   │   │   └── utils.tsx
│   │   ├── index.tsx
│   │   ├── posts
│   │   │   ├── index.ts
│   │   │   ├── types.ts
│   │   │   ├── use-add-post.ts
│   │   │   ├── use-post.ts
│   │   │   └── use-posts.ts
│   │   ├── products
│   │   │   ├── index.ts
│   │   │   ├── types.ts
│   │   │   └── use-products.ts
│   │   └── types.ts
│   ├── app
│   │   ├── (app)
│   │   │   ├── _layout.tsx
│   │   │   ├── index.tsx
│   │   │   ├── order.tsx
│   │   │   ├── profile.tsx
│   │   │   ├── search.tsx
│   │   │   └── trends.tsx
│   │   ├── +html.tsx
│   │   ├── [...messing].tsx
│   │   └── _layout.tsx
│   ├── components
│   │   ├── search
│   │   │   ├── category-card.tsx
│   │   │   └── product-card.tsx
│   │   ├── settings
│   │   │   ├── item.tsx
│   │   │   ├── items-container.tsx
│   │   │   ├── language-item.tsx
│   │   │   └── theme-item.tsx
│   │   └── ui
│   │       ├── button.test.tsx
│   │       ├── button.tsx
│   │       ├── checkbox.test.tsx
│   │       ├── checkbox.tsx
│   │       ├── colors.js
│   │       ├── focus-aware-status-bar.tsx
│   │       ├── icons
│   │       │   ├── add.tsx
│   │       │   ├── arrow-right.tsx
│   │       │   ├── caret-down.tsx
│   │       │   ├── feed.tsx
│   │       │   ├── filter.tsx
│   │       │   ├── github.tsx
│   │       │   ├── home.tsx
│   │       │   ├── index.tsx
│   │       │   ├── input-search.tsx
│   │       │   ├── language.tsx
│   │       │   ├── order.tsx
│   │       │   ├── profile.tsx
│   │       │   ├── rate.tsx
│   │       │   ├── search.tsx
│   │       │   ├── settings.tsx
│   │       │   ├── share.tsx
│   │       │   ├── style.tsx
│   │       │   ├── support.tsx
│   │       │   ├── trends.tsx
│   │       │   └── website.tsx
│   │       ├── image.tsx
│   │       ├── index.tsx
│   │       ├── input.test.tsx
│   │       ├── input.tsx
│   │       ├── list.tsx
│   │       ├── modal-keyboard-aware-scroll-view.tsx
│   │       ├── modal.tsx
│   │       ├── progress-bar.tsx
│   │       ├── select.test.tsx
│   │       ├── select.tsx
│   │       ├── text.tsx
│   │       └── utils.tsx
│   ├── lib
│   │   ├── auth
│   │   │   ├── index.tsx
│   │   │   └── utils.tsx
│   │   ├── env.js
│   │   ├── hooks
│   │   │   ├── index.tsx
│   │   │   └── use-selected-theme.tsx
│   │   ├── i18n
│   │   │   ├── index.tsx
│   │   │   ├── react-i18next.d.ts
│   │   │   ├── resources.ts
│   │   │   ├── types.ts
│   │   │   └── utils.tsx
│   │   ├── index.tsx
│   │   ├── storage.tsx
│   │   ├── store
│   │   │   └── search.ts
│   │   ├── test-utils.tsx
│   │   ├── use-theme-config.tsx
│   │   └── utils.ts
│   ├── translations
│   │   ├── ar.json
│   │   └── en.json
│   └── types
│       └── index.ts
├── tailwind.config.js
└── tsconfig.json
```

### Core Packages

- [Expo](https://docs.expo.io/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Nativewind](https://www.nativewind.dev/v4/overview)
- [Flash list](https://github.com/Shopify/flash-list)
- [React Query](https://tanstack.com/query/v4)
- [Axios](https://axios-http.com/docs/intro)
- [React Hook Form](https://react-hook-form.com/)
- [i18next](https://www.i18next.com/)
- [zustand](https://github.com/pmndrs/zustand)
- [React Native MMKV](https://github.com/mrousavy/react-native-mmkv)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/)
- [React Native Svg](https://github.com/software-mansion/react-native-svg)
- [React Error Boundaries](https://github.com/bvaughn/react-error-boundary)
- [Expo Image](https://docs.expo.dev/versions/unversioned/sdk/image/)
- [React Native Keyboard Controller](https://github.com/kirillzyusko/react-native-keyboard-controller)
- [Moti](https://moti.fyi/)
- [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)
- [React Native Screens](https://github.com/software-mansion/react-native-screens)
- [Tailwind Variants](https://www.tailwind-variants.org/)
- [Zod](https://zod.dev/)

## Release Files

Download the release files:
- APK
- IPA

## Testing

- Tested on both Android and iOS emulators.
- Verified API integration and local storage functionality.
- Ensured UI consistency with Figma designs.

## Submission

Code is hosted on GitHub at: GitHub Repository.
Release files are available on the repository under GitHub releases.

## Contact

For further questions or clarifications, contact:
- Email: abubakaryinka75@gmail.com
