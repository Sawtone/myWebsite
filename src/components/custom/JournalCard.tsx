// components/custom/JournalCard.tsx

"use client"

import React from "react";
import { useTheme } from "next-themes";
import type { CardData } from "@/data/journalData";

interface JournalCardProps {
  card: CardData;
  angle?: number;
  sticker?: string;
}

const JournalCard = ({ card, angle = 0, sticker }: JournalCardProps) => {
    const { theme } = useTheme();
  
    return (
    <div
      className="w-full h-full transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <div
        className="h-full flex flex-col rounded-2xl p-2 transition-shadow duration-300 hover:shadow-[0_28px_60px_rgba(2,6,23,0.5)]"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(180deg, rgba(20,12,32,0.6), rgba(40,12,52,0.6))"
              : "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(250,246,240,0.9))",
          border: theme === "dark" ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(15,23,42,0.04)",
          boxShadow: theme === "dark" ? "0 8px 30px rgba(99,102,241,0.06)" : "0 8px 20px rgba(2,6,23,0.06)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      >
        <article className="relative cursor-pointer">
          {/* 贴纸 */}
          <div className="absolute -top-6 -left-6 text-2xl select-none">{sticker}</div>

          {/* 胶带 */}
          <div
            className="pointer-events-none absolute -top-3 left-1/3 w-16 h-6 rounded-sm rotate-6"
            style={{
              background: "linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
              boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
            }}
          />
          <div
            className="pointer-events-none absolute -top-5 right-1/3 w-12 h-5 rounded-sm -rotate-12"
            style={{
              background: "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))",
              boxShadow: "0 6px 14px rgba(0,0,0,0.14)",
            }}
          />

          <header className="mb-3 flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden flex-none border-2 border-white/20 shadow-sm">
              {/* 头像 */}
              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center text-slate-700">
                😺
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold leading-tight">{card.title}</h3>
              {card.subtitle && <p className="text-sm opacity-80 mt-0.5">{card.subtitle}</p>}
            </div>
          </header>

          <div className="text-sm leading-relaxed text-gray-700/90 dark:text-gray-200/90">
            <p>
              这是一段占位文本，模拟该卡片的简介与碎片笔记。可以在此处放短句、tag、时间线或小引用。保持简洁，便于快速浏览。
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-gray-100/90 dark:bg-white/10 shadow-sm text-gray-700 dark:text-gray-200">Tag A</span>
              <span className="text-xs px-3 py-1 rounded-full bg-gray-100/90 dark:bg-white/10 shadow-sm text-gray-700 dark:text-gray-200">Tag B</span>
              <span className="text-xs px-3 py-1 rounded-full bg-gray-100/90 dark:bg-white/10 shadow-sm text-gray-700 dark:text-gray-200">Tag C</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default JournalCard;
