/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          primary: "#d1d5db",

          secondary: "#ddd6fe",

          accent: "#02d1c3",

          neutral: "#111827",

          " base-100": "#F4F0F5",

          info: "#facc15",

          success: "#22d3ee",

          warning: "#8C680D",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
