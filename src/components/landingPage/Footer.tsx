"use client";

import { Instagram, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { INSTAGRAM, MAPS, WHATSAPP } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-secondary)] py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start items-center">
            <Image
              src="/img/becoffie2.png"
              alt="Bê Coffee Logo"
              width={120}
              height={60}
              className="w-auto h-auto max-w-[150px]"
              priority
            />
          </div>
          <div className="flex justify-center items-center">
            <p className="text-white text-center text-sm md:text-base mb-0">
              <span className="font-semibold">Bê coffee</span> &copy;{" "}
              {currentYear} Todos os direitos reservados
            </p>
          </div>
          <div className="flex justify-center md:justify-end items-center gap-3">
            <Button
              asChild
              size="icon"
              variant="secondary"
              className="w-12 h-12 rounded-full bg-white hover:bg-white/90 text-[#212121] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Link
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="icon"
              variant="secondary"
              className="w-12 h-12 rounded-full bg-white hover:bg-white/90 text-[#212121] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Link
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="icon"
              variant="secondary"
              className="w-12 h-12 rounded-full bg-white hover:bg-white/90 text-[#212121] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Link
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Localização"
              >
                <MapPin className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
