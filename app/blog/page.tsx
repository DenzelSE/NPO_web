import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "New Community Center Opens",
    date: "2023-07-15",
    excerpt: "We're excited to announce the opening of our new community center...",
  },
  {
    id: 2,
    title: "Education Program Reaches Milestone",
    date: "2023-07-01",
    excerpt: "Our children's education program has successfully...",
  },
  {
    id: 3,
    title: "Foundation Launches New Initiative",
    date: "2023-06-20",
    excerpt: "We're proud to announce the launch of our new sustainability initiative...",
  },
]

export default function Blog() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog & Updates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <p className="mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

