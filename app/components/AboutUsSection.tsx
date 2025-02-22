import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-us-image.jpg"
                alt="Africa Refined community impact"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 gradient-text">About us</h2>
            <p className="text-gray-700 mb-6">
              Africa Refined is a community-based initiative established in 2024, merging a selection of projects into a
              collective that focuses on Community Development, Health Education, and Empowerment across communities in
              South Africa.
            </p>
            <p className="text-gray-700 mb-6">
              Our mission is to drive sustainability, health, and empowerment within communities through impactful
              engagements. We strive to engender a community of knowledgeable individuals who empower one another in
              solidarity.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                Social Entrepreneurship
              </span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                Health Education
              </span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                Sustainable Development
              </span>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection

