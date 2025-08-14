/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        layout: "var(--color-layout)",
        dark: "var(--color-dark)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
