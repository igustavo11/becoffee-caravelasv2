"use client";

import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { INSTAGRAM, MAPS, PHONE, WHATSAPP } from "@/lib/constants";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="bg-[var(--color-background)] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="wow fadeInLeft space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-[var(--color-black)] leading-tight">
              A cafeteria mais acolhedora de
              <br />
              <span className="text-[var(--color-primary)]">Caravelas!!</span>
            </h1>

            <p className="text-lg text-[var(--color-text)]">
              Aproveite nosso cardápio que é totalmente interativo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
            </div>
            <div className="flex gap-3 pt-8">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white hover:bg-[var(--color-secondary)] hover:text-white rounded-full flex items-center justify-center shadow-md transition-all duration-300"
              >
                <Instagram size={18} />
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white hover:bg-[var(--color-secondary)] hover:text-white rounded-full flex items-center justify-center shadow-md transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white hover:bg-[var(--color-secondary)] hover:text-white rounded-full flex items-center justify-center shadow-md transition-all duration-300"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative h-[600px]">
            <div className="absolute inset-0"></div>
            <Image
              src="/img/logo22.jpeg"
              alt="Bê Coffee Produtos"
              fill
              className="object-contain"
            />

            <div className="absolute bottom-0 right-0 bg-white p-6 rounded-3xl shadow-xl max-w-sm">
              <p className="text-[var(--color-text)] italic mb-4">
                "Café maravilhoso e funcionários simpáticos. A comida chegou
                quente e muito saborosa!"
              </p>
              <p className="font-semibold text-[var(--color-primary)]">
                Sandro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
