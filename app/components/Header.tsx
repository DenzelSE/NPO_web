"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
          >
            Entity Name
          </Link>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="/get-involved" className="text-gray-600 hover:text-blue-600 transition-colors">
              Get Involved
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link
              href="/donate"
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                Projects
              </Link>
              <Link href="/get-involved" className="text-gray-600 hover:text-blue-600 transition-colors">
                Get Involved
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Link
                href="/donate"
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-center"
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

