"use client";

import Image from "next/image";
import type { MenuItem } from "@/lib/menu";

interface MenuCardProps {
  item: MenuItem;
  onClick?: () => void;
}

export function MenuCard({ item, onClick }: MenuCardProps) {
  return (
    <button
      type="button"
      className="card card-item"
      id={item.id}
      data-description={item.dsc}
      onClick={onClick}
    >
      <span className="img-produto">
        <Image src={item.img} alt={item.name} fill className="object-cover" />
      </span>
      <span className="title-produto text-center mt-4">
        <span className="num-produto">{item.num}</span>
        <b>{item.name}</b>
      </span>
      <span className="price-produto text-center">
        <b>R${item.price.toFixed(2).replace(".", ",")}</b>
      </span>
      <span className="add-carrinho" />
    </button>
  );
}
