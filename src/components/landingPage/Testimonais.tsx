"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { Button } from "../ui/button";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const testimonial = TESTIMONIALS[current];

  return (
    <section
      id="depoimentos"
      className="py-20 lg:py-32 bg-[var(--color-background)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="hidden lg:block relative h-[500px]">
            <div className="absolute inset-0 bg-[var(--color-secondary)] rounded-[3rem]"></div>
            <div className="relative h-full">
              <Image
                src="/img/torta2.png"
                alt="Torta"
                fill
                className="object-contain z-10"
              />
            </div>
          </div>
          <div>
            <div className="mb-12">
              <p className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider mb-3">
                DEPOIMENTOS
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-black)]">
                O que dizem sobre nós?
              </h2>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-8 space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <User size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[var(--color-black)]">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-[var(--color-primary)] text-[var(--color-primary)]"
                          />
                        )
                      )}
                      <span className="text-sm font-semibold ml-1">5.0</span>
                    </div>
                  </div>
                </div>
                <div className="relative pl-12">
                  <Quote
                    size={28}
                    className="absolute left-0 top-0 text-[var(--color-primary)]"
                  />
                  <p className="text-[var(--color-text)] text-lg leading-relaxed">
                    {testimonial.text}
                  </p>
                  <Quote
                    size={28}
                    className="absolute right-4 -bottom-4 text-[var(--color-primary)] rotate-180"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4">
              {TESTIMONIALS.map((_, index) => (
                <Button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    current === index
                      ? "bg-[var(--color-secondary)] text-white shadow-lg"
                      : "bg-white text-[var(--color-black)] hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
