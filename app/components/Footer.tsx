import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2023 Entity Name. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

