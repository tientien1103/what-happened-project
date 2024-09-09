/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: "16px",
      },
      gridTemplateColumns: {
        15: "repeat(15, minmax(0, 1fr))",
        footer: "200px minmax(900px, 1fr) 100px",
      },
      gridColumn: {
        "span-15": "span 15 / span 15",
      },
      colors: {
        customPlaceholder: "#111",
      },
    },
  },
  plugins: [],
};
