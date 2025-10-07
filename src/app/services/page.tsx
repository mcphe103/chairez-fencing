import type { Metadata } from "next"
export const metadata: Metadata = { title: "Services", description: "What we offer" }

const services = [
  { t: "Service A", d: "Short description." },
  { t: "Service B", d: "Short description." },
  { t: "Service C", d: "Short description." },
]
export default function Services() {
  return (
    <main className="section">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {services.map(s => (
          <div key={s.t} className="border rounded p-6 bg-white">
            <h2 className="text-xl font-semibold">{s.t}</h2>
            <p className="mt-2 text-gray-700">{s.d}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
