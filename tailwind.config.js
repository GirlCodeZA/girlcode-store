/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            "hero-section": "url('/src/assets/hero-background.jpg')",
            "page-header": "url('/src/assets/cat-page-header.jpg')"
        },
        colors: {
            'girlcode-pink': "#e94154"
        }
    },
  },
  plugins: [],
}

