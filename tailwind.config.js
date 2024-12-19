/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#636AE8",
        "custom-gray": "#9095A1",
        "custom-bg-button": "#2A4D64",
        "custom-h-button": "#152B38",
      },
    },
  },
  plugins: [],
};
