import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategoryInfo {
  title: string;
  description: string;
  note?: string;
}

interface MenuCategoryInfoProps {
  info: CategoryInfo;
}

export function MenuCategoryInfo({ info }: MenuCategoryInfoProps) {
  return (
    <div className="w-full px-4 mb-6">
      <Card className="bg-white text-black p-6 rounded-[20px] text-center shadow-[0_8px_25px_rgba(188,117,50,0.3)] border-2 border-(--color-secondary)">
        <h5 className="text-(--color-primary) text-[22px] mb-4 font-bold font-sans flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6" /> {info.title}
        </h5>
        <p className="mb-2 text-base leading-6 text-black font-sans">
          {info.description}
        </p>
        {info.note && (
          <p className="text-(--color-primary) text-sm mb-0 font-medium font-sans">
            <em>{info.note}</em>
          </p>
        )}
      </Card>
    </div>
  );
}
