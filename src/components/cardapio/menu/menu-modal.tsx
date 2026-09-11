"use client";

import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { MenuItem } from "@/lib/menu";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
}

export function MenuModal({ isOpen, onClose, item }: MenuModalProps) {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        showCloseButton={false}
        className="cardapio-font cardapio-modal"
      >
        <DialogClose className="cardapio-close" aria-label="Fechar">
          &times;
        </DialogClose>
        <div className="modal-media">
          <Image
            src={item.img}
            alt={item.name}
            fill
            className="object-contain"
            sizes="(max-width: 500px) 80vw, 460px"
          />
        </div>
        <div className="modal-body">
          <span className="num-produto num-modal">{item.num}</span>
          <DialogTitle className="modal-name">{item.name}</DialogTitle>
          <DialogDescription className="modal-desc scrollbar-elegant">
            {item.dsc}
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}
