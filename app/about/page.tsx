import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Users, GraduationCap, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold py-8">About Africa Refined</h1>
            <p className="text-2xl text-white/90 mb-2">
              Empowering communities across Africa through sustainable development, education, and health initiatives.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-black"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
        ></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/carousel/AfricaRefined.png"
                alt="Africa Refined team"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">Our Story</h2>
              <p className="text-gray-700 mb-6 text-2xl">
                Africa Refined was established in 2024 as a collective of community-based initiatives focused on
                sustainable development, health education, and empowerment across communities in South Africa.
              </p>
              <p className="text-gray-700 text-2xl mb-6">
                What began as separate grassroots projects has evolved into a unified organization with a shared vision
                of creating positive change and building brighter futures for African communities.
              </p>
              <p className="text-gray-700 text-2xl mb-6">
                Our founders recognized that by combining resources, knowledge, and networks, they could amplify their
                impact and reach more communities in need. Today, Africa Refined operates multiple projects across South
                Africa, each addressing specific community needs while contributing to our overall mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Mission, Vision & Values</h2>

            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-4 text-red-600">Our Mission</h3>
              <p className="text-2xl text-white">
                To drive sustainability, health, and empowerment within communities through impactful engagements that
                create lasting positive change.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-4 text-red-600">Our Vision</h3>
              <p className="text-2xl text-white">
                To engender a community of knowledgeable individuals who empower one another in solidarity, creating
                resilient and thriving communities across Africa.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4 text-red-600">Our Values</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-2xl font-semibold mb-2 text-red-600">Integrity</h4>
                  <p className="text-xl text-gray-700">
                    We operate with honesty, transparency, and accountability in all our actions and decisions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-2xl font-semibold mb-2 text-red-600">Empowerment</h4>
                  <p className="text-xl text-gray-700">
                    We believe in equipping individuals with knowledge, skills, and resources to improve their lives.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-2xl font-semibold mb-2 text-red-600">Sustainability</h4>
                  <p className="text-xl text-gray-700">
                    We commit to practices that meet present needs without compromising future generations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-2xl font-semibold mb-2 text-red-600">Collaboration</h4>
                  <p className="text-xl text-gray-700">
                    We foster partnerships and community involvement to achieve greater collective impact.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-2xl font-semibold mb-2 text-red-600">Innovation</h4>
                  <p className="text-xl text-gray-700">
                    We embrace creative solutions and new approaches to address complex community challenges.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-2xl font-semibold mb-2 text-red-600">Respect</h4>
                  <p className="text-xl text-gray-700">
                    We honor the dignity, culture, and rights of all individuals and communities we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-black">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-black/50 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">50+</h3>
              <p className="text-white">Community Projects Completed</p>
            </div>
            <div className="bg-black/50 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">10k+</h3>
              <p className="text-white">Lives Impacted</p>
            </div>
            <div className="bg-black/50 rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">5k+</h3>
              <p className="text-white">Children Educated</p>
            </div>
            <div className="bg-black/50 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">20+</h3>
              <p className="text-white">Communities Served</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              Since our inception, we've worked tirelessly to create meaningful change in communities across South
              Africa. Our projects have directly improved access to education, healthcare, and sustainable resources,
              empowering individuals to build better futures for themselves and their communities.
            </p>
          </div>
        </div>
      </section> */}

      {/* Key Focus Areas Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-black">Key Focus Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-600">Education and Awareness</h3>
              <p className="text-xl text-gray-700">
                Providing educational programs and raising awareness about critical issues like health, agriculture, and
                sustainable development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-600">Health and Well-being</h3>
              <p className="text-xl text-gray-700">
                Implementing health programs that address local health challenges, promote hygiene, and improve access
                to medical services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-600">Sustainable Development</h3>
              <p className="text-xl text-gray-700">
                Encouraging sustainable practices in agriculture, energy use, and resource management to support
                long-term environmental and economic health.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-600">Community Resilience</h3>
              <p className="text-xl text-gray-700">
                Strengthening community structures and fostering resilience to cope with challenges such as climate
                change, economic instability, and health crises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-black rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Together, we can create positive change and build brighter futures for communities across Africa.
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
                className="px-8 py-4 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors flex items-center justify-center gap-2"
              >
                Get Involved
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

