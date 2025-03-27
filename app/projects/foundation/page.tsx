"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingCart, Heart, Users, Calendar, Award, X, Loader2 } from "lucide-react"
import { useState } from "react"
import { sendOrderEmail } from "./actions/SendOrderEmail";


interface OrderFormData {
  name: string
  email: string
  phone: string
  quantity: number
  size: string
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("about")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState("")
  const [orderStatus, setOrderStatus] = useState<{ success?: boolean; message?: string } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    email: "",
    phone: "",
    quantity: 1,
    size: "M",
  })

  const handleOrder = (productName: string) => {
    setSelectedProduct(productName)
    setIsModalOpen(true)
    setOrderStatus(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number.parseInt(value) || 1 : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setOrderStatus(null)

    try {
      // Send the order data to the server action
      const result = await sendOrderEmail({
        product: selectedProduct,
        ...formData,
      })

      setOrderStatus(result)

      // If successful, reset the form after a delay
      if (result.success) {
        setTimeout(() => {
          setIsModalOpen(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            quantity: 1,
            size: "M",
          })
        }, 3000)
      }
    } catch (error) {
      console.log(error)
      setOrderStatus({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-red-900 to-red-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/carousel/WhatsApp Image 2024-12-17 at 05.58.08_da6e057e.jpg"
            alt="Nelson Mandela Jersey Initiative"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
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

      {/* Navigation Tabs */}
      <section className="bg-white py-6 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab("about")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === "about" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              About the Initiative
            </button>
            <button
              onClick={() => setActiveTab("shop")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === "shop" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Shop Madiba Style
            </button>
            <button
              onClick={() => setActiveTab("impact")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === "impact" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                <h2 className="text-3xl font-bold mb-6 text-red-600">About the Initiative</h2>
                <p className="text-lg text-gray-700 mb-6">
                  {`Established in 2024, the Nelson Mandela Jersey initiative focuses on making a positive impact and
                  continuing Mandela's legacy of service and compassion. This heartwarming project ties into the broader
                  Mandela Day initiative and aligns with the spirit of Nelson Mandela Day.`}
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  {`Under the theme 'Keeping Warm this Mandela Month', this initiative occurs seasonally between June and
                  July each year, which is winter in South Africa. Its timing ensures that the jerseys are distributed
                  when they are most needed to help people stay warm. The Nelson Mandela Jersey Project is one amongst
                  many initiatives in South Africa that continue the long-living legacy and vision of Tata Nelson
                  Rolihlahla Mandela.`}
                </p>
                <div className="space-y-4 mt-8">
                  <h3 className="text-3xl font-semibold text-red-600">{`Key Focus Areas:`}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">Seasonal Timing</h4>
                      <p className="text-lg text-gray-700">
                        {`"The event takes place between June and July each year, which is winter in South Africa. This
                        timing ensures that the jerseys are distributed when they are most needed to help people stay
                        warm.`}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">Community Support</h4>
                      <p className="text-lg text-gray-700">
                        {`By providing jerseys to disadvantaged communities, the project addresses immediate needs and
                        offers practical support to those who may struggle with the cold weather.`}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">{`Celebrating Mandela's Legacy`}</h4>
                      <p className="text-lg text-gray-700">
                        {`The jerseys feature an image of Nelson Mandela, serving as a reminder of his legacy and the
                        values he stood for. This helps keep his memory alive and inspires others to continue his work.`}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">67 Minutes of Service</h4>
                      <p className="text-lg text-gray-700">
                        {`The project ties into the broader Mandela Day initiative, which encourages people to spend 67
                        minutes doing something positive for their communities.`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <blockquote className="italic text-gray-700 border-l-4 text-lg border-red-600 pl-4 py-2">
                    {`"There can be no greater gift than that of giving one's time and energy to help others without
                    expecting anything in return." - Nelson Mandela`}
                  </blockquote>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[800px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/carousel/WhatsApp Image 2024-12-05 at 00.11.13_5d2c4a45.jpg"
                    alt="Nelson Mandela Jersey Initiative"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Shop Section */}
      {activeTab === "shop" && (
        <section className="py-20 bg-black text-white relative">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/carousel/WhatsApp Image 2024-12-17 at 05.54.11_889e6d00.jpg"
              alt="Madiba Style Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-6">SHOP MADIBA STYLE</h2>
              <p className="text-xl max-w-3xl mx-auto">
                {`By purchasing these products, you are contributing to the work and fundraiser of Africa Refined. Seize
                the moment and join us in keeping the Madiba legacy alive.`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
                <div className="relative h-[400px]">
                  <Image
                    src="/images/carousel/WhatsApp Image 2024-12-17 at 05.54.11_889e6d00.jpg"
                    alt="Madiba Jersey"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{`Madiba Jersey - R500`}</h3>
                  <p className="text-lg text-gray-400 mb-4">Black jersey featuring Nelson Mandela with traditional pattern</p>
                  <button
                    onClick={() => handleOrder("Madiba Jersey - R500")}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Order Now
                  </button>
                </div>
              </div>

              <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
                <div className="relative h-[400px]">
                  <Image
                    src="/images/carousel/WhatsApp Image 2024-12-17 at 05.54.11_889e6d00.jpg"
                    alt="Madiba T-Shirt"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{`Madiba T-Shirt - R250`}</h3>
                  <p className="text-lg text-gray-400 mb-4">{`Stylish t-shirt celebrating Nelson Mandela's legacy`}</p>
                  <button
                    onClick={() => handleOrder("Madiba T-Shirt - R250")}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Order Now
                  </button>
                </div>
              </div>

              <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
                <div className="relative h-[400px]">
                  <Image
                    src="/images/carousel/WhatsApp Image 2024-12-17 at 05.54.11_889e6d00.jpg"
                    alt="Madiba T-Shirt (Blue)"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{`Madiba T-Shirt (Blue) - R250`}</h3>
                  <p className="text-lg text-gray-400 mb-4">{`Blue jersey featuring Nelson Mandela's portrait pattern`}</p>
                  <button
                    onClick={() => handleOrder("Madiba T-Shirt (Blue) - R250")}
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
      )}

      {/* Impact Section */}
      {activeTab === "impact" && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Our Impact</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/carousel/WhatsApp Image 2024-12-17 at 12.05.01_3b9a8aab.jpg"
                  alt="Mandela Jersey Distribution"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-red-600">Community Warmth</h3>
                <p className="text-gray-700 mb-6">
                  {`Our Mandela Jersey initiative has made a significant impact in providing warmth to communities during
                  the cold winter months in South Africa. By distributing jerseys to those in need, we've helped address
                  immediate physical needs while also promoting Mandela's legacy of compassion and service.`}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">Provided warmth to vulnerable community members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">Supported local manufacturing and job creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Raised awareness about winter challenges in disadvantaged communities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">Promoted community solidarity and support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:flex-row-reverse">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-red-600">{`Preserving Mandela's Legacy`}</h3>
                <p className="text-gray-700 mb-6">
                  {`Each jersey serves as a reminder of Nelson Mandela's legacy and the values he stood for. By featuring
                  his image and promoting his ideals, we help keep his memory alive and inspire others to continue his
                  work of equality, dignity, and compassion for all.`}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">{`Celebrated Mandela's vision and values`}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">{`Educated younger generations about Mandela's impact`}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">Inspired community service and volunteerism</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">Promoted unity and reconciliation</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-first md:order-last">
                <Image
                  src="/images/carousel/WhatsApp Image 2024-12-17 at 12.06.22_69a56246.jpg"
                  alt="Mandela Jersey"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className="mt-16">
              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-red-600 text-center">Key Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                    <p className="text-gray-700">Jerseys Distributed</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                    <p className="text-gray-700">Communities Reached</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-2">3</div>
                    <p className="text-gray-700">Annual Campaigns</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
                    <p className="text-gray-700">Volunteer Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Order Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              disabled={isSubmitting}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Order {selectedProduct}</h3>

              {orderStatus && (
                <div
                  className={`${
                    orderStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  } p-4 rounded-lg mb-4`}
                >
                  {orderStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                      Size
                    </label>
                    <select
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                      disabled={isSubmitting}
                    >
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                      <option value="XXL">XXXL</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Send Order Information
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center mt-4">
                  {`Your order information will be sent to our team, and a confirmation will be sent to your email. We'll
                  contact you shortly to confirm your order and arrange payment.`}
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

