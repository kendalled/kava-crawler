/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./plugins/**/*.js",
  ],
  plugins: [require("@tailwindcss/forms")],
};