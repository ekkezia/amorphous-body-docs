const plugin = require("tailwindcss/plugin")

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".body1": { fontFamily: theme("fontFamily.sans"), fontSize: "16px", fontWeight: "400", lineHeight: "19.2px" },
        ".border-b": {borderBottom: '1px solid white'},
      })
    }),
  ],
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
