// hooks/useJournalLayout.ts

import { useMemo, useState } from "react";
import { CARDS, STICKERS, CardData } from "@/data/journalData";
import { randChoice } from "@/utils/arrayUtils";
import { useMounted } from "./useMounted";

export interface JournalLayoutItem {
  card: CardData;
  angle: number;
  sticker: string;
  positionClass: string;
}

// 网格布局
const getPositionClass = (card: CardData, index: number): string => {
  const positions = [
    "col-start-1 col-span-7 row-start-1 row-span-4", // 0: profile
    "col-start-1 col-span-7 row-start-5 row-span-8", // 1: file-tree
    "col-start-9 col-span-7 row-start-1 row-span-6", // 2: blog
    "col-start-17 col-span-7 row-start-1 row-span-6", // 3: coding
    "col-start-9 col-span-7 row-start-7 row-span-6", // 4: gallery
    "col-start-17 col-span-7 row-start-7 row-span-6", // 5: favorite

  ];
  return positions[index] || "";
};


export function useJournalLayout(): JournalLayoutItem[] {
  const mounted = useMounted();
  const [seed] = useState(Math.random());

  const layout = useMemo(() => {
    if (!mounted) {
      return CARDS.map((card, i) => ({
        card,
        angle: 0,
        sticker: "✨",
        positionClass: getPositionClass(card, i),
      }));
    }

    return CARDS.map((card, i) => {
      // 角度在 -3 到 3 度之间，基于种子和索引，每次刷新保持不变
      const angle = (seed * 10 + i * 4) % 6 - 3; 
      const sticker = randChoice(STICKERS, (seed * (i + 1)) % 1);
      const positionClass = getPositionClass(card, i);

      return { card, angle, sticker, positionClass };
    });
  }, [mounted, seed]);

  return layout;
}
