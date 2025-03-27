"use client"

import type React from "react"
import { useState } from "react"
import FormModal from "../components/FormModal"
import { Loader2, Send } from "lucide-react"

export default function GetInvolved() {
  const [activeModal, setActiveModal] = useState<"donate" | "volunteer" | "partner" | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  // Donation form state
  const [donateForm, setDonateForm] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  })

  // Volunteer form state
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    interests: "",
    availability: "",
    experience: "",
  })

  // Partner form state
  const [partnerForm, setPartnerForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: "",
  })

  const handleDonateChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setDonateForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleVolunteerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setVolunteerForm((prev) => ({ ...prev, [name]: value }))
  }

  const handlePartnerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setPartnerForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent, formType: "donate" | "volunteer" | "partner") => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      // In a real application, you would send this data to your backend
      console.log(
        `${formType} form data:`,
        formType === "donate" ? donateForm : formType === "volunteer" ? volunteerForm : partnerForm,
      )

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setFormStatus({
        success: true,
        message:
          formType === "donate"
            ? "Thank you for your donation interest! We'll contact you with payment details."
            : formType === "volunteer"
              ? "Thank you for your interest in volunteering! We'll be in touch soon."
              : "Thank you for your partnership interest! Our team will contact you shortly.",
      })

      // Reset form after success
      setTimeout(() => {
        setActiveModal(null)
        setFormStatus(null)

        // Reset the specific form
        if (formType === "donate") {
          setDonateForm({ name: "", email: "", amount: "", message: "" })
        } else if (formType === "volunteer") {
          setVolunteerForm({ name: "", email: "", phone: "", interests: "", availability: "", experience: "" })
        } else {
          setPartnerForm({ name: "", organization: "", email: "", phone: "", partnershipType: "", message: "" })
        }
      }, 2000)
    } catch (error) {
      setFormStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-6 py-40">
      <h1 className="text-4xl font-bold mb-8">Get Involved</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Donate</h2>
          <p className="mb-4">Your financial support helps us continue our mission and expand our impact.</p>
          <button
            onClick={() => setActiveModal("donate")}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Donate Now
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Volunteer</h2>
          <p className="mb-4">Join our team of dedicated volunteers and make a difference in your community.</p>
          <button
            onClick={() => setActiveModal("volunteer")}
            className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
          >
            Volunteer
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Partner With Us</h2>
          <p className="mb-4">Explore partnership opportunities to amplify our collective impact.</p>
          <button
            onClick={() => setActiveModal("partner")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Donate Modal */}
      <FormModal isOpen={activeModal === "donate"} onClose={() => setActiveModal(null)} title="Make a Donation">
        {formStatus && (
          <div
            className={`${
              formStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            } p-4 rounded-lg mb-6`}
          >
            {formStatus.message}
          </div>
        )}

        <form onSubmit={(e) => handleSubmit(e, "donate")} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={donateForm.name}
              onChange={handleDonateChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={donateForm.email}
              onChange={handleDonateChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Donation Amount (ZAR)
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={donateForm.amount}
              onChange={handleDonateChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
              placeholder="e.g. 500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={donateForm.message}
              onChange={handleDonateChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              disabled={isSubmitting}
              placeholder="Tell us why you're donating or if you'd like your donation to go to a specific project"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Donation
              </>
            )}
          </button>

          <p className="text-sm text-gray-500 text-center mt-2">
            We'll contact you with payment details after you submit this form.
          </p>
        </form>
      </FormModal>

      {/* Volunteer Modal */}
      <FormModal isOpen={activeModal === "volunteer"} onClose={() => setActiveModal(null)} title="Volunteer With Us">
        {formStatus && (
          <div
            className={`${
              formStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            } p-4 rounded-lg mb-6`}
          >
            {formStatus.message}
          </div>
        )}

        <form onSubmit={(e) => handleSubmit(e, "volunteer")} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={volunteerForm.name}
              onChange={handleVolunteerChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={volunteerForm.email}
              onChange={handleVolunteerChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={volunteerForm.phone}
              onChange={handleVolunteerChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
              Areas of Interest
            </label>
            <select
              id="interests"
              name="interests"
              value={volunteerForm.interests}
              onChange={handleVolunteerChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
            >
              <option value="">Select an area</option>
              <option value="education">Education Programs</option>
              <option value="community">Community Outreach</option>
              <option value="health">Health Initiatives</option>
              <option value="fundraising">Fundraising</option>
              <option value="admin">Administrative Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              value={volunteerForm.availability}
              onChange={handleVolunteerChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
            >
              <option value="">Select availability</option>
              <option value="weekdays">Weekdays</option>
              <option value="weekends">Weekends</option>
              <option value="evenings">Evenings</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
              Relevant Experience (Optional)
            </label>
            <textarea
              id="experience"
              name="experience"
              rows={3}
              value={volunteerForm.experience}
              onChange={handleVolunteerChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Application
              </>
            )}
          </button>
        </form>
      </FormModal>

      {/* Partner Modal */}
      <FormModal isOpen={activeModal === "partner"} onClose={() => setActiveModal(null)} title="Partner With Us">
        {formStatus && (
          <div
            className={`${
              formStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            } p-4 rounded-lg mb-6`}
          >
            {formStatus.message}
          </div>
        )}

        <form onSubmit={(e) => handleSubmit(e, "partner")} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Person
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={partnerForm.name}
              onChange={handlePartnerChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
              Organization Name
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={partnerForm.organization}
              onChange={handlePartnerChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={partnerForm.email}
              onChange={handlePartnerChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={partnerForm.phone}
              onChange={handlePartnerChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-1">
              Partnership Type
            </label>
            <select
              id="partnershipType"
              name="partnershipType"
              value={partnerForm.partnershipType}
              onChange={handlePartnerChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
            >
              <option value="">Select partnership type</option>
              <option value="corporate">Corporate Partnership</option>
              <option value="ngo">NGO Collaboration</option>
              <option value="funding">Funding Organization</option>
              <option value="media">Media Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Partnership Proposal
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={partnerForm.message}
              onChange={handlePartnerChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
              placeholder="Please describe how you'd like to partner with us"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Proposal
              </>
            )}
          </button>
        </form>
      </FormModal>
    </div>
  )
}

