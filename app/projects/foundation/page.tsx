import ImageGallery from "../../components/ImageGallery"

const foundationImages = [
  { src: "/placeholder.svg?height=300&width=400", alt: "Foundation Event 1", width: 400, height: 300 },
  { src: "/placeholder.svg?height=300&width=400", alt: "Foundation Achievement 1", width: 400, height: 300 },
  { src: "/placeholder.svg?height=300&width=400", alt: "Foundation Engagement 1", width: 400, height: 300 },
]

export default function Foundation() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Foundation</h1>
      <p className="text-lg mb-8">
        Our foundation is dedicated to supporting sustainable development and community empowerment through various
        initiatives and partnerships.
      </p>
      <h2 className="text-2xl font-bold mb-4">Goals</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Promote sustainable development practices</li>
        <li>Empower local communities</li>
        <li>Foster partnerships for greater impact</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Milestones</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Established 50 community gardens</li>
        <li>Provided clean water to 100,000 people</li>
        <li>Launched 10 renewable energy projects</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">How We Operate</h2>
      <p className="text-lg mb-8">
        We work closely with local partners, leveraging their expertise and our resources to implement sustainable
        solutions tailored to each community's needs.
      </p>
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      {/* <ImageGallery images={foundationImages} /> */}
    </div>
  )
}

