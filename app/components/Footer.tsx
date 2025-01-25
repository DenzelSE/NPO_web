import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="gradient-text font-bold text-xl mb-4 md:mb-0">&copy; 2023 Luteal Liberty. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li>
              <Link href="/privacy" className="hover:text-pink-500 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-pink-500 transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

