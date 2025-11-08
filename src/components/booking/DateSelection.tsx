"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useBooking } from "@/contexts/BookingContext";
import { formatCurrency, calculateNights } from "@/lib/utils";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface DateSelectionProps {
  onNext: () => void;
  onBack: () => void;
}

const DateSelection: React.FC<DateSelectionProps> = ({ onNext, onBack }) => {
  const { bookingData, updateBookingData } = useBooking();
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: bookingData.checkIn || undefined,
    to: bookingData.checkOut || undefined,
  });
  const [guests, setGuests] = useState(bookingData.guests);

  const handleContinue = () => {
    if (dateRange?.from && dateRange?.to) {
      const nights = calculateNights(dateRange.from, dateRange.to);
      const totalPrice = (bookingData.lodge?.price || 0) * nights;
      
      updateBookingData({
        checkIn: dateRange.from,
        checkOut: dateRange.to,
        guests,
        totalPrice,
      });
      onNext();
    }
  };

  const nights = dateRange?.from && dateRange?.to 
    ? calculateNights(dateRange.from, dateRange.to) 
    : 0;
  const totalPrice = (bookingData.lodge?.price || 0) * nights;

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-display font-bold text-white mb-4">
          When Will You Arrive?
        </h1>
        <p className="text-xl text-earth-200">
          Select your check-in and check-out dates
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <style jsx global>{`
                .rdp {
                  --rdp-cell-size: 50px;
                  --rdp-accent-color: #f59e0b;
                  --rdp-background-color: rgba(245, 158, 11, 0.1);
                  margin: 0;
                }
                .rdp-months {
                  justify-content: center;
                }
                .rdp-caption {
                  color: white;
                  font-weight: bold;
                  font-size: 1.125rem;
                }
                .rdp-head_cell {
                  color: rgba(255, 255, 255, 0.7);
                  font-weight: 600;
                }
                .rdp-cell {
                  color: white;
                }
                .rdp-day {
                  border-radius: 8px;
                }
                .rdp-day:hover {
                  background-color: rgba(245, 158, 11, 0.2);
                }
                .rdp-day_selected {
                  background-color: #f59e0b !important;
                  color: white !important;
                }
                .rdp-day_range_middle {
                  background-color: rgba(245, 158, 11, 0.3) !important;
                }
              `}</style>
              <DayPicker
                mode="range"
                selected={dateRange}
                onSelect={setDateRange}
                disabled={{ before: new Date() }}
                numberOfMonths={2}
              />
            </CardContent>
          </Card>

          {/* Guest Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-yellow-500 mr-3" />
                    <div>
                      <h3 className="text-white font-semibold">Guests</h3>
                      <p className="text-sm text-earth-300">
                        Maximum: {bookingData.lodge?.capacity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      -
                    </Button>
                    <span className="text-2xl font-bold text-white w-12 text-center">
                      {guests}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        setGuests(Math.min(bookingData.lodge?.capacity || 10, guests + 1))
                      }
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Booking Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-1"
        >
          <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-md border-yellow-500/30 sticky top-32">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Booking Summary
              </h3>

              {bookingData.lodge && (
                <>
                  <div className="mb-6">
                    <img
                      src={bookingData.lodge.images[0]}
                      alt={bookingData.lodge.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="text-lg font-semibold text-white">
                      {bookingData.lodge.name}
                    </h4>
                    <p className="text-sm text-earth-200">
                      {bookingData.lodge.location}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-white">
                      <span>Check-in</span>
                      <span className="font-semibold">
                        {dateRange?.from?.toLocaleDateString() || "—"}
                      </span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>Check-out</span>
                      <span className="font-semibold">
                        {dateRange?.to?.toLocaleDateString() || "—"}
                      </span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>Guests</span>
                      <span className="font-semibold">{guests}</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>Nights</span>
                      <span className="font-semibold">{nights || "—"}</span>
                    </div>
                  </div>

                  <div className="border-t border-white/20 pt-4 mb-6">
                    <div className="flex justify-between text-white mb-2">
                      <span>
                        {formatCurrency(bookingData.lodge.price)} × {nights} nights
                      </span>
                      <span>{formatCurrency(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-white font-bold text-xl">
                      <span>Total</span>
                      <span>{formatCurrency(totalPrice)}</span>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
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
          disabled={!dateRange?.from || !dateRange?.to}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-12 disabled:opacity-50"
        >
          Continue
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default DateSelection;