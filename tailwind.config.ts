import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#7A0C0C", dark: "#5C0909" },
      },
      fontFamily: {
        heading: ["ui-sans-serif", "system-ui"],
        body: ["ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config
