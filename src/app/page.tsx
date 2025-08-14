"use client"

import BookLayout from "@/components/custom/BookLayout";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <main>
            <BookLayout />
        </main>
    </ThemeProvider>
  );
}
