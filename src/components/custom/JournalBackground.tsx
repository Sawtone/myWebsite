// components/custom/JournalBackground.tsx

"use client"

import React from "react";
import { useTheme } from "next-themes";

const JournalBackground = () => {
  const { theme } = useTheme();

  // 使用CSS渐变定义网格图案
  const lightGridPattern = `linear-gradient(rgba(2,6,23,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(2,6,23,0.04) 1px, transparent 1px)`;
  const darkGridPattern = `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`;

  // 基础背景渐变
  const lightBaseBg = `linear-gradient(180deg, #FFF9F1 0%, #F7F3EA 40%, #F2EDE3 100%)`;
  const darkBaseBg = `radial-gradient(800px 500px at 10% 20%, rgba(99,102,241,0.12), transparent), radial-gradient(600px 400px at 90% 80%, rgba(236,72,153,0.06), transparent), #020617`;

  return (
    <div
      className="absolute inset-0 -z-0 overflow-hidden transition-all duration-500"
      aria-hidden
    >
      {/* 基础背景层 */}
      <div
        className="absolute inset-0"
        style={{
          background: theme === "dark" ? darkBaseBg : lightBaseBg,
        }}
      />

      {/* 网格图案叠加层 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: theme === "dark" ? darkGridPattern : lightGridPattern,
          backgroundSize: `20px 20px`,
        }}
      />

      {/* 装饰性贴纸 */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-6 top-12 text-4xl">✦</div>
        <div className="absolute right-10 bottom-20 text-5xl -rotate-12">✿</div>
        <div className="absolute left-14 bottom-36 text-3xl rotate-6">✉️</div>
      </div>

    </div>
  );
};

export default JournalBackground;
