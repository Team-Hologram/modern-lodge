"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Step {
  id: number;
  name: string;
}

interface BookingTimelineProps {
  steps: Step[];
  currentStep: number;
}

const BookingTimeline: React.FC<BookingTimelineProps> = ({ steps, currentStep }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-10 z-40">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Circle */}
              <div className="flex flex-col items-center relative">
                <motion.div
                  initial={false}
                  animate={{
                    scale: currentStep === index ? 1.2 : 1,
                    backgroundColor:
                      currentStep > index
                        ? "#10b981"
                        : currentStep === index
                        ? "#f59e0b"
                        : "#374151",
                  }}
                  className="w-12 h-12 rounded-full flex items-center justify-center relative z-10"
                >
                  {currentStep > index ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                      <Check className="w-6 h-6 text-white" />
                    </motion.div>
                  ) : (
                    <span className="text-white font-bold">{index + 1}</span>
                  )}
                </motion.div>
                <span
                  className={`text-xs mt-2 font-semibold ${
                    currentStep >= index ? "text-white" : "text-gray-500"
                  }`}
                >
                  {step.name}
                </span>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-1 bg-gray-700 mx-2 relative overflow-hidden rounded">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{
                      width: currentStep > index ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-green-500"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingTimeline;