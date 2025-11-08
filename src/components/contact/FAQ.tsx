"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are your cancellation policies?",
      answer:
        "We offer flexible cancellation up to 48 hours before check-in for a full refund. Cancellations made within 48 hours are subject to a 50% charge. No-shows are non-refundable.",
    },
    {
      question: "Do you offer group bookings or event spaces?",
      answer:
        "Yes! We have several lodges that can accommodate large groups and special events. Contact our events team for custom packages and pricing for groups of 10 or more guests.",
    },
    {
      question: "Are pets allowed at the lodges?",
      answer:
        "Select lodges are pet-friendly. Please check the amenities section of each lodge listing or contact us directly to confirm pet policies and any associated fees.",
    },
    {
      question: "What activities are available nearby?",
      answer:
        "Our lodges offer access to hiking, skiing, mountain biking, fishing, wildlife viewing, and more. We also provide guided tours and can arrange transportation for various activities.",
    },
    {
      question: "Is transportation provided to and from the airport?",
      answer:
        "We offer complimentary airport shuttle service for stays of 3 nights or longer. For shorter stays, we can arrange private transportation for an additional fee.",
    },
    {
      question: "What's included in the nightly rate?",
      answer:
        "All stays include WiFi, parking, basic toiletries, linens, and access to lodge amenities. Some properties include breakfast and firewood. Check individual listings for details.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-earth-700 to-earth-800 rounded-2xl mb-6"
        >
          <HelpCircle className="h-8 w-8 text-white" />
        </motion.div>
        <h2 className="text-4xl font-display font-bold text-earth-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-earth-600 max-w-2xl mx-auto">
          Find quick answers to common questions about our lodges and services
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="border-2 border-earth-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between group"
                >
                  <h3 className="text-lg font-bold text-earth-900 pr-8 group-hover:text-earth-700 transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-earth-600" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-earth-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Still Have Questions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-center"
      >
        <Card className="max-w-2xl mx-auto bg-gradient-to-br from-earth-700 to-earth-800 border-0">
          <CardContent className="p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
            <p className="text-earth-200 mb-6">
              Our team is here to help you with any inquiries you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-earth-900 rounded-lg font-semibold hover:bg-earth-50 transition-colors"
              >
                Call Us Now
              </a>
              <a
                href="mailto:hello@alpinelodge.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-earth-900 transition-all"
              >
                Send an Email
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default FAQ;