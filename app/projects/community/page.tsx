import ImageGallery from "../../components/ImageGallery"

const communityImages = [
  {
    src: "/images/carousel/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg",
    alt: "Community Project Event 1",
    width: 400,
    height: 300,
    category: "event" as const,
    title: "Community Clean-up Day",
    date: "2023-08-05",
  },
  {
    src: "/images/carousel/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg",
    alt: "Community Project Achievement 1",
    width: 400,
    height: 300,
    category: "achievement" as const,
    title: "New Community Center Opening",
    date: "2023-09-15",
  },
  {
    src: "/images/carousel/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg",
    alt: "Community Project Engagement 1",
    width: 400,
    height: 300,
    category: "engagement" as const,
    title: "Youth Leadership Workshop",
    date: "2023-10-01",
  },
]

export default function Community() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Community-Based Project</h1>
      <p className="text-lg mb-8 text-gray-700">
        Our community-based project focuses on addressing the unique needs of local communities and fostering
        sustainable growth and development.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Project Goals</h2>
      <ul className="list-disc list-inside mb-8 text-gray-700">
        <li>Improve local infrastructure</li>
        <li>Enhance community health services</li>
        <li>Promote local economic development</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Recent Updates</h2>
      <ul className="list-disc list-inside mb-8 text-gray-700">
        <li>Completed renovation of community center</li>
        <li>Launched mobile health clinic</li>
        <li>Established microfinance program for local entrepreneurs</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Community Impact</h2>
      <p className="text-lg mb-8 text-gray-700">
        Our project has directly benefited over 10,000 community members, improving access to essential services and
        creating new economic opportunities.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Gallery</h2>
      <ImageGallery images={communityImages} />
    </div>
  )
}

