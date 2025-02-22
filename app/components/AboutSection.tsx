import { ArrowRight } from "lucide-react"
import Link from "next/link"

const AboutSection = () => {
  return (
    <section className="min-h-screen about-section text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">About Africa Refined</h2>

          <p className="text-lg mb-6">
            Africa Refined is a community-based initiatives established in 2024 merging a selection of projects into a
            collective that focuses on Community Development, Health Education, and Empowerment across communities in
            South Africa.
          </p>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg mb-6">
              To drive sustainability, health, and empowerment within communities through impactful engagements.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-lg mb-6">
              To engender a community of knowledgeable individuals who empower one another in solidarity.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Social entrepreneurship</li>
              <li>Reproductive health and well-being</li>
              <li>Climate Action through sustainable agriculture</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Key Focus Areas</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/30 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Education and Awareness</h4>
                <p>
                  Providing educational programs and raising awareness about critical issues like health, agriculture,
                  and sustainable development.
                </p>
              </div>

              <div className="bg-black/30 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Health and Well-being</h4>
                <p>
                  Implementing health programs that address local health challenges, promote hygiene, and improve access
                  to medical services.
                </p>
              </div>

              <div className="bg-black/30 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Sustainable Development</h4>
                <p>
                  Encouraging sustainable practices in agriculture, energy use, and resource management to support
                  long-term environmental and economic health.
                </p>
              </div>

              <div className="bg-black/30 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Community Resilience</h4>
                <p>
                  Strengthening community structures and fostering resilience to cope with challenges such as climate
                  change, economic instability, and health crises.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Get Involved
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

