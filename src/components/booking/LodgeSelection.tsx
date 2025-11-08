"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Users, Bed, Bath, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { lodges } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { useBooking } from "@/contexts/BookingContext";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface LodgeSelectionProps {
  onNext: () => void;
}

const LodgeSelection: React.FC<LodgeSelectionProps> = ({ onNext }) => {
  const { bookingData, updateBookingData } = useBooking();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLodgeId, setSelectedLodgeId] = useState<string | null>(
    bookingData.lodge?.id || null
  );

  const filteredLodges = lodges.filter((lodge) =>
    lodge.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectLodge = (lodgeId: string) => {
    const lodge = lodges.find((l) => l.id === lodgeId);
    if (lodge) {
      setSelectedLodgeId(lodgeId);
      updateBookingData({ lodge });
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-display font-bold text-black mb-4">
          Choose Your Sanctuary
        </h1>
        <p className="text-xl text-earth-400">
          Select the perfect lodge for your mountain escape
        </p>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <Input
          type="text"
          placeholder="Search lodges..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md mx-auto bg-black/10 border-black/20 text-black placeholder:text-black/50 backdrop-blur-sm"
        />
      </motion.div>

      {/* Lodge Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
      >
        {filteredLodges.map((lodge) => (
          <motion.div key={lodge.id} variants={fadeInUp}>
            <Card
              className={`group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 ${
                selectedLodgeId === lodge.id
                  ? "border-yellow-500 shadow-xl shadow-yellow-500/20"
                  : "border-white/10 bg-white/5 backdrop-blur-sm"
              }`}
              onClick={() => handleSelectLodge(lodge.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={lodge.images[0]}
                  alt={lodge.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                {selectedLodgeId === lodge.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 bg-yellow-500 rounded-full p-2"
                  >
                    <ChevronRight className="w-5 h-5 text-black" />
                  </motion.div>
                )}
                <Badge className="absolute top-4 left-4 bg-earth-700 text-white capitalize">
                  {lodge.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-black">{lodge.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-semibold text-black">
                      {lodge.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center text-earth-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{lodge.location}</span>
                </div>

                <div className="flex items-center gap-4 text-sm text-earth-600 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {lodge.capacity}
                  </div>
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    {lodge.bedrooms}
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    {lodge.bathrooms}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-bold text-black">
                      {formatCurrency(lodge.price)}
                    </div>
                    <div className="text-xs text-earth-600">per night</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Continue Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center"
      >
        <Button
          size="lg"
          onClick={onNext}
          disabled={!selectedLodgeId}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-12 py-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue to Dates
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default LodgeSelection;