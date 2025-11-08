"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Lodge } from "@/types";

interface BookingData {
  lodge: Lodge | null;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  guestDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  specialRequests: string;
  totalPrice: number;
}

interface BookingContextType {
  bookingData: BookingData;
  updateBookingData: (data: Partial<BookingData>) => void;
  resetBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

const initialBookingData: BookingData = {
  lodge: null,
  checkIn: null,
  checkOut: null,
  guests: 2,
  guestDetails: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  specialRequests: "",
  totalPrice: 0,
};

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingData, setBookingData] = useState<BookingData>(initialBookingData);

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  };

  const resetBooking = () => {
    setBookingData(initialBookingData);
  };

  return (
    <BookingContext.Provider value={{ bookingData, updateBookingData, resetBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return context;
}