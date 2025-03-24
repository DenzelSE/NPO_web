"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Users, BookOpen, Globe } from "lucide-react"
import { useState } from "react"

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-green-800 to-green-700 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/carousel/WhatsApp Image 2024-12-17 at 13.05.37_7791c768.jpg"
            alt="Moving Garden"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Moving Garden Project</h1>
            <p className="text-xl text-white/90 mb-8">
              Empowering communities through sustainable agriculture and education
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
        ></div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white py-6 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab("about")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === "about" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              About the Project
            </button>
            <button
              onClick={() => setActiveTab("sdgs")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === "sdgs" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              SDG Contributions
            </button>
            <button
              onClick={() => setActiveTab("impact")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === "impact" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Our Impact
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      {activeTab === "about" && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-600">About the Moving Garden</h2>
                <p className="text-gray-700 mb-6">
                  The Moving Garden initiative is the latest addition to Africa Refined that provides valuable
                  educational opportunities for scholars and contributes to several Sustainable Development Goals
                  (SDGs), particularly SDG 2, which aims to end hunger, achieve food security and improved nutrition,
                  and promote sustainable agriculture by 2030.
                </p>
                <p className="text-gray-700 mb-6">
                  Considering that the project is set up in a local primary school, this innovative initiative supports
                  SDG 4 but also enhances the overall educational experience for scholars, empowering them with the
                  knowledge and skills needed to make a positive impact on their communities and the world.
                </p>
                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-semibold text-green-600">Key Focus Areas:</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800">Community Garden</h4>
                      <p className="text-gray-700">
                        Establishing a community garden that provides nutritious vegetables to local community members.
                        This helps improve access to fresh, healthy food and supports overall well-being.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Mobile Wheelbarrow Garden</h4>
                      <p className="text-gray-700">
                        Introducing a mobile wheelbarrow garden managed by scholars. This innovative approach not only
                        makes gardening more accessible but also provides a hands-on learning experience for students.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Educational Opportunities</h4>
                      <p className="text-gray-700">
                        Offering educational workshops and practical experience in gardening and farming. This empowers
                        scholars with knowledge and skills that they can use to promote sustainability and food security
                        in their communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/carousel/WhatsApp Image 2024-12-17 at 13.05.37_7791c768.jpg"
                    alt="Moving Garden Project"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SDG Contributions Section */}
      {activeTab === "sdgs" && (
        <section className="py-20 relative">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/carousel/WhatsApp Image 2024-12-17 at 13.05.37_7791c768.jpg"
              alt="Moving Garden Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-600">Sustainable Development Goals</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 text-center">
              The Moving Garden project contributes to several Sustainable Development Goals (SDGs), particularly:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold">No Poverty</h3>
                </div>
                <p className="text-gray-700">
                  By providing skills and resources for sustainable agriculture, the project helps communities build
                  economic resilience.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-600">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold">Zero Hunger</h3>
                </div>
                <p className="text-gray-700">
                  The project helps to end hunger and achieve food security by establishing community gardens that
                  provide nutritious vegetables to local community members.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Good Health</h3>
                </div>
                <p className="text-gray-700">
                  By promoting the consumption of home-grown vegetables, the project enhances the health and well-being
                  of the community.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold">Quality Education</h3>
                </div>
                <p className="text-gray-700">
                  The mobile wheelbarrow garden managed by scholars provides hands-on learning experiences in
                  sustainable agriculture.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-800">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-800 font-bold">13</span>
                  </div>
                  <h3 className="text-xl font-bold">Climate Action</h3>
                </div>
                <p className="text-gray-700">
                  The project encourages sustainable agriculture practices, which contribute to climate change
                  mitigation. By promoting local production, it reduces the carbon footprint associated with
                  transporting food over long distances.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-800">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-800 font-bold">17</span>
                  </div>
                  <h3 className="text-xl font-bold">Partnerships for the Goals</h3>
                </div>
                <p className="text-gray-700">
                  By addressing these areas, the Moving Garden project not only supports the achievement of multiple
                  SDGs but also empowers young people with the knowledge and skills needed to contribute to a
                  sustainable future.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Image
                src="/images/carousel/WhatsApp Image 2024-12-17 at 13.05.37_7791c768.jpg"
                alt="SDG Icons"
                width={800}
                height={200}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </section>
      )}

      {/* Impact Section */}
      {activeTab === "impact" && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-600">Our Impact</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/carousel/WhatsApp Image 2024-12-17 at 13.05.37_7791c768.jpg"
                  alt="Vertical Farming"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-600">Environmental Impact</h3>
                <p className="text-gray-700 mb-6">
                  Through the project, students learn about the impact of agriculture on the environment and the
                  importance of sustainable practices. This knowledge encourages them to become environmentally
                  conscious citizens who can contribute to climate action and sustainability efforts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Reduced carbon footprint through local food production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Conservation of water through efficient gardening techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Promotion of biodiversity in urban environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Reduction in food waste through direct farm-to-table practices
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:flex-row-reverse">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-600">Educational Impact</h3>
                <p className="text-gray-700 mb-6">
                  By involving scholars in managing the mobile wheelbarrow gardens, the project provides hands-on
                  learning experiences in sustainable agriculture. This practical education helps students understand
                  the importance of sustainable practices and food security.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Hands-on learning about plant biology and ecosystems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Development of practical skills in gardening and farming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Understanding of food systems and nutrition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Promotion of environmental stewardship and responsibility</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-first md:order-last">
                <Image
                  src="/images/carousel/WhatsApp Image 2024-12-17 at 13.05.37_7791c768.jpg"
                  alt="Hands planting seedlings"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/carousel/WhatsApp Image 2024-12-17 at 13.05.37_7791c768.jpg"
                  alt="SDG Impact"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-600">Community Impact</h3>
                <p className="text-gray-700 mb-6">
                  The project fosters a sense of community and collaboration among students and local residents. By
                  working together on the gardens, participants build social connections and learn the value of teamwork
                  and community involvement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Strengthened social ties within the community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Improved access to fresh, nutritious food</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Development of leadership and collaboration skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Creation of sustainable community resources</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16">
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-green-600 text-center">Key Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                    <p className="text-gray-700">Gardens Established</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                    <p className="text-gray-700">Students Involved</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                    <p className="text-gray-700">Workshops Conducted</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">6</div>
                    <p className="text-gray-700">SDGs Supported</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Join the Moving Garden Initiative</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Help us grow sustainable communities through education and agriculture. Together, we can make a difference
              in food security and environmental stewardship.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/donate"
                className="px-8 py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-colors"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="px-8 py-4 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors flex items-center justify-center gap-2"
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

