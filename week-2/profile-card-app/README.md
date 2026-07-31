# Team Profile Directory App 📇

A highly polished, fully responsive, and strictly-typed React profile directory application built using **React 19**, **Vite 8**, **TypeScript 6**, and **Tailwind CSS v4**. This application showcases advanced component reuse, strict prop configuration, and smart runtime dataset validation.

## 🚀 Key Architectural Highlights & Engineering Solutions

1. **Component Separation & Single Responsibility**: The core layout is elegantly distributed between `App.tsx` (the orchestrator and validator) and `ProfileCard.tsx` (the clean presentation layer).
2. **Strict Custom Data-Contracts**: Scalable application logic bound seamlessly to explicit TypeScript interfaces declared externally in `types/user.types.ts`.
3. **Robust Data Deduplication Logic**: Implemented an automated pre-render pipeline inside `App.tsx` utilizing high-performance Javascript `Set()` structures to capture and remove overlapping student database values (`id` and `socials.github` links), blocking collision issues natively.
4. **Smart Network Image Resilience**: Engineered failure-safe image rendering logic on raw `<img>` components using native React `onError` hooks. If a remote hosted asset link breaks, it seamlessly hot-swaps to dynamic placeholder text-initials via Dicebear APIs.
5. **Modern Fluid Responsive Grids**: Constructed a fully dynamic viewing pane using custom Tailwind columns (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) with strict layout bounds (`justify-items-center`) to deliver uniform centering from 320px mobile viewports up to wide screens.
6. **Polished Corporate Recognition Header & Footers**: Enhanced footers with interactive, secure (`_blank`, `noreferrer`) external hyperlink anchors connecting viewers directly to the official mentorship leadership profiles.

---

## 🛠️ Built With

*   **React 19** - State-driven Component Ecosystem
*   **Vite 8** - Modern Lightweight Dev Tools & Hot Module Reloading
*   **TypeScript 6** - Type-safe Static Checking
*   **Tailwind CSS v4** - Fast utility-first compiled web stylesheets

---

## 📂 Project Structure

```text
src/
├── components/
│   └── ProfileCard.tsx     # Card view equipped with smart onerror asset bindings
├── constants/
│   └── user.constants.ts   # Central mock user registry (Data isolation layer)
├── types/
│   └── user.types.ts       # Standalone strict schema contract definitions
├── App.tsx                 # Master controller pipeline managing layout and security loops
├── main.tsx                # Native framework orchestration mount
└── index.css               # Global theme injection config (@import "tailwindcss")
```

---

## 💻 Getting Started Locally

1. Clone the master folder and step inside the directory:
   ```bash
   git clone https://github.com
   cd week-2/profile-card-app
   ```
2. Install the clean utility node dependencies:
   ```bash
   npm install
   ```
3. Boot up the local runtime Vite build compiler:
   ```bash
   npm run dev
   ```
