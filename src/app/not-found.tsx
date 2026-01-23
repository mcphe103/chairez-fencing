"use client";

import { useSearchParams } from "next/navigation";

export default function NotFoundClient() {
  const searchParams = useSearchParams();

  // Example: show a message if you passed something like ?from=...
  const from = searchParams.get("from");

  if (!from) return null;

  return (
    <p className="mt-6 text-sm text-slate-400">
      You came from: <span className="text-slate-200">{from}</span>
    </p>
  );
}
