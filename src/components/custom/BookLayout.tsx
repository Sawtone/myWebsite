// components/custom/BookLayout.tsx

import React from "react";
import { useJournalLayout } from "@/hooks/useJournalLayout";
import ProfileCard from "./ProfileCard";
import JournalCard from "./JournalCard";
import FileTreeCard from "./FileTreeCard";
import JournalBackground from "./JournalBackground";
import ThemeSwitcher from "./ThemeSwitcher";

const BookLayout = () => {
  const layoutItems = useJournalLayout();

  return (
    <div className="min-h-screen w-full flex justify-center p-2 sm:p-8 relative"> 
      <JournalBackground />

      <div className="relative w-full max-w-6xl">
        <div className="grid grid-cols-24 grid-rows-12 h-full">
          {layoutItems.map(({ card, angle, sticker, positionClass }) => (
            <div key={card.id} className={`${positionClass} p-2 md:p-4 box-border`}>
              {card.id === 'profile' ? (
                <div className="w-full h-full">
                  <ProfileCard />
                </div>
              ) : card.id === 'file-tree' ? (
                <div className="w-full h-full">
                  <FileTreeCard />
                </div>
              ) : (
                <div className="w-full h-full">
                  <JournalCard card={card} angle={angle} sticker={sticker} />
                </div>
              )}
            </div>
          ))}
        </div>

        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default BookLayout;
