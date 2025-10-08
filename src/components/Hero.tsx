import Link from "next/link"

type Props = {
  title: string
  subtitle?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}

export default function Hero({ title, subtitle, primary, secondary }: Props) {
  return (
    <header className="bg-gray-100 border-b">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="mt-3 text-lg text-gray-700 max-w-2xl">{subtitle}</p>}
        <div className="mt-6 flex flex-wrap gap-3">
          {primary && (
            <Link
              href={primary.href}
              className="inline-flex items-center justify-center rounded px-4 py-2 font-medium bg-blue-600 text-white hover:bg-blue-700"
            >
              {primary.label}
            </Link>
          )}
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex items-center justify-center rounded px-4 py-2 font-medium bg-gray-200 text-gray-900 hover:bg-gray-300"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
