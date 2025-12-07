"use client";

import dynamic from "next/dynamic";
import { SERVICES } from "@/lib/constants";
import coffeeTime from "../../../lottie/Coffee Time.json";
import lookingForCoffee from "../../../lottie/Looking for the best coffee.json";
import saludando from "../../../lottie/saludando.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const animations: Record<
  string,
  typeof lookingForCoffee | typeof saludando | typeof coffeeTime
> = {
  "Looking for the best coffee.json": lookingForCoffee,
  "saludando.json": saludando,
  "Coffee Time.json": coffeeTime,
};

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-20 lg:py-32 bg-[var(--color-background)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider mb-2">
            SERVIÇOS
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--color-black)]">
            Como são nossos serviços?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center"
            >
              <div className="w-56 h-56 lg:w-64 lg:h-64 mb-4">
                <Lottie
                  animationData={animations[service.animation]}
                  loop={true}
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-black)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--color-text)] text-sm lg:text-base max-w-xs">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
