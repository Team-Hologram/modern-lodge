"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const steps = [
    { id: 0, name: "Select Lodge" },
    { id: 1, name: "Choose Dates" },
    { id: 2, name: "Guest Details" },
    { id: 3, name: "Payment" },
    { id: 4, name: "Confirmation" },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <LodgeSelection onNext={handleNext} />;
      case 1:
        return <DateSelection onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <GuestDetails onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <PaymentSection onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <BookingConfirmation />;
      default:
        return <LodgeSelection onNext={handleNext} />;
    }
  };

  return (
    <div className="min-h-screen pt-20 from-earth-900 via-earth-800 to-earth-900 relative overflow-hidden">
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
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}