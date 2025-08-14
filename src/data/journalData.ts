// data/journalData.ts

export interface CardData {
    id: string;
    title: string;
    subtitle: string;
  }
  
  export const CARDS: CardData[] = [
    { id: "profile", title: "Profile", subtitle: "" },
    { id: "file-tree", title: "File Tree", subtitle: "" },

    { id: "blog", title: "Blog", subtitle: "博客" },
    { id: "coding", title: "Coding", subtitle: "项目与demo" },
    { id: "gallery", title: "Gallery", subtitle: "相册" },
    { id: "favorite", title: "Favorite", subtitle: "收藏夹" },
  ];
  
  export const STICKERS: string[] = ["🌿", "📷", "🎵", "📖", "✨", "💡", "✂️", "✉️"];
  