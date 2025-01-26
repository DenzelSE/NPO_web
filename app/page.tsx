import Link from "next/link"
import { ArrowRight, Heart, Users, GraduationCap } from "lucide-react"
import BackgroundImage from "./components/BackgroundImage"
import ProjectCarousel from "./components/ProjectCarousel"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-24 flex items-center">
        <BackgroundImage />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Empowering Communities Through Education</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12">
              Join us in creating positive change and building brighter futures for our youth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/get-involved"
                className="px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                Get Involved
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 bg-white text-pink-500 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Carousel */}
      <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Our Impact</h2>
          <ProjectCarousel />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-pink-500">50+</h3>
              <p className="text-gray-600">Community Projects Completed</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6">
                <Users className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-pink-500">10k+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6">
                <GraduationCap className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-pink-500">5k+</h3>
              <p className="text-gray-600">Children Educated</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Make a Difference Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in our mission to create positive change. Your support can help transform lives and communities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/donate"
                className="px-8 py-4 bg-white text-pink-500 rounded-full hover:bg-gray-100 transition-colors"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="px-8 py-4 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
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

