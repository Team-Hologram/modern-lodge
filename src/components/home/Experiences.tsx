"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const Experiences = () => {
  const difficultyColors = {
    easy: "bg-green-500",
    moderate: "bg-yellow-500",
    challenging: "bg-red-500",
  };

  return (
    <section className="py-24 bg-earth-900 text-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Unforgettable Experiences
            </h2>
            <p className="text-lg text-earth-200 max-w-2xl mx-auto">
              Adventure awaits with our curated selection of outdoor activities
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {experiences.map((experience) => (
            <motion.div key={experience.id} variants={fadeInUp}>
              <Card className="bg-earth-800 border-earth-700 overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
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
                  <h3 className="text-xl font-bold text-white mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-earth-200 text-sm mb-4 line-clamp-2">
                    {experience.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-earth-300">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {experience.duration}
                    </div>
                    <div className="text-xl font-bold text-white">
                      {formatCurrency(experience.price)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;