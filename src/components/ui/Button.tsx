type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "ghost"
  className?: string
}
export default function Button({ children, variant = "primary", className = "" }: ButtonProps) {
  const base = "px-4 py-2 rounded font-medium inline-flex items-center justify-center"
  const styles = variant === "primary"
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "bg-gray-200 text-gray-900 hover:bg-gray-300"
  return <button className={`${base} ${styles} ${className}`}>{children}</button>
}
