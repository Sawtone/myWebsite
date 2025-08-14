// components/demo/CardBase.tsx

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import avatar from '@/assets/avatar.png';

interface CardProps {
  className?: string;
}

export function CardBase({ className }: CardProps) {
  return (
    <div className={`w-full h-full flex flex-col items-center p-2 text-center ${className}`}>
      <Avatar className="h-14 w-14 border-2 border-slate-400">
        <AvatarImage src={avatar.src} alt="Sawtone" />
        <AvatarFallback>ST</AvatarFallback>
      </Avatar>
      <h1 className="mt-1 text-2xl font-bold text-slate-50">
        Sawtone
      </h1>
      <p className="mt-2 text-md text-slate-300">
        热爱设计与代码，专注前端与交互
      </p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        <Badge variant="secondary">Frontend</Badge>
        <Badge variant="secondary">Photo</Badge>
        <Badge variant="secondary">Music</Badge>
        <Badge variant="secondary">Read</Badge>
      </div>
    </div>
  );
}