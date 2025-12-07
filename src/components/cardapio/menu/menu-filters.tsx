"use client";

import {
  Beer,
  Cake,
  Coffee,
  Cookie,
  Croissant,
  IceCream,
  Pizza,
  Sandwich,
  Utensils,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuCategory {
  id: string;
  name: string;
  icon: string;
}

interface MenuFiltersProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  coffee: <Coffee className="w-5 h-5" />,
  utensils: <Utensils className="w-5 h-5" />,
  wind: <Wind className="w-5 h-5" />,
  "ice-cream": <IceCream className="w-5 h-5" />,
  beer: <Beer className="w-5 h-5" />,
  croissant: <Croissant className="w-5 h-5" />,
  sandwich: <Sandwich className="w-5 h-5" />,
  pizza: <Pizza className="w-5 h-5" />,
  cake: <Cake className="w-5 h-5" />,
  cookie: <Cookie className="w-5 h-5" />,
};

export function MenuFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: MenuFiltersProps) {
  return (
    <div className="w-full mb-10">
      <div className="overflow-x-auto scrollbar-hide px-4">
        <div className="flex gap-3 pb-2 min-w-max lg:flex-wrap lg:justify-center lg:min-w-0">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                rounded-full px-6 py-3 text-base font-sans gap-2 transition-all duration-300 border-none whitespace-nowrap
                ${
                  activeCategory === category.id
                    ? "bg-(--color-secondary) hover:bg-secondary/90 text-white shadow-lg"
                    : "bg-white hover:bg-(--color-secondary) hover:text-white text-black shadow-md"
                }
              `}
            >
              {iconMap[category.icon]}
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
