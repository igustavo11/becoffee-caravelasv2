"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import type { CategoryInfo, MenuItem } from "@/lib/menu";
import { MenuCard } from "./menu-card";
import { MenuCategoryInfo } from "./menu-category-info";

interface MenuGridProps {
  items: MenuItem[];
  categoryKey: string;
  info?: CategoryInfo;
  onItemClick?: (item: MenuItem) => void;
}

const rowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
};

export function MenuGrid({
  items,
  categoryKey,
  info,
  onItemClick,
}: MenuGridProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={categoryKey}
        id="itensCardapio"
        className="row"
        variants={rowVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {info && <MenuCategoryInfo info={info} />}
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="col-item"
          >
            <MenuCard item={item} onClick={() => onItemClick?.(item)} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
