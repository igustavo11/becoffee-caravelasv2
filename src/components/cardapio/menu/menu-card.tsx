"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

interface MenuCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  onClick?: () => void;
}

export function MenuCard({ id, name, price, image, onClick }: MenuCardProps) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-6">
      <Card
        className="rounded-[20px] p-3 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl border-none bg-white flex sm:flex-col gap-3 sm:gap-0"
        id={id}
        onClick={onClick}
      >
        <div className="w-24 h-24 sm:w-full sm:h-48 relative rounded-[11px] overflow-hidden shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-[11px]"
            sizes="(max-width: 640px) 96px, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center sm:block">
          <p className="text-left sm:text-center mt-0 sm:mt-3 text-black text-sm sm:text-base font-sans font-medium line-clamp-2 sm:line-clamp-1">
            {name}
          </p>
          <p className="text-left sm:text-center text-(--color-primary) text-xl sm:text-2xl font-sans font-semibold mt-1 sm:mt-2">
            R$ {price.toFixed(2).replace(".", ",")}
          </p>
        </div>
      </Card>
    </div>
  );
}
