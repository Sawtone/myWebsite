// components/custom/demo/ProfileCardBorder.tsx

import { Card } from "@/components/ui/card";
import { CardBase } from "@/components/custom/demo/CardBase";

export function BorderCard() {
  return (
    <div className="
      group
      relative w-[350px]
      rounded-2xl p-[2px]
      bg-gradient-border
      animate-border-spin
      transform-gpu
      transition-all duration-300 hover:scale-105
    ">
      <Card className="h-full w-full rounded-[14px] bg-slate-950">
         <CardBase />
      </Card>
    </div>
  );
}