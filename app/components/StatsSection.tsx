import { Heart, Users, GraduationCap, Home } from "lucide-react"

const stats = [
  { icon: Heart, value: "50+", label: "Community Projects Completed" },
  { icon: Users, value: "10k+", label: "Lives Impacted" },
  { icon: GraduationCap, value: "5k+", label: "Children Educated" },
  { icon: Home, value: "20+", label: "Communities Served" },
]

const StatsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <stat.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-red-600">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

