import type { Metadata } from "next"
export const metadata: Metadata = { title: "About", description: "Who we are" }

export default function About() {
  return (
    <main className="section max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-4 text-gray-700">
        This is a reusable Next.js starter you can adapt to any small business or portfolio.
      </p>
    </main>
  )
}
