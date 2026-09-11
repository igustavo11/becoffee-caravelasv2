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
import type { MenuCategory, MenuIcon } from "@/lib/menu";

interface MenuFiltersProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const iconMap: Record<MenuIcon, typeof Coffee> = {
  coffee: Coffee,
  utensils: Utensils,
  wind: Wind,
  "ice-cream": IceCream,
  beer: Beer,
  croissant: Croissant,
  sandwich: Sandwich,
  pizza: Pizza,
  cake: Cake,
  cookie: Cookie,
};

const iconStyle = {
  display: "inline-block",
  verticalAlign: "-3px",
  marginRight: 6,
} as const;

export function MenuFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: MenuFiltersProps) {
  return (
    <div className="col-12 col-one container-menu">
      {categories.map((category) => {
        const Icon = iconMap[category.icon];
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange(category.id)}
            className={`btn-white btn-sm mr-3${isActive ? " active" : ""}`}
          >
            <Icon size={18} style={iconStyle} />
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
