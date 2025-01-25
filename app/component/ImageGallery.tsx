"use client"

import { useState } from "react"
import ImageCard from "./ImageCard"

interface GalleryImage {
  src: string
  alt: string
  category: "event" | "achievement" | "engagement"
  title: string
  date: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [filter, setFilter] = useState<"all" | "event" | "achievement" | "engagement">("all")

  const filteredImages = filter === "all" ? images : images.filter((image) => image.category === filter)

  return (
    <div>
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full transition-colors ${
            filter === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("event")}
          className={`px-4 py-2 rounded-full transition-colors ${
            filter === "event" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Events
        </button>
        <button
          onClick={() => setFilter("achievement")}
          className={`px-4 py-2 rounded-full transition-colors ${
            filter === "achievement" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Achievements
        </button>
        <button
          onClick={() => setFilter("engagement")}
          className={`px-4 py-2 rounded-full transition-colors ${
            filter === "engagement" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Engagements
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredImages.map((image, index) => (
          <ImageCard key={index} {...image} />
        ))}
      </div>
    </div>
  )
}

export default ImageGallery

