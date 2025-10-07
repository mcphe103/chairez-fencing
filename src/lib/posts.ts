export type Post = { slug: string; title: string; date: string; excerpt: string; content: string }

export const posts: Post[] = [
  {
    slug: "hello-starter",
    title: "Hello, Starter 👋",
    date: "2025-10-01",
    excerpt: "A tiny first post to test dynamic routes.",
    content: "<p>Welcome to your starter kit.</p>",
  },
  {
    slug: "contact-form-notes",
    title: "Contact Form Notes",
    date: "2025-10-01",
    excerpt: "Validation on client + server keeps things robust.",
    content: "<p>Zod + react-hook-form on client; Zod on server.</p>",
  },
]

export function getAllPosts() {
  return posts.slice().sort((a, b) => (a.date < b.date ? 1 : -1))
}
export function getPost(slug: string) {
  return posts.find(p => p.slug === slug)
}
