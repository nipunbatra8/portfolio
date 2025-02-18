import { Github } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-sm font-medium">
            Nipun Batra
          </Link>
        </div>
        <a
          href="https://github.com/nipunbatra8"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:text-primary"
        >
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
      </div>
    </nav>
  )
}

