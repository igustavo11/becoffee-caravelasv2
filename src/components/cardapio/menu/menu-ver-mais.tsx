"use client";

import { Button } from "@/components/ui/button";

interface MenuVerMaisProps {
  onClick: () => void;
  hidden?: boolean;
}

export function MenuVerMais({ onClick, hidden }: MenuVerMaisProps) {
  if (hidden) return null;

  return (
    <div className="w-full px-4 text-center">
      <Button
        onClick={onClick}
        variant="outline"
        className="bg-white text-black rounded-full px-8 py-3 text-lg shadow-lg hover:bg-(--color-secondary) hover:text-white transition-all duration-300 border-2 border-(--color-separate) font-sans"
      >
        Ver mais
      </Button>
    </div>
  );
}
