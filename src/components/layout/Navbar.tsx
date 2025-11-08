"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mountain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/lodges", label: "Lodges" },
    { href: "/experiences", label: "Experiences" },
    { href: "/booking", label: "Book Now" },
  ];

  // Determine if text should be white (only on homepage when not scrolled)
  const useWhiteText = isHomePage && !isScrolled;

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled && "shadow-md backdrop-blur-md"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Mountain 
                className={cn(
                  "h-8 w-8 transition-colors duration-300",
                  useWhiteText ? "text-white drop-shadow-lg" : "text-earth-700"
                )}
              />
            </motion.div>
            <span 
              className={cn(
                "text-2xl font-display font-bold transition-colors duration-300",
                useWhiteText ? "text-white drop-shadow-lg" : "text-earth-900"
              )}
            >
              Alpine Lodge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors relative group font-medium",
                  useWhiteText 
                    ? "text-white hover:text-white/80 drop-shadow-md" 
                    : "text-earth-800 hover:text-earth-600"
                )}
              >
                {link.label}
                <span 
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300",
                    useWhiteText ? "bg-white" : "bg-earth-600"
                  )}
                />
              </Link>
            ))}
            <Link href="/contact">
              <Button
                variant="default"
                className={cn(
                  "transition-all duration-300 font-medium",
                  useWhiteText 
                    ? "bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-md" 
                    : "bg-earth-700 hover:bg-earth-800 text-white"
                )}
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden transition-colors duration-300",
              useWhiteText ? "text-white drop-shadow-lg" : "text-earth-900"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className={cn(
            "md:hidden overflow-hidden transition-colors duration-300",
            useWhiteText 
              ? "bg-black/40 backdrop-blur-lg" 
              : "bg-white"
          )}
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block transition-colors font-medium",
                  useWhiteText 
                    ? "text-white hover:text-white/80" 
                    : "text-earth-800 hover:text-earth-600"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(
                "block transition-colors font-medium",
                useWhiteText 
                  ? "text-white hover:text-white/80" 
                  : "text-earth-800 hover:text-earth-600"
              )}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link href="/contact" className="block">
              <Button 
                className={cn(
                  "w-full transition-all duration-300",
                  useWhiteText 
                    ? "bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-md" 
                    : "bg-earth-700 hover:bg-earth-800 text-white"
                )}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;