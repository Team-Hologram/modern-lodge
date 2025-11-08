"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Mountain View Road",
      subcontent: "Aspen, Colorado 81611",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subcontent: "Mon-Fri: 9AM - 6PM MST",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@alpinelodge.com",
      subcontent: "We reply within 24 hours",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday - Friday",
      subcontent: "9:00 AM - 6:00 PM MST",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Contact Cards */}
      {contactDetails.map((detail, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="border-2 border-earth-200 hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${detail.color} flex items-center justify-center flex-shrink-0`}
                >
                  <detail.icon className="h-7 w-7 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-earth-900 mb-1">
                    {detail.title}
                  </h3>
                  <p className="text-earth-700 font-semibold">{detail.content}</p>
                  <p className="text-sm text-earth-600">{detail.subcontent}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      {/* Social Media */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="border-2 border-earth-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-earth-900 mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-earth-700 to-earth-800 flex items-center justify-center hover:shadow-lg transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </motion.a>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="border-2 border-red-200 bg-red-50">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-red-900 mb-2 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              24/7 Emergency Contact
            </h3>
            <p className="text-red-700 font-semibold text-xl">
              +1 (555) 911-HELP
            </p>
            <p className="text-sm text-red-600 mt-1">
              For urgent matters and guest emergencies
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;