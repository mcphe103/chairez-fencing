# 🧱 Project: [Chairez Fencing]

### 📌 Overview
A small business client for their family-owned business Chairez Fencing.  Recommended by the Stucker Family.

> Example:  
> This is the official website for **Chairez Fencing**, a California-based fencing company.  
> Built using **Next.js 15 + Tailwind CSS**, hosted on **Vercel**, and designed with accessibility and SEO in mind.

---

### 🧰 Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Custom + ShadCN (optional)
- **Hosting:** Vercel
- **Package Manager:** pnpm

---

### 🗂️ Folder Structure

src/
├─ app/ # Pages & layouts
├─ components/ # Reusable components
│ └─ ui/ # Small UI elements
├─ lib/ # Utilities or API helpers
├─ data/ # JSON or static content
├─ styles/ # Global or helper styles
public/ # Images, icons, etc.
tailwind.config.ts # Design tokens & theme
postcss.config.js # Tailwind plugin config


---

### ⚙️ Setup & Local Development
1. **Install dependencies**
   
   	pnpm install

Run local dev server

	pnpm dev

App runs at: http://localhost:3000

Build for production

	pnpm build

	Preview production build

	pnpm start

🌐 Deployment

This site is deployed with Vercel.

Deployment URL: https://project-name.vercel.app

Production Branch: main


🔐 Environment Variables (if any)

Create a .env.local file in the project root.

Example:

NEXT_PUBLIC_BASE_URL=http://localhost:3000

🖼️ Assets & SEO

favicon.ico in /public

robots.txt in /public

(Optional) /sitemap.xml for indexing

Update metadata in src/app/layout.tsx for SEO

🧾 Project Notes
Date	Change	Notes
2025-10-07	Setup project	Copied from starter-template
2025-10-10	Added hero + navbar	Styled using Tailwind helpers
...	...	...
🧑‍💼 Client Info

Client: [Name or Business]
Contact: [Email / Phone]
Domain: [Live URL or planned domain]
Status: Development / Review / Deployed

🪄 Credits

Created by Matthew McPherson
McPherson Digital Works


---

✅ **How to use it**
- Copy → Paste → Replace `[Project Name]` and other placeholders.  
- Keep one per project folder for easy tracking.  
- It doubles as your internal documentation *and* client handover file.

---









