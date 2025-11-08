"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactMap from "../../components/contact/ContactMap";
import FAQ from "../../components/contact/FAQ";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-earth-50 to-white">
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ContactForm />
          <ContactInfo />
        </div>
        <ContactMap />
        <FAQ />
      </div>
    </div>
  );
}