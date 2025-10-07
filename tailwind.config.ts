import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#2563eb", dark: "#1e40af" },
      },
      fontFamily: {
        heading: ["ui-sans-serif", "system-ui"],
        body: ["ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config
