"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/30 backdrop-blur-md" : "bg-black/70"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/carousel/AfricaRefinedLogo.png" // Adjust this path if your logo is located elsewhere
              alt="Africa Refined Logo"
              width={250} // Adjust the width and height to fit your logo
              height={150}
              className="w-auto h-20 px-10" // This ensures the logo maintains its aspect ratio
            />
          </Link>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="text-white hover:text-red-500 transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-white hover:text-red-500 transition-colors">
              Projects
            </Link>
            <Link href="/media" className="text-white hover:text-red-500 transition-colors">
              Media
            </Link>
            <Link href="/contact" className="text-white hover:text-red-500 transition-colors">
              Contact
            </Link>
            <Link href="/donate" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
              Donate Today
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/about" className="text-white hover:text-red-500 transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-white hover:text-red-500 transition-colors">
                Projects
              </Link>
              <Link href="/media" className="text-white hover:text-red-500 transition-colors">
                Media
              </Link>
              <Link href="/contact" className="text-white hover:text-red-500 transition-colors">
                Contact
              </Link>
              <Link
                href="/donate"
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-center"
              >
                Donate Today
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

