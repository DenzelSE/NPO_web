import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-black font-bold text-xl mb-4 md:mb-0">
            &copy; 2023 Africa Refined. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <ul className="flex space-x-4">
              <li>
                <Link href="/privacy" className="hover:text-red-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-red-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/africarefined"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com/africarefined"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com/africarefined"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com/company/africarefined"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://youtube.com/africarefined"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

