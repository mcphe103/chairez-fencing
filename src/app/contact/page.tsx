'use client'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().max(0).optional(), // honeypot
})
type Values = z.infer<typeof Schema>

export default function ContactPage() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors, isSubmitting, isValid }, reset } =
    useForm<Values>({ resolver: zodResolver(Schema), mode: "onChange" })

  async function onSubmit(values: Values) {
    setServerError(null)
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
    if (!res.ok) {
      setServerError("Something went wrong. Please try again.")
      return
    }
    reset()
    router.push("/contact/success")
  }

  const Err = ({ msg }: { msg?: string }) => msg ? <p className="text-sm text-red-600 mt-1">⚠️ {msg}</p> : null

  return (
    <main className="section max-w-xl mx-auto">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" noValidate>
        <input type="text" className="hidden" tabIndex={-1} aria-hidden="true" {...register("website")} />

        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input id="name" className={`mt-1 w-full border rounded p-2 ${errors.name ? "border-red-500" : "border-gray-300"}`} {...register("name")} />
          <Err msg={errors.name?.message} />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input id="email" type="email" className={`mt-1 w-full border rounded p-2 ${errors.email ? "border-red-500" : "border-gray-300"}`} {...register("email")} />
          <Err msg={errors.email?.message} />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea id="message" rows={5} className={`mt-1 w-full border rounded p-2 ${errors.message ? "border-red-500" : "border-gray-300"}`} {...register("message")} />
          <Err msg={errors.message?.message} />
        </div>

        <button type="submit" disabled={isSubmitting || !isValid}
          className={`px-4 py-2 rounded font-medium text-white ${isSubmitting || !isValid ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}>
          {isSubmitting ? "Sending…" : "Send message"}
        </button>

        {serverError && <p className="text-red-700 mt-2">{serverError}</p>}
      </form>
    </main>
  )
}
