"use client";

import { MenuCard } from "./menu-card";

interface MenuItem {
  id: string;
  name: string;
  dsc: string;
  price: number;
  img: string;
}

interface MenuGridProps {
  items: MenuItem[];
  onItemClick?: (item: MenuItem) => void;
}

export function MenuGrid({ items, onItemClick }: MenuGridProps) {
  return (
    <div className="w-full px-4">
      <div className="flex flex-wrap -mx-4" id="itensCardapio">
        {items.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.dsc}
            price={item.price}
            image={item.img}
            onClick={() => onItemClick?.(item)}
          />
        ))}
      </div>
    </div>
  );
}
