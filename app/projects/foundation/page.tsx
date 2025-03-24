"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingCart } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Madiba Jersey",
    price: "R500",
    image: "/images/carousel/TeamPic.jpg",
    description: "Black jersey featuring Nelson Mandela with traditional pattern",
  },
  {
    id: 2,
    name: "Madiba T-Shirt",
    price: "R250",
    image: "/images/carousel/TeamPic.jpg",
    description: "Stylish t-shirt celebrating Nelson Mandela's legacy",
  },
  {
    id: 3,
    name: "Madiba T-Shirt (Blue)",
    price: "R250",
    image: "/images/carousel/TeamPic.jpg",
    description: "Blue t-shirt featuring Nelson Mandela's portrait",
  },
]

export default function CommunityPage() {
  const [orderMessage, setOrderMessage] = useState("")

  const handleOrder = (productName: string) => {
    setOrderMessage(`Thank you for ordering the ${productName}! We'll contact you soon to complete your purchase.`)
    setTimeout(() => {
      setOrderMessage("")
    }, 5000)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-red-900 to-red-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Nelson Mandela Jersey Initiative</h1>
            <p className="text-xl text-white/90 mb-8">Keeping Warm this Mandela Month</p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
        ></div>
      </section>

      {/* About the Initiative Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 ">About the Initiative</h2>
              <p className=" text-xl text-gray-700 mb-6">
                Established in 2024, the Nelson Mandela Jersey initiative focuses on making a positive impact and
                continuing Mandela's legacy of service and compassion. This heartwarming project ties into the broader
                Mandela Day initiative and aligns with the spirit of Nelson Mandela Day.
              </p>
              <p className="text-xl text-gray-700 mb-6">
                Under the theme 'Keeping Warm this Mandela Month', this initiative occurs seasonally between June and
                July each year, which is winter in South Africa. Its timing ensures that the jerseys are distributed
                when they are most needed to help people stay warm. The Nelson Mandela Jersey Project is one amongst
                many initiatives in South Africa that continue the long-living legacy and vision of Tata Nelson
                Rolihlahla Mandela.
              </p>
              <div className="space-y-4 mt-8">
                <h3 className="text-2xl font-semibold text-red-600">Key Focus Areas:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-xl text-gray-800">Seasonal Timing</h4>
                    <p className="text-xl text-gray-700">
                      The event takes place between June and July each year, which is winter in South Africa. This
                      timing ensures that the jerseys are distributed when they are most needed to help people stay
                      warm.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-800">Community Support</h4>
                    <p className="text-xl text-gray-700">
                      By providing jerseys to disadvantaged communities, the project addresses immediate needs and
                      offers practical support to those who may struggle with the cold weather.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-800">Celebrating Mandela's Legacy</h4>
                    <p className="text-xl text-gray-700">
                      The jerseys feature an image of Nelson Mandela, serving as a reminder of his legacy and the values
                      he stood for. This helps keep his memory alive and inspires others to continue his work.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-800">67 Minutes of Service</h4>
                    <p className="text-xl text-gray-700">
                      The project ties into the broader Mandela Day initiative, which encourages people to spend 67
                      minutes doing something positive for their communities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <blockquote className="italic text-gray-700 border-l-4 border-red-600 pl-4 py-2">
                  "There can be no greater gift than that of giving one's time and energy to help others without
                  expecting anything in return." - Nelson Mandela
                </blockquote>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/carousel/TeamPic.jpg"
                  alt="Nelson Mandela Jersey Initiative"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">SHOP MADIBA STYLE</h2>
            <p className="text-2xl max-w-3xl mx-auto">
              By purchasing these products, you are contributing to the work and fundraiser of Africa Refined. Seize the
              moment and join us in keeping the Madiba legacy alive.
            </p>
          </div>

          {orderMessage && (
            <div className="bg-green-600 text-white p-4 rounded-lg mb-8 text-center">{orderMessage}</div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/images/carousel/TeamPic.jpg"
                  alt="Madiba Jersey"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Madiba Jersey - R500</h3>
                <p className="text-gray-400 mb-4">Black jersey featuring Nelson Mandela with traditional pattern</p>
                <button
                  onClick={() => handleOrder("Madiba Jersey")}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Order Now
                </button>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/images/carousel/TeamPic.jpg"
                  alt="Madiba T-Shirt"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Madiba T-Shirt - R250</h3>
                <p className="text-gray-400 mb-4">Stylish t-shirt celebrating Nelson Mandela's legacy</p>
                <button
                  onClick={() => handleOrder("Madiba T-Shirt")}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Order Now
                </button>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/images/carousel/TeamPic.jpg"
                  alt="Madiba T-Shirt (Blue)"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Madiba T-Shirt (Blue) - R250</h3>
                <p className="text-gray-400 mb-4">Blue t-shirt featuring Nelson Mandela's portrait</p>
                <button
                  onClick={() => handleOrder("Madiba T-Shirt (Blue)")}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Order Now
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-6">DESIGNED AND MANUFACTURED IN SOUTH AFRICA</p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              View Full Collection
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-red-600 mb-4">500+</div>
              <h3 className="text-xl font-semibold mb-2">Jerseys Distributed</h3>
              <p className="text-gray-700">
                We've provided warmth to hundreds of individuals in need during the cold winter months.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-red-600 mb-4">15+</div>
              <h3 className="text-xl font-semibold mb-2">Communities Reached</h3>
              <p className="text-gray-700">
                Our initiative has touched lives across multiple communities throughout South Africa.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-red-600 mb-4">1000+</div>
              <h3 className="text-xl font-semibold mb-2">Volunteer Hours</h3>
              <p className="text-gray-700">
                Dedicated volunteers have contributed their time and energy to make this initiative possible.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Join the Initiative</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Help us continue Nelson Mandela's legacy by supporting the Madiba Jersey initiative. Together, we can make
              a difference in the lives of those in need.
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

