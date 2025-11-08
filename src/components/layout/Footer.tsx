"use client";

import React from "react";
import Link from "next/link";
import { Mountain, Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-earth-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8" />
              <span className="text-2xl font-display font-bold">
                Alpine Lodge
              </span>
            </div>
            <p className="text-earth-200 mb-4">
              Experience luxury in nature. Your perfect mountain escape awaits.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-earth-400 transition-colors" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-earth-400 transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-earth-400 transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Lodges", "Experiences", "About Us", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-earth-200 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Luxury Lodges",
                "Guided Tours",
                "Adventure Activities",
                "Event Hosting",
                "Catering",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-earth-200 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-earth-200 mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-earth-800 border-earth-700 text-white"
              />
              <Button className="bg-earth-600 hover:bg-earth-700">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-earth-800 pt-8 text-center text-earth-400">
          <p>© 2024 Alpine Lodge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;