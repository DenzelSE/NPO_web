import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Users, GraduationCap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 curved-section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Empowering Communities
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12">
              Through education, sustainable development, and community engagement. Join us in making a difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/get-involved"
                className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Get Involved
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-50 transition-colors border border-blue-600"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-gray-600">Community Projects Completed</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold mb-2">10k+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold mb-2">5k+</h3>
              <p className="text-gray-600">Children Educated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Foundation Project"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Foundation</h3>
              <p className="text-gray-600 mb-6">
                Supporting sustainable development and community empowerment through various initiatives and
                partnerships.
              </p>
              <Link
                href="/projects/foundation"
                className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Community Project"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Project</h3>
              <p className="text-gray-600 mb-6">
                Working closely with local communities to address their unique needs and foster sustainable growth.
              </p>
              <Link
                href="/projects/community"
                className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Education Project"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Children's Education</h3>
              <p className="text-gray-600 mb-6">
                Providing quality education to underprivileged children, empowering them for a brighter future.
              </p>
              <Link
                href="/projects/education"
                className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Make a Difference Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in our mission to create positive change. Your support can help transform lives and communities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/donate"
                className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="px-8 py-4 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

