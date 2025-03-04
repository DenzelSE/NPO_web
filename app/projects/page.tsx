import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="py-10"></div>
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="relative h-48 mb-4">
            <Image
              src="/images/carousel/WhatsApp Image 2024-12-05 at 00.11.13_5d2c4a45.jpg"
              alt="Foundation Project"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Nelson Mandela Jerseys</h2>
          <p className="mb-4">
            Our foundation focuses on sustainable development and community empowerment through various initiatives and
            partnerships.
          </p>
          <Link href="/projects/foundation" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="relative h-48 mb-4">
            <Image
              src="/images/carousel/WhatsApp Image 2024-12-13 at 07.38.41_e90d02ae.jpg"
              alt="Community-Based Project"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Luteal Liberty</h2>
          <p className="mb-4">
            We work closely with local communities to address their unique needs and foster sustainable growth and
            development.
          </p>
          <Link href="/projects/luteal" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="relative h-48 mb-4">
            <Image
              src="/images/carousel/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg"
              alt="Children's Education"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Moving Garden</h2>
          <p className="mb-4">
            Our education initiative aims to provide quality education to underprivileged children, empowering them for
            a brighter future.
          </p>
          <Link href="/projects/education" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

