"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { lodges } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const FeaturedLodges = () => {
  const featuredLodges = lodges.filter((lodge) => lodge.featured);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-earth-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-earth-900 mb-4">
              Featured Lodges
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              Handpicked luxury accommodations in the most stunning locations
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredLodges.map((lodge, index) => (
            <motion.div key={lodge.id} variants={fadeInUp}>
              <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={lodge.images[0]}
                    alt={lodge.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-earth-700 text-white">
                      {lodge.category}
                    </Badge>
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

                  <div className="flex items-center text-earth-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{lodge.location}</span>
                  </div>

                  <p className="text-earth-700 mb-4 line-clamp-2">
                    {lodge.shortDescription}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-earth-600">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">Up to {lodge.capacity} guests</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-earth-900">
                        {formatCurrency(lodge.price)}
                      </div>
                      <div className="text-xs text-earth-600">per night</div>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-earth-700 hover:bg-earth-800">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-earth-700 text-earth-700 hover:bg-earth-700 hover:text-white"
          >
            View All Lodges
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedLodges;