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
        <span className="modal-img">
          <Image
            src={item.img}
            alt={item.name}
            fill
            className="object-contain"
            sizes="460px"
          />
        </span>
        <span className="num-produto num-modal">{item.num}</span>
        <DialogTitle className="modal-name">{item.name}</DialogTitle>
        <DialogDescription className="modal-desc">{item.dsc}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
