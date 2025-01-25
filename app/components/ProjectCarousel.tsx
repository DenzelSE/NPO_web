"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const projects = [
  { id: 1, image: "/placeholder.svg?height=400&width=600" },
  { id: 2, image: "/placeholder.svg?height=400&width=600" },
  { id: 3, image: "/placeholder.svg?height=400&width=600" },
  { id: 4, image: "/placeholder.svg?height=400&width=600" },
  { id: 5, image: "/placeholder.svg?height=400&width=600" },
]

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full overflow-hidden h-96">
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {projects.concat(projects).map((project, index) => (
          <div key={`${project.id}-${index}`} className="w-full flex-shrink-0 px-2">
            <div className="relative h-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`Project image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectCarousel

