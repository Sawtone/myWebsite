// components/custom/demo/GlassCard.tsx

import { Card } from "@/components/ui/card";
import { CardBase } from "@/components/custom/demo/CardBase";

const GlassCard = () => {
  return (
    <div className="card-glow card-float mx-auto my-60 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl w-fit max-w-xl">
      <Card className="
        w-[350px] 
        transform-gpu 
        transition-all duration-300 hover:scale-105
        bg-slate-900/30  
        backdrop-blur-lg   
        border-2 border-slate-500/50 
      ">
        <CardBase />
      </Card>
    </div>
  );
}

export default GlassCard;
