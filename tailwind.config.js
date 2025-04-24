/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          ranga: ['var(--font-ranga-bold)', 'sans-serif'],
          roboto: ['var(--font-roboto_condensed)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };