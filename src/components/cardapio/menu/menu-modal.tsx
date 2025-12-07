"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    img: string;
    name: string;
    dsc: string;
  } | null;
}

export function MenuModal({ isOpen, onClose, item }: MenuModalProps) {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[700px] bg-(--color-background) border-none p-0 rounded-[20px]">
        <div className="relative w-full">
          <Image
            src={item.img}
            alt={item.name}
            width={700}
            height={500}
            className="w-full rounded-t-[20px] object-cover"
            priority
          />
        </div>

        <DialogHeader className="px-6 pb-6">
          <DialogTitle className="text-center text-(--color-primary) text-3xl font-bold font-sans">
            {item.name}
          </DialogTitle>
          <DialogDescription className="text-center text-(--color-text) text-base leading-relaxed mt-3">
            {item.dsc}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
