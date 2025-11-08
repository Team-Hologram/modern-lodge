"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ExperiencesPage() {
  const difficultyColors = {
    easy: "bg-green-500",
    moderate: "bg-yellow-500",
    challenging: "bg-red-500",
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-earth-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-earth-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Adventure Awaits
            </h1>
            <p className="text-xl text-earth-200 max-w-2xl mx-auto">
              Explore our curated selection of outdoor experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {experiences.map((experience) => (
              <motion.div key={experience.id} variants={fadeInUp}>
                <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={difficultyColors[experience.difficulty]}>
                        {experience.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-earth-900 mb-3">
                      {experience.title}
                    </h3>
                    <p className="text-earth-700 mb-4">
                      {experience.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-earth-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-earth-900">
                        {formatCurrency(experience.price)}
                      </div>
                    </div>

                    <Button className="w-full bg-earth-700 hover:bg-earth-800">
                      Book Experience
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}