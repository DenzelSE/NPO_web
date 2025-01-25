import Image from "next/image"
import { useState } from "react"

interface ImageCardProps {
  src: string
  alt: string
  category: "event" | "achievement" | "engagement"
  title: string
  date: string
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, category, title, date }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="relative h-64">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className={`duration-700 ease-in-out ${isLoading ? "scale-110 blur-lg" : "scale-100 blur-0"}`}
          onLoadingComplete={() => setIsLoading(false)}
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              category === "event"
                ? "bg-blue-100 text-blue-600"
                : category === "achievement"
                  ? "bg-green-100 text-green-600"
                  : "bg-purple-100 text-purple-600"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{date}</p>
      </div>
    </div>
  )
}

export default ImageCard

