import Link from "next/link"

export default function GetInvolved() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="py-20"></div>
      <h1 className="text-4xl font-bold mb-8">Get Involved</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Donate</h2>
          <p className="mb-4">Your financial support helps us continue our mission and expand our impact.</p>
          <Link
            href="/donate"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Donate Now
          </Link>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Volunteer</h2>
          <p className="mb-4">Join our team of dedicated volunteers and make a difference in your community.</p>
          <Link
            href="/volunteer"
            className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
          >
            Volunteer
          </Link>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Partner With Us</h2>
          <p className="mb-4">Explore partnership opportunities to amplify our collective impact.</p>
          <Link
            href="/partner"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

