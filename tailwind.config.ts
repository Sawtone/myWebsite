import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {   
    extend: {
      fontFamily: {
        indie: ['var(--font-indie-flower)', 'cursive'],
        dancing: ['var(--font-dancing-script)', 'cursive'],
      },
      rotate: {
        '2': '2deg',
        '-2': '-2deg'
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), 
    require("tailwindcss-animate"),
  ],
  corePlugins: {
    preflight: false,
  },
} as any;
export default config;
