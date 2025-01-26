import ImageGallery from "../../components/ImageGallery"

const foundationImages = [
  {
    src: "/images/carousel/WhatsApp Image 2024-12-17 at 12.06.22_69a56246.jpg",
    alt: "Foundation Event 1",
    width: 400,
    height: 300,
    category: "event" as const,
    title: "Annual Fundraising Gala",
    date: "2023-05-15",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Foundation Achievement 1",
    width: 400,
    height: 300,
    category: "achievement" as const,
    title: "1000th Family Housed",
    date: "2023-06-30",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Foundation Engagement 1",
    width: 400,
    height: 300,
    category: "engagement" as const,
    title: "Community Outreach Program",
    date: "2023-07-10",
  },
]

export default function Foundation() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Our Foundation</h1>
      <p className="text-lg mb-8">
        Our foundation is dedicated to supporting sustainable development and community empowerment through various
        initiatives and partnerships.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Goals</h2>
      <ul className="list-disc list-inside mb-8 text-gray-700">
        <li>Promote sustainable development practices</li>
        <li>Empower local communities</li>
        <li>Foster partnerships for greater impact</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Milestones</h2>
      <ul className="list-disc list-inside mb-8 text-gray-700">
        <li>Established 50 community gardens</li>
        <li>Provided clean water to 100,000 people</li>
        <li>Launched 10 renewable energy projects</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4 text-pink-600">How We Operate</h2>
      <p className="text-lg mb-8 text-gray-700">
        We work closely with local partners, leveraging their expertise and our resources to implement sustainable
        solutions tailored to each community's needs.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Gallery</h2>
      <ImageGallery images={foundationImages} />
    </div>
  )
}

