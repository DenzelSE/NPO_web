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
        <Link href="/" className="text-2xl font-bold text-white">
            Africa<span className="text-red-600">Refined</span>
          </Link>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X className="h-6 w-6 text-pink-500" /> : <Menu className="h-6 w-6 text-pink-500" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
          <Link href="/about" className="text-gray-600 hover:text-red-500 transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-red-500 transition-colors">
              Projects
            </Link>
            
            <Link href="/get-involved" className="text-gray-600 hover:text-red-500 transition-colors">
              Get Involved
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-red-500 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-red-500 transition-colors">
              Contact
            </Link>
            <Link
              href="/donate"
              className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-pink-600 transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/projects" className="text-gray-600 hover:text-pink-500 transition-colors">
                Projects
              </Link>
              <Link href="/get-involved" className="text-gray-600 hover:text-pink-500 transition-colors">
                Get Involved
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-pink-500 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-pink-500 transition-colors">
                Contact
              </Link>
              <Link
                href="/donate"
                className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors text-center"
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

