"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Optionally report to an error service here
    console.error(error)
  }, [error])

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold">Something went wrong</h1>
        <p className="mt-3 text-slate-600">
          An unexpected error occurred. Please try again.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="rounded-lg px-5 py-3 bg-[#7A0C0C] text-white font-semibold hover:bg-[#5C0909] transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-lg px-5 py-3 border border-slate-300 font-semibold hover:bg-slate-50 transition-colors"
          >
            Back to Home
          </Link>
        </div>

        {error?.digest && (
          <p className="mt-4 text-xs text-slate-400">Error ID: {error.digest}</p>
        )}
      </div>
    </main>
  )
}
