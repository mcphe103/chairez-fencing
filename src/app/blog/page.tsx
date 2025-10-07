import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export const metadata = { title: "Blog", description: "Tiny blog list" }

export default function BlogPage() {
  const list = getAllPosts()
  return (
    <main className="section">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-6">
        {list.map(p => (
          <li key={p.slug} className="border rounded p-4 bg-white">
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="text-sm text-gray-500">{p.date}</p>
            <p className="mt-2 text-gray-700">{p.excerpt}</p>
            <Link className="inline-block mt-3 underline" href={`/blog/${p.slug}`}>
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
