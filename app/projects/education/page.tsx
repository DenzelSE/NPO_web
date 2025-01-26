import ImageGallery from "../../components/ImageGallery"

const educationImages = [
  {
    src: "/images/carousel/2019-06-06-00-50-32-197.jpg",
    alt: "Education Project Event 1",
    width: 400,
    height: 300,
    category: "event" as const,
    title: "Annual Science Fair",
    date: "2023-11-10",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Education Project Achievement 1",
    width: 400,
    height: 300,
    category: "achievement" as const,
    title: "100% Graduation Rate Achieved",
    date: "2023-12-15",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Education Project Engagement 1",
    width: 400,
    height: 300,
    category: "engagement" as const,
    title: "Parent-Teacher Conference",
    date: "2024-01-05",
  },
]

export default function Education() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Children's Education Initiative</h1>
      <p className="text-lg mb-8 text-gray-700">
        Our education initiative aims to provide quality education to underprivileged children, empowering them for a
        brighter future.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Initiative Goals</h2>
      <ul className="list-disc list-inside mb-8 text-gray-700">
        <li>Increase access to quality education</li>
        <li>Improve literacy and numeracy rates</li>
        <li>Provide essential school supplies and resources</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Success Stories</h2>
      <p className="text-lg mb-8 text-gray-700">
        We've helped over 5,000 children access quality education, with many going on to higher education and successful
        careers.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-pink-600">How You Can Help</h2>
      <ul className="list-disc list-inside mb-8 text-gray-700">
        <li>Sponsor a child's education</li>
        <li>Volunteer as a tutor or mentor</li>
        <li>Donate school supplies and educational materials</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Gallery</h2>
      <ImageGallery images={educationImages} />
    </div>
  )
}

