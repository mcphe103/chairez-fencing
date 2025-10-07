export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600">
        © {new Date().getFullYear()} Your Business Name
      </div>
    </footer>
  )
}
