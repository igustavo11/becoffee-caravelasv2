// components/reserva-section-animated.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PHONE } from "@/lib/constants";

export function Reserve() {
  const message = encodeURIComponent(
    "Olá! Gostaria de fazer uma reserva na Bê Coffee."
  );
  const whatsappUrl = `https://wa.me/${PHONE}?text=${message}`;

  return (
    <section id="reserva" className="py-20 px-4 md:py-28">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative overflow-hidden rounded-[40px] md:rounded-[70px] bg-[var(--color-secondary)] p-8 md:p-16 lg:p-24 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6 relative z-10">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-block text-[var(--color-primary)] font-medium text-sm md:text-base tracking-wider uppercase"
                >
                  Reserva
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                >
                  Reserve um horário
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl"
                >
                  Mande uma mensagem em nosso Whatsapp clicando no botão abaixo.
                  <br className="hidden md:block" />
                  Reserve sua data e horário de forma simples e rápida
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Link
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fazer reserva
                    </Link>
                  </Button>
                </motion.div>
              </div>
              <div className="lg:col-span-5 relative flex lg:flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] xl:w-[320px] xl:h-[320px] bg-white rounded-full"
                />

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="relative z-10 w-full max-w-[200px] sm:max-w-[280px] xl:max-w-[320px]"
                >
                  <Image
                    src="/img/icone-reserva.svg"
                    alt="Ícone de Reserva"
                    width={320}
                    height={320}
                    className="w-full h-auto"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
