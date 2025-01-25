export default function Contact() {
    return (
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    )
  }
  
  