"use client"

import { X } from "lucide-react"
import type { ReactNode } from "react"

interface FormModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export default function FormModal({ isOpen, onClose, title, children }: FormModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  )
}

