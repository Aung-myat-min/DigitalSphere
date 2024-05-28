import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      primary: "#fcb914",
      text: "#2f2104",
      darktext: "#f5f5f5",
      link: "#817459",
      inputBg: "#bfbfbf",
      bgColor: "#e1e1e1",
      darkBgColor: "#433e3c",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    extend: {
      borderRadius: {
        normal: "15px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  darkMode: "class",
};
export default config;
