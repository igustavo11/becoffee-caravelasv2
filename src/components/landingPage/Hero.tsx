"use client";

import { motion } from "framer-motion";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { INSTAGRAM, MAPS, PHONE, WHATSAPP } from "@/lib/constants";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="bg-[var(--color-background)] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-[var(--color-black)] leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A cafeteria mais acolhedora de
              <br />
              <span className="text-[var(--color-primary)]">Caravelas!!</span>
            </motion.h1>

            <motion.p
              className="text-lg text-[var(--color-text)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Aproveite nosso cardápio que é totalmente interativo.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white px-8 py-6 rounded-full text-lg font-semibold"
                onClick={() => {
                  document
                    .getElementById("cardapio")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver cardápio
              </Button>

              <Button
                className="bg-white hover:bg-gray-50 text-[var(--color-black)] px-6 py-6 rounded-full text-lg font-semibold border border-gray-200 flex items-center gap-3"
                onClick={() => window.open(`tel:+${PHONE}`)}
              >
                <div className="bg-[var(--color-primary)] text-white p-2 rounded-full">
                  <Phone size={20} />
                </div>
                (27) 99849-6489
              </Button>
            </motion.div>
            <motion.div
              className="flex gap-3 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white hover:bg-[var(--color-secondary)] hover:text-white rounded-full flex items-center justify-center shadow-md transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={18} />
              </motion.a>

              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white hover:bg-[var(--color-secondary)] hover:text-white rounded-full flex items-center justify-center shadow-md transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={18} />
              </motion.a>

              <motion.a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white hover:bg-[var(--color-secondary)] hover:text-white rounded-full flex items-center justify-center shadow-md transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:block relative h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute inset-0"></div>
            <Image
              src="/img/logo22.jpeg"
              alt="Bê Coffee Produtos"
              fill
              className="object-contain"
            />

            <motion.div
              className="absolute bottom-0 right-0 bg-white p-6 rounded-3xl shadow-xl max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-[var(--color-text)] italic mb-4">
                "Café maravilhoso e funcionários simpáticos. A comida chegou
                quente e muito saborosa!"
              </p>
              <p className="font-semibold text-[var(--color-primary)]">
                Sandro
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
