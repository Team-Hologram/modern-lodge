"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactMap = () => {
  const locations = [
    {
      name: "Main Office",
      address: "123 Mountain View Road, Aspen, CO 81611",
      coordinates: { lat: 39.1911, lng: -106.8175 },
    },
    {
      name: "Guest Services",
      address: "456 Alpine Way, Aspen, CO 81611",
      coordinates: { lat: 39.1871, lng: -106.8227 },
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-display font-bold text-earth-900 mb-4">
          Find Us Here
        </h2>
        <p className="text-lg text-earth-600 max-w-2xl mx-auto">
          Visit our offices or reach out for directions to our lodge locations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Placeholder */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden border-2 border-earth-200 h-full">
            <CardContent className="p-0">
              <div className="relative w-full h-[500px] bg-gradient-to-br from-earth-100 to-earth-200 flex items-center justify-center">
                {/* This would be replaced with actual map integration (Google Maps, Mapbox, etc.) */}
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-earth-600 mx-auto mb-4" />
                  <p className="text-earth-700 font-semibold text-lg">
                    Interactive Map
                  </p>
                  <p className="text-earth-600 text-sm">
                    Integrate with Google Maps or Mapbox
                  </p>
                </div>

                {/* Location Markers Overlay */}
                <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3">
                  <p className="text-sm font-semibold text-earth-900">
                    📍 Aspen, Colorado
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location Details */}
        <div className="space-y-4">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-2 border-earth-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-earth-900 mb-2 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-earth-600" />
                    {location.name}
                  </h3>
                  <p className="text-earth-700 mb-4">{location.address}</p>
                  <Button
                    variant="outline"
                    className="w-full border-earth-300 hover:bg-earth-50"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Quick Info */}
          <Card className="bg-gradient-to-br from-earth-700 to-earth-800 border-0">
            <CardContent className="p-6 text-white">
              <h3 className="text-lg font-bold mb-3">Getting Here</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">✈️</span>
                  <span>15 min from Aspen Airport</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🚗</span>
                  <span>Free parking available</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🚌</span>
                  <span>Public transit accessible</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMap;