import type { Config } from "tailwindcss";

const config: Config = {
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
      colors: {
        primary_1: "#0F1035",
        primary_2: "#1e1f52",
        primary_3: " #5458F7",
        primary_4: "#1e1f52",
        secondary_1: "#365486",
        secondary_2: "#7FC7D9",
        secondary_3: "#DCF2F1",
        secondary_4: "#AAAAAA",
      },
    },
  },
  plugins: [],
};
export default config;
