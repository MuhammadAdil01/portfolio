"use client"

import { useState, ChangeEvent, FormEvent } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import emailjs from "@emailjs/browser"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "", 
    email: "", 
    phone: "", 
    message: "",
  })
  const [isSending, setIsSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        { 
          ...formData, 
          from_name: formData.name, 
          from_email: formData.email 
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setSent(true)
        setIsSending(false)
        setFormData({ name: "", email: "", phone: "", message: "" })
      })
      .catch((error) => {
        console.error("Email send error:", error)
        setIsSending(false)
      })
  }

  const inputFields = [
    { name: "name", type: "text", placeholder: "Full Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "phone", type: "tel", placeholder: "Phone Number" }
  ]

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img 
            src="/contact.png" 
            alt="Contact" 
            className="w-full h-[480px] object-cover" 
          />
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl p-8 shadow-lg border"
        >
          <h2 className="text-4xl font-bold mb-6 text-orange-600">Lets Connect</h2>
          <p className="text-orange-700 mb-8">
            I'd love to hear about your project. Fill in the details below and I'll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {inputFields.map((field) => (
              <Input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                required
                className="border-orange-200 focus:border-orange-400 focus:ring-orange-400"
              />
            ))}
            
            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border-orange-200 focus:border-orange-400 focus:ring-orange-400 min-h-[120px]"
            />

            <Button
              type="submit"
              disabled={isSending}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              {isSending ? "Sending..." : sent ? "Sent!" : "Send Message"}
            </Button>
          </form>

          {/* Contact Details */}
          <div className="mt-8 text-orange-700 space-y-2">
            <p><strong>Phone:</strong> (+92) 3061812343</p>
            <p><strong>Location:</strong> Bahawalpur, Pakistan</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}