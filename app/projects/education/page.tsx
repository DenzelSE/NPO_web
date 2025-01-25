import ImageGallery from "../../components/ImageGallery"

const educationImages = [
  { src: "/placeholder.svg?height=300&width=400", alt: "Education Project Event 1", width: 400, height: 300 },
  { src: "/placeholder.svg?height=300&width=400", alt: "Education Project Achievement 1", width: 400, height: 300 },
  { src: "/placeholder.svg?height=300&width=400", alt: "Education Project Engagement 1", width: 400, height: 300 },
]

export default function Education() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Children's Education Initiative</h1>
      <p className="text-lg mb-8">
        Our education initiative aims to provide quality education to underprivileged children, empowering them for a
        brighter future.
      </p>
      <h2 className="text-2xl font-bold mb-4">Initiative Goals</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Increase access to quality education</li>
        <li>Improve literacy and numeracy rates</li>
        <li>Provide essential school supplies and resources</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
      <p className="text-lg mb-8">
        We've helped over 5,000 children access quality education, with many going on to higher education and successful
        careers.
      </p>
      <h2 className="text-2xl font-bold mb-4">How You Can Help</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Sponsor a child's education</li>
        <li>Volunteer as a tutor or mentor</li>
        <li>Donate school supplies and educational materials</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      {/* <ImageGallery images={educationImages} /> */}
    </div>
  )
}

