const DecorativeDots = () => {
    return (
      <>
        {/* Right side dots */}
        <div className="absolute top-0 -right-8 h-full">
          <div className="grid grid-cols-1 gap-2 h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={`right-${i}`} className="w-2 h-2 rounded-full bg-pink-500" />
            ))}
          </div>
        </div>
  
        {/* Bottom side dots */}
        <div className="absolute -bottom-8 left-0 w-full">
          <div className="grid grid-cols-20 gap-2 w-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={`bottom-${i}`} className="w-2 h-2 rounded-full bg-pink-500" />
            ))}
          </div>
        </div>
  
        {/* Corner dots - additional dots to fill the corner */}
        <div className="absolute -bottom-8 -right-8">
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={`corner-${i}`} className="w-2 h-2 rounded-full bg-pink-500" />
            ))}
          </div>
        </div>
      </>
    )
  }
  
  export default DecorativeDots
  
  