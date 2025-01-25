import Image from "next/image"

const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
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

