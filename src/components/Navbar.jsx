import { Menu, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-blue-600 to-violet-600" />
            <span className="font-semibold tracking-tight text-gray-900">clippers</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#how" className="hover:text-gray-900 transition">How it works</a>
            <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Sign in</a>
            <a href="#cta" className="inline-flex items-center gap-1 rounded-full bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 transition">
              Get started
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white text-gray-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2 text-sm text-gray-700">
            <a href="#features" className="block px-2 py-2 rounded-md hover:bg-black/5">Features</a>
            <a href="#how" className="block px-2 py-2 rounded-md hover:bg-black/5">How it works</a>
            <a href="#pricing" className="block px-2 py-2 rounded-md hover:bg-black/5">Pricing</a>
            <div className="pt-2 flex gap-2">
              <a href="#" className="flex-1 text-center px-3 py-2 rounded-md border border-black/10">Sign in</a>
              <a href="#cta" className="flex-1 text-center px-3 py-2 rounded-md bg-gray-900 text-white">Get started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
