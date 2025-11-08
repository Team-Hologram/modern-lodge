"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import BookingTimeline from "@/components/booking/BookingTimeline";
import LodgeSelection from "@/components/booking/LodgeSelection";
import DateSelection from "@/components/booking/DateSelection";
import GuestDetails from "@/components/booking/GuestDetails";
import PaymentSection from "@/components/booking/PaymentSection";
import BookingConfirmation from "@/components/booking/BookingConfirmation";
import { BookingProvider } from "@/contexts/BookingContext";

export default function BookingPage() {
  return (
    <BookingProvider>
      <BookingExperience />
    </BookingProvider>
  );
}

function BookingExperience() {
  const [currentStep, setCurrentStep] = useState(0);
  const searchParams = useSearchParams();
  const lodgeId = searchParams.get("lodge");

  const steps = [
    { id: 0, name: "Select Lodge", component: LodgeSelection },
    { id: 1, name: "Choose Dates", component: DateSelection },
    { id: 2, name: "Guest Details", component: GuestDetails },
    { id: 3, name: "Payment", component: PaymentSection },
    { id: 4, name: "Confirmation", component: BookingConfirmation },
  ];

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen pt-20 bg-white/5-to-br from-earth-900 via-earth-800 to-earth-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-earth-500 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-earth-600 rounded-full filter blur-3xl animate-pulse-slow delay-1000" />
      </div>

      {/* Timeline */}
      <BookingTimeline steps={steps} currentStep={currentStep} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <CurrentStepComponent
              onNext={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
              onBack={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
              currentStep={currentStep}
              totalSteps={steps.length}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}