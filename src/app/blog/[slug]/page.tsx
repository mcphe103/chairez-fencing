import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllPosts, getPost } from "@/lib/posts"

type Params = { params: { slug: string } }

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params) {
  const post = getPost(params.slug)
  if (!post) return { title: "Post not found" }
  return { title: post.title, description: post.excerpt }
}

export default function PostPage({ params }: Params) {
  const post = getPost(params.slug)
  if (!post) return notFound()
  return (
    <main className="section prose">
      <p className="text-sm text-gray-500">{post.date}</p>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link href="/blog" className="inline-block mt-6 no-underline">← Back to blog</Link>
    </main>
  )
}
