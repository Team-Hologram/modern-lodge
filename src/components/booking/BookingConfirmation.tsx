"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Download, Mail, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useBooking } from "@/contexts/BookingContext";
import { formatCurrency } from "@/lib/utils";
import confetti from "canvas-confetti";

const BookingConfirmation: React.FC = () => {
  const { bookingData } = useBooking();

  useEffect(() => {
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Check className="w-12 h-12 text-black" />
        </motion.div>
        <h1 className="text-5xl font-display font-bold text-black mb-4">
          Booking Confirmed!
        </h1>
        <p className="text-xl text-earth-400">
          Your mountain escape is all set
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-black/10 backdrop-blur-md border-black/20 mb-6">
          <CardContent className="p-8">
            {bookingData.lodge && (
              <>
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={bookingData.lodge.images[0]}
                    alt={bookingData.lodge.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-black mb-2">
                      {bookingData.lodge.name}
                    </h2>
                    <div className="flex items-center text-earth-700 mb-1">
                      <MapPin className="h-4 w-4 mr-2" />
                      {bookingData.lodge.location}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/5 rounded-lg p-4">
                    <div className="flex items-center text-earth-700 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">Check-in</span>
                    </div>
                    <p className="text-black font-semibold">
                      {bookingData.checkIn?.toLocaleDateString()}
                    </p>
                  </div>
                  <div className="bg-black/5 rounded-lg p-4">
                    <div className="flex items-center text-earth-700 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">Check-out</span>
                    </div>
                    <p className="text-black font-semibold">
                      {bookingData.checkOut?.toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="bg-black/5 rounded-lg p-4 mb-6">
                  <div className="flex items-center text-earth-700 mb-2">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">Guests</span>
                  </div>
                  <p className="text-black font-semibold">{bookingData.guests} guests</p>
                </div>

                <div className="border-t border-black/20 pt-6">
                  <div className="flex justify-between text-black text-xl font-bold">
                    <span>Total Paid</span>
                    <span>{formatCurrency(bookingData.totalPrice * 1.1)}</span>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          <Button
            size="lg"
            className="bg-black/10 border border-black/20 text-black hover:bg-black/20"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Receipt
          </Button>
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
          >
            <Mail className="mr-2 h-5 w-5" />
            Email Confirmation
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BookingConfirmation;