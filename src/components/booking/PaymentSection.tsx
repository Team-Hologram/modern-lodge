"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, CreditCard, Lock, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBooking } from "@/contexts/BookingContext";
import { formatCurrency } from "@/lib/utils";

interface PaymentSectionProps {
  onNext: () => void;
  onBack: () => void;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ onNext, onBack }) => {
  const { bookingData } = useBooking();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onNext();
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-display font-bold text-black mb-4">
          Secure Payment
        </h1>
        <p className="text-xl text-earth-400">
          Your payment information is encrypted and secure
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Payment Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="bg-black/10 backdrop-blur-md border-black/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Card Number */}
                <div>
                  <Label htmlFor="cardNumber" className="text-black mb-2 flex items-center">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Card Number
                  </Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="bg-black/10 border-black/20 text-black placeholder:text-black/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Expiry */}
                  <div>
                    <Label htmlFor="expiry" className="text-black mb-2 flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      Expiry
                    </Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      className="bg-black/10 border-black/20 text-black placeholder:text-black/50"
                    />
                  </div>

                  {/* CVV */}
                  <div>
                    <Label htmlFor="cvv" className="text-black mb-2 flex items-center">
                      <Lock className="h-4 w-4 mr-2" />
                      CVV
                    </Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      maxLength={3}
                      className="bg-black/10 border-black/20 text-black placeholder:text-black/50"
                    />
                  </div>
                </div>

                {/* Cardholder Name */}
                <div>
                  <Label htmlFor="cardName" className="text-black mb-2">
                    Cardholder Name
                  </Label>
                  <Input
                    id="cardName"
                    placeholder="John Doe"
                    className="bg-black/10 border-black/20 text-black placeholder:text-black/50"
                  />
                </div>

                {/* Security Notice */}
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-start">
                    <Lock className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="text-black font-semibold mb-1">Secure Payment</h4>
                      <p className="text-sm text-earth-800">
                        Your payment information is encrypted using 256-bit SSL encryption
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-1"
        >
          <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-md border-yellow-500/30 sticky top-32">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-black mb-6">
                Order Summary
              </h3>

              {bookingData.lodge && (
                <>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-black">
                      <span>Lodge</span>
                      <span className="font-semibold">{bookingData.lodge.name}</span>
                    </div>
                    <div className="flex justify-between text-black">
                      <span>Guests</span>
                      <span className="font-semibold">{bookingData.guests}</span>
                    </div>
                    <div className="flex justify-between text-black">
                      <span>Check-in</span>
                      <span className="font-semibold">
                        {bookingData.checkIn?.toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-black">
                      <span>Check-out</span>
                      <span className="font-semibold">
                        {bookingData.checkOut?.toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-black/20 pt-4 mb-6">
                    <div className="flex justify-between text-black mb-2">
                      <span>Subtotal</span>
                      <span>{formatCurrency(bookingData.totalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-black mb-2">
                      <span>Service Fee</span>
                      <span>{formatCurrency(bookingData.totalPrice * 0.1)}</span>
                    </div>
                    <div className="flex justify-between text-black font-bold text-xl mt-4">
                      <span>Total</span>
                      <span>{formatCurrency(bookingData.totalPrice * 1.1)}</span>
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
        transition={{ delay: 0.6 }}
        className="flex justify-between mt-8"
      >
        <Button
          variant="outline"
          size="lg"
          onClick={onBack}
          disabled={isProcessing}
          className="bg-black/10 border-black/20 text-black hover:bg-black/20"
        >
          <ChevronLeft className="mr-2 h-5 w-5" />
          Back
        </Button>
        <Button
          size="lg"
          onClick={handlePayment}
          disabled={isProcessing}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12"
        >
          {isProcessing ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="mr-2"
              >
                <Lock className="h-5 w-5" />
              </motion.div>
              Processing...
            </>
          ) : (
            <>
              <Lock className="mr-2 h-5 w-5" />
              Confirm Payment
            </>
          )}
        </Button>
      </motion.div>
    </div>
  );
};

export default PaymentSection;