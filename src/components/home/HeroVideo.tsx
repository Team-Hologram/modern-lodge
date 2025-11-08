"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";
import Link from "next/link";

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="hero-content text-6xl md:text-8xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Escape to Paradise
          </motion.h1>

          <motion.p
            className="hero-content text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Luxury mountain lodges where memories are made
          </motion.p>

          <motion.div
            className="hero-content flex gap-6 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <MagneticButton>
              <Link href="/lodges">
                <Button size="lg" className="bg-white text-earth-900 hover:bg-earth-50">
                  Explore Now
                </Button>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Video Control */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-8 right-8 z-20 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white ml-0.5" />
        )}
      </button>
    </section>
  );
};

export default HeroVideo;