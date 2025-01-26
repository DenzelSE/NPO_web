import Image from "next/image"

const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/carousel/WhatsApp Image 2024-12-13 at 07.38.41_e90d02ae.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  )
}

export default BackgroundImage

