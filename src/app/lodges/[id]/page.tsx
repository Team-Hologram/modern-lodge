"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import {
  Star,
  MapPin,
  Users,
  Bed,
  Bath,
  Wifi,
  Car,
  Coffee,
  Wind,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { lodges } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export default function LodgeDetailPage() {
  const params = useParams();
  const lodge = lodges.find((l) => l.id === params.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!lodge) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-earth-900 mb-4">
            Lodge Not Found
          </h1>
          <p className="text-earth-600">
            The lodge you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === lodge.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? lodge.images.length - 1 : prev - 1
    );
  };

  const amenityIcons: { [key: string]: React.ReactNode } = {
    WiFi: <Wifi className="h-5 w-5" />,
    Parking: <Car className="h-5 w-5" />,
    Kitchen: <Coffee className="h-5 w-5" />,
    "Air Conditioning": <Wind className="h-5 w-5" />,
  };

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Image Gallery */}
      <section className="relative h-[70vh] bg-black">
        <motion.img
          key={currentImageIndex}
          src={lodge.images[currentImageIndex]}
          alt={lodge.name}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full transition-all"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {lodge.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className="mb-2 capitalize">{lodge.category}</Badge>
                  <h1 className="text-4xl font-display font-bold text-earth-900 mb-2">
                    {lodge.name}
                  </h1>
                  <div className="flex items-center gap-4 text-earth-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {lodge.location}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      {lodge.rating} ({lodge.reviews} reviews)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="p-4 text-center">
                  <Users className="h-6 w-6 mx-auto mb-2 text-earth-700" />
                  <div className="text-2xl font-bold text-earth-900">
                    {lodge.capacity}
                  </div>
                  <div className="text-sm text-earth-600">Guests</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Bed className="h-6 w-6 mx-auto mb-2 text-earth-700" />
                  <div className="text-2xl font-bold text-earth-900">
                    {lodge.bedrooms}
                  </div>
                  <div className="text-sm text-earth-600">Bedrooms</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Bath className="h-6 w-6 mx-auto mb-2 text-earth-700" />
                  <div className="text-2xl font-bold text-earth-900">
                    {lodge.bathrooms}
                  </div>
                  <div className="text-sm text-earth-600">Bathrooms</div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-6">
                <p className="text-earth-700 leading-relaxed">
                  {lodge.description}
                </p>
              </TabsContent>
              <TabsContent value="amenities" className="mt-6">
                <div className="grid grid-cols-2 gap-4">
                  {lodge.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-3 p-3 bg-earth-50 rounded-lg"
                    >
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-earth-900">{amenity}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="location" className="mt-6">
                <div className="bg-earth-100 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-earth-600">Map integration would go here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-earth-900 mb-1">
                    {formatCurrency(lodge.price)}
                  </div>
                  <div className="text-sm text-earth-600">per night</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-semibold text-earth-900 mb-2 block">
                      Check-in
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-earth-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-earth-900 mb-2 block">
                      Check-out
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-earth-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-earth-900 mb-2 block">
                      Guests
                    </label>
                    <select className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-earth-500">
                      {[...Array(lodge.capacity)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1} {i === 0 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <Button className="w-full bg-earth-700 hover:bg-earth-800 mb-4">
                  Reserve Now
                </Button>

                <p className="text-xs text-center text-earth-600">
                  You won't be charged yet
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}