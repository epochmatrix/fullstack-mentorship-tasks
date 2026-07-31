# Student Directory UI 🎓

A modern, responsive, and strictly-typed React student directory web application built using **React 19**, **Vite 8**, **TypeScript 6**, and **Tailwind CSS v4**. This project transforms a command-line interface (CLI) logic into a highly polished User Interface (UI).

## 🚀 Key Improvements & Refactoring (Mentor Review Changes)

Based on professional code review and feedback, the following modern architecture patterns were implemented:

1. **Component Separation & Clean Code**: Refactored the app to split the UI into modular, reusable components (`StudentCard.tsx` and `App.tsx`).
2. **TypeScript Props Protection & Strict Typing**: Defined explicit types inside a standalone file (`student.types.ts`). Handled strict module guidelines (`verbatimModuleSyntax`) using type-only imports (`import { type Student }`).
3. **Data Isolation (Constants Separation)**: Moved the mock student array entirely out of `App.tsx` into a dedicated configuration file (`student.data.ts`) to ensure clean state and view separation.
4. **Clean Code with Spread Operator**: Replaced repetitive prop drilling with the JavaScript Spread Operator (`{...student}`) to dynamically inject props in a highly clean and scalable manner.
5. **Responsive Grid Design**: Upgraded layouts using Tailwind CSS utility classes (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) to support mobile, tablet, and desktop screens natively.
6. **Smart Fallback Avatars**: Added network fallback configurations using React's `onError` tag to load unique text-initial dynamically if a custom Pinterest or hosted image URL breaks.

---

## 🛠️ Built With

*   **React 19** - Component-based UI Architecture
*   **Vite 8** - Ultra-fast Build Tooling & Development Server
*   **TypeScript 6** - Type-safe Scalability
*   **Tailwind CSS v4** - Modern PostCSS Utility Utility Styling

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── StudentCard.tsx     # Presentation Card with hover effects & profile imagery
│   ├── student.data.ts     # Centralized student dataset array (Constants)
│   └── student.types.ts    # Centralized strict TypeScript interfaces
├── App.tsx                 # Main layout controller and grid compiler
├── main.tsx                # Application mounting entry point
└── index.css               # Global Tailwind CSS configurations (@import "tailwindcss")
```

---

## 💻 Getting Started

Follow these steps to run the application locally:

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the local development server:
   ```bash
   npm run dev
   ```
