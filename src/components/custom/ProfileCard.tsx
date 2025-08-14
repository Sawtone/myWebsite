// components/custom/ProfileCard.tsx

import { CardBase } from "@/components/custom/demo/CardBase";

const ProfileCard = () => {
  return (
    <div className="w-full h-full transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="card-glow h-full w-full flex items-center justify-center">
        <CardBase />
      </div>
    </div>
  );
}

export default ProfileCard;