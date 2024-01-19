import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        mobile: "767px",
      },
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      argent: "#c1c1c1",
      lightSilver: "#d9d9d9",
      portlandOrange: "#f75a2f",
    },
  },
  plugins: [],
};
export default config;
