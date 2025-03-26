import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ProjectCarousel from "./components/ProjectCarousel"
import AboutUsSection from "./components/AboutUsSection"
import BackgroundImage from "./components/BackgroundImage"
import MeetTheTeamSection from "./components/MeetTheTeamSection"
import StatsSection from "./components/StatsSection"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-24 flex items-center hero-section">
        <BackgroundImage/>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
          {/* <div className="mb-2 flex justify-center">
              <Image
                src="/images/carousel/AfricaRefinedLogo.png"
                alt="Africa Refined Logo"
                width={600}
                height={100}
                className="w-auto h-auto max-h-48"
              />
            </div> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Empowering Communities Across Africa</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12">
              Join us in creating positive change and building brighter futures for our communities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/getInvolved"
                className="px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                Get Involved
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 bg-white text-red-600 rounded-full hover:bg-gray-100 transition-colors"
              >
                Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Carousel */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto mx-w-6xl px-6">
          <h2 className="text-5xl font-bold text-center mb-12 text">Our Impact</h2>
          <ProjectCarousel />
        </div>
      </section>
        <StatsSection />
        

      {/* About Us Section */}
      <AboutUsSection />
      <MeetTheTeamSection />

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-black rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Make a Difference Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in our mission to create positive change. Your support can help transform lives and communities
              across Africa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/donate"
                className="px-8 py-4 bg-white text-red-600 rounded-full hover:bg-gray-100 transition-colors"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="px-8 py-4 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors"
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

