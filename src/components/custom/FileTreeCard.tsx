// components/custom/FileTreeCard.tsx

import { useMounted } from "@/hooks/useMounted";

const ProfileCard = () => {
  const mounted = useMounted();

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>...</div>; // 或者 return null;
  }

  return (
    <div className="w-full h-full transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="card-glow h-full w-full flex items-center justify-center">
        <p className="mt-2 text-md text-slate-300">
            File Tree Box
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;