import ImageGallery from "../../components/ImageGallery"

const communityImages = [
  { src: "/placeholder.svg?height=300&width=400", alt: "Community Project Event 1", width: 400, height: 300 },
  { src: "/placeholder.svg?height=300&width=400", alt: "Community Project Achievement 1", width: 400, height: 300 },
  { src: "/placeholder.svg?height=300&width=400", alt: "Community Project Engagement 1", width: 400, height: 300 },
]

export default function Community() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Community-Based Project</h1>
      <p className="text-lg mb-8">
        Our community-based project focuses on addressing the unique needs of local communities and fostering
        sustainable growth and development.
      </p>
      <h2 className="text-2xl font-bold mb-4">Project Goals</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Improve local infrastructure</li>
        <li>Enhance community health services</li>
        <li>Promote local economic development</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Recent Updates</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Completed renovation of community center</li>
        <li>Launched mobile health clinic</li>
        <li>Established microfinance program for local entrepreneurs</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Community Impact</h2>
      <p className="text-lg mb-8">
        Our project has directly benefited over 10,000 community members, improving access to essential services and
        creating new economic opportunities.
      </p>
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      {/* <ImageGallery images={communityImages} /> */}
    </div>
  )
}

