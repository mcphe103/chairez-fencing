This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# 🧱 Starter Template  
*A reusable full-stack Next.js boilerplate for small business and portfolio websites.*

---

## ⚡ Tailwind v4 Notes

This template is configured for **Tailwind CSS v4**, which has a few important differences from older versions:

- ❌ `font-body`, `btn`, or other DaisyUI-style utilities no longer exist by default.  
- ✅ Instead, use built-in Tailwind utilities directly (e.g., `text-lg font-semibold px-4 py-2 bg-blue-600 hover:bg-blue-700`).  
- 🧩 If you want design presets like buttons or themes later, you can add a UI plugin such as [shadcn/ui](https://ui.shadcn.com/) or [DaisyUI](https://daisyui.com/).  
- 🌈 Keep `globals.css` simple — only Tailwind directives should be in it:

```css
@import "tailwindcss";
