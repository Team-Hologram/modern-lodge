"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Sparkles, Mountain, Calendar, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";
import SplitText from "@/components/animations/SplitText";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated gradient background
      gsap.to(".gradient-orb-1", {
        x: 100,
        y: -100,
        scale: 1.2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".gradient-orb-2", {
        x: -150,
        y: 100,
        scale: 0.8,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".gradient-orb-3", {
        x: 80,
        y: 120,
        scale: 1.1,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Floating elements
      gsap.to(".float-element", {
        y: -30,
        duration: 3,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Stats counter animation
      gsap.from(".stat-number", {
        textContent: 0,
        duration: 2,
        delay: 1,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-earth-900 via-earth-800 to-earth-900"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Mountain/Nature Video from CDN */}
          <source
            src="https://cdn.jsdelivr.net/gh/Team-Hologram/trsm/sea.mp4"
            type="video/mp4"
          />
          {/* Fallback video */}
          <source
            src="https://cdn.coverr.co/videos/coverr-foggy-forest-in-the-mountains-6988/1080p.mp4"
            type="video/mp4"
          />
        </video>

        {/* Video Overlay with Gradient */}
        <div className="absolute inset-0 " />
        
        {/* Animated vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Animated Background Gradients (Subtle overlay) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="gradient-orb-1 absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full filter blur-3xl" />
        <div className="gradient-orb-2 absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full filter blur-3xl" />
        <div className="gradient-orb-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl" />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">

            {/* Main Heading with Split Text Animation */}
            <div className="mb-8">
              <SplitText
                text="Where Nature Meets"
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4"
                delay={0.3}
              />
              <SplitText
                text="Luxury"
                className="text-6xl md:text-8xl lg:text-9xl font-display font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
                delay={0.5}
              />
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
            >
              Discover handpicked luxury lodges nestled in breathtaking natural
              landscapes. Your perfect mountain escape awaits.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <MagneticButton>
                <Link href="/lodges">
                  <Button
                    size="lg"
                    className="group relative px-8 py-7 text-lg font-semibold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white border-0 overflow-hidden shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Lodges
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link href="/experiences">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-7 text-lg font-semibold bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-earth-900 transition-all duration-300 shadow-xl"
                  >
                    View Experiences
                  </Button>
                </Link>
              </MagneticButton>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-white/90 text-sm font-medium drop-shadow-lg">Scroll to explore</span>
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/5">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-white/90 rounded-full shadow-lg"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Particle effect overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC4zIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      </div>
    </section>
  );
};

export default Hero;