"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, MapPin, Star, Users, Bed, Bath } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { lodges } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Link from "next/link";

export default function LodgesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");

  const filteredLodges = lodges.filter((lodge) => {
    const matchesSearch =
      lodge.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lodge.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || lodge.category === selectedCategory;

    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "budget" && lodge.price < 300) ||
      (priceRange === "mid" && lodge.price >= 300 && lodge.price < 500) ||
      (priceRange === "luxury" && lodge.price >= 500);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-earth-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-earth-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Discover Your Perfect Lodge
            </h1>
            <p className="text-xl text-earth-200 max-w-2xl mx-auto">
              Browse our collection of handpicked luxury retreats
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-earth-500" />
              <Input
                type="text"
                placeholder="Search lodges..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="romantic">Romantic</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Range Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="budget">Under $300</SelectItem>
                <SelectItem value="mid">$300 - $500</SelectItem>
                <SelectItem value="luxury">$500+</SelectItem>
              </SelectContent>
            </Select>

            {/* Filter Button */}
            <Button variant="outline" className="w-full">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-earth-900">
              {filteredLodges.length} Lodges Found
            </h2>
            <Select defaultValue="featured">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredLodges.map((lodge) => (
              <motion.div key={lodge.id} variants={fadeInUp}>
                <Link href={`/lodges/${lodge.id}`}>
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={lodge.images[0]}
                        alt={lodge.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <Badge className="bg-earth-700 text-white capitalize">
                          {lodge.category}
                        </Badge>
                        {lodge.featured && (
                          <Badge className="bg-yellow-500 text-white">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-earth-900">
                          {lodge.name}
                        </h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-semibold">
                            {lodge.rating}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center text-earth-600 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{lodge.location}</span>
                      </div>

                      <p className="text-earth-700 text-sm mb-4 line-clamp-2">
                        {lodge.shortDescription}
                      </p>

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

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <div className="text-2xl font-bold text-earth-900">
                            {formatCurrency(lodge.price)}
                          </div>
                          <div className="text-xs text-earth-600">per night</div>
                        </div>
                        <Button className="bg-earth-700 hover:bg-earth-800">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredLodges.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-earth-600">
                No lodges found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setPriceRange("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}