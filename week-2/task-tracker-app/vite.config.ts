import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // አዲሱን የ v4 ፕለጊን እዚህ እናስገባዋለን

// https://vitejs.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ቪቴ Tailwindን በቀጥታ እንዲያነበው እዚህ እንጠራዋለን
  ],
});
