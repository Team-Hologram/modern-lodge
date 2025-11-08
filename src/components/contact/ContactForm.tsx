"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden border-2 border-earth-200 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-display font-bold text-earth-900 mb-2">
              Send us a Message
            </h2>
            <p className="text-earth-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start"
            >
              <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
              <div>
                <h4 className="text-green-900 font-semibold">Message Sent!</h4>
                <p className="text-green-700 text-sm">
                  Thank you for contacting us. We'll respond shortly.
                </p>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <Label htmlFor="name" className="flex items-center mb-2">
                <User className="h-4 w-4 mr-2 text-earth-600" />
                Your Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-earth-500"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="flex items-center mb-2">
                <Mail className="h-4 w-4 mr-2 text-earth-600" />
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@example.com"
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-earth-500"
              />
            </div>

            {/* Subject */}
            <div>
              <Label htmlFor="subject" className="flex items-center mb-2">
                <MessageSquare className="h-4 w-4 mr-2 text-earth-600" />
                Subject
              </Label>
              <Select
                value={formData.subject}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, subject: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="booking">Booking Inquiry</SelectItem>
                  <SelectItem value="general">General Question</SelectItem>
                  <SelectItem value="support">Customer Support</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message" className="flex items-center mb-2">
                <MessageSquare className="h-4 w-4 mr-2 text-earth-600" />
                Your Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what's on your mind..."
                rows={6}
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-earth-500"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-earth-700 to-earth-800 hover:from-earth-800 hover:to-earth-900 text-white py-6 text-lg font-semibold"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="mr-2"
                  >
                    <Send className="h-5 w-5" />
                  </motion.div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;