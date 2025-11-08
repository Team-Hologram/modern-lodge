"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, User, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useBooking } from "@/contexts/BookingContext";

interface GuestDetailsProps {
  onNext: () => void;
  onBack: () => void;
}

const GuestDetails: React.FC<GuestDetailsProps> = ({ onNext, onBack }) => {
  const { bookingData, updateBookingData } = useBooking();
  const [formData, setFormData] = useState({
    firstName: bookingData.guestDetails.firstName,
    lastName: bookingData.guestDetails.lastName,
    email: bookingData.guestDetails.email,
    phone: bookingData.guestDetails.phone,
    specialRequests: bookingData.specialRequests,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = "Phone is invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) {
      updateBookingData({
        guestDetails: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
        },
        specialRequests: formData.specialRequests,
      });
      onNext();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-display font-bold text-black mb-4">
          Your Information
        </h1>
        <p className="text-xl text-earth-400">
          Tell us about yourself
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-black/10 backdrop-blur-md border-black/20">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <Label htmlFor="firstName" className="text-black mb-2 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-black/10 border-black/20 text-black placeholder:text-black/50"
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <Label htmlFor="lastName" className="text-black mb-2 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-black/10 border-black/20 text-black placeholder:text-black/50"
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-black mb-2 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black/10 border-black/20 text-black placeholder:text-black/50"
                  placeholder="john.doe@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-black mb-2 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-black/10 border-black/20 text-black placeholder:text-black/50"
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Special Requests */}
              <div className="md:col-span-2">
                <Label htmlFor="specialRequests" className="text-black mb-2 flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Special Requests (Optional)
                </Label>
                <Textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="bg-black/10 border-black/20 text-black placeholder:text-black/50"
                  placeholder="Any special requests or requirements..."
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex justify-between mt-8"
      >
        <Button
          variant="outline"
          size="lg"
          onClick={onBack}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <ChevronLeft className="mr-2 h-5 w-5" />
          Back
        </Button>
        <Button
          size="lg"
          onClick={handleContinue}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-12"
        >
          Continue to Payment
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default GuestDetails;