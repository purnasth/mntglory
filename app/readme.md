## This is a documentation file for the "Mount Glory" project.

## Project Description

- Mount Glory School is a school website that provides information about the school, its programs, and its faculty. It also allows users to contact the school.

## Technologies Used

- The project is built using the following technologies:
  - Vite + React
  - TypeScript
  - Tailwind CSS
  - Axios
  - React Router
  - React Icons
  - React Toastify
  - Yup
  - React Hook Form
  - Google reCAPTCHA
  - Swiper
  - Lightgallery
  - Anime.js
  - Prettier Tailwind Formatter

## Fonts Used

- The project uses the following fonts:
  - Chaviera - Heading
  - Bricolage Grotesque - Body

## Installation

- To install the project, follow these steps:

### 1. Clone the repository

```bash
git clone
```

### 2. Install the dependencies

```bash
pnpm install
```

### 3. Start the development server

```bash
pnpm run dev
```

### 4. Build the project

- Build the project using the following command:

```bash
pnpm vite build
```

### 5. For production build testing

- To test the production build, run the following command:

```bash
pnpm vite preview
```

## Environment Variables

- The project uses the following environment variables:

### 1. VITE_APP_API_URL

- This variable is used to specify the URL of the backend API. It is used to make API requests in the project.

### 2. VITE_RECAPTCHA_SITE_KEY

- This variable is used to specify the site key for Google reCAPTCHA. It is used to add reCAPTCHA to forms for spam protection.

### 3. VITE_RECAPTCHA_SECRET_KEY

- This variable is used to specify the secret key for Google reCAPTCHA. It is used to verify reCAPTCHA responses on the backend.

## pnpm Packages Used

### 1. pnpm i react-router-dom

- This package is used to handle the routing in the project. It is used to navigate between different components in the project.

### 2. pnpm i react-icons

- This package is used to add icons to the project. It provides a wide range of icons to choose from.

### 3. pnpm i axios

- This package is used to make API requests in the project. It is used to fetch data from the backend server.

### 4. pnpm i react-toastify

- This package is used to display toast notifications in the project. It provides a simple way to show notifications to the user.

### 5. pnpm i yup

- This package is used for form validation in the project. It provides a simple way to validate form inputs.

### 6. pnpm i react-hook-form

- This package is used to handle form inputs in the project. It provides a simple way to manage form state and validation.

### 7. pnpm i @types/react-google-recaptcha

- This package is used to add Google reCAPTCHA to the project. It provides a way to add reCAPTCHA to forms for spam protection.

### 8. pnpm i swiper

- This package is used to create sliders in the project. It provides a simple way to create responsive sliders.

### 9. pnpm i lightgallery

- This package is used to create image galleries in the project. It provides a simple way to create responsive image galleries.

### 10. pnpm i @types/animejs

- This package is used to create animations in the project. It provides a simple way to create animations.

### 11. pnpm i prettier-plugin-tailwind

- This package is used to format Tailwind CSS classes in the project. It provides a simple way to format Tailwind CSS classes.

### 12. pnpm i lenis

- This package is used to have a smooth scroll effect in the project. It provides a simple way to have a smooth scroll effect.

### 13. pnpm i @tanstack/react-query

- This package is a powerful data fetching library for React. It provides a simple and flexible way to fetch, cache, and update data in the project.

## File Structure

- The project is structured as follows:

```plaintext
📂 mntglory
├── 📂 public
│   ├── favicon.ico
│   ├── robots.txt
│   └── index.html
├── 📂 src
│   ├── 📂 assets
│   │   └── 📂 [folders]
│   ├── 📂 components
│   │   ├── 📂 ui
│   │   └── [Other Components]
|   ├── 📂 constants
│   │   └── data.ts
|   ├── 📂 layouts
│   │   └── [Layout Components]
│   ├── 📂 hooks
│   │   └── useCustomHook.ts
│   ├── 📂 pages
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── 📂 utils
│   │   ├── api.ts
│   │   └── RouterToTop.ts
│   ├── App.tsx
│   ├── global.d.ts
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── index.css
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslintrc.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```