import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="mt-3 text-slate-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-block rounded-lg px-5 py-3 bg-[#7A0C0C] text-white font-semibold hover:bg-[#5C0909] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
