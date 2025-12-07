"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Reserva", href: "#reserva" },
    { label: "Serviços", href: "#servicos" },
    { label: "Cardápio", href: "#cardapio" },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <header className="top-0 z-50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/img/becoffie3.png"
              alt="Bê Coffee"
              width={160}
              height={160}
              priority
              className="object-contain"
            />
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-10 items-center mr-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[var(--color-primary)] font-semibold text-lg hover:text-[#bc7532] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Menu Mobile Button */}
          <div className="relative md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-[var(--color-secondary)]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
              <>
                <Button
                  variant="ghost"
                  className="fixed inset-0 z-30"
                  onClick={() => setIsOpen(false)}
                />
                <div className="absolute top-12 right-0 w-48 bg-gradient-to-br from-[#bc7532] to-[#8b5a28] rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm z-40">
                  <nav className="flex flex-col p-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="text-white font-semibold text-base hover:bg-white/10 transition-colors py-3 px-3 rounded-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
