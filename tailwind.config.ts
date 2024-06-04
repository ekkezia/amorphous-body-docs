import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      // colors: {
      //   'transparent': 'rgba(0, 0, 0, 0.'
      // },
      backgroundColor: {
        'transparent': 'rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      screens: {
        'tall': { 'raw': '(min-height: 720px)' },
      },
    },
  },
};
export default config;
