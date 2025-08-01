import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">欢迎来到我的个人网站</h1>
      <p className="text-lg text-muted-foreground mb-8">
      由 Next.js, Shadcn/ui 和 Velite 强力驱动
      </p>
      <Link href="/blog">
        <Button>进入博客</Button>
      </Link>
    </main>
  );
}

