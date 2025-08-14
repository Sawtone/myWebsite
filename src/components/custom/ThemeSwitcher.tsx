// components/custom/ThemeSwitcher.tsx

"use client"

import React from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  // 避免 Hydration Error
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute top-4 right-2 sm:top-6 sm:right-3">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="rounded-full px-3 py-2 bg-white/80 dark:bg-black/60 shadow-sm border border-gray-200/60 dark:border-white/10 transition-all hover:shadow-md backdrop-blur-sm"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
