import Link from 'next/link';
import { posts } from '../../../.velite';

export default function BlogIndexPage() {
  // 按日期倒序排序，最新的文章在最上面
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="container mx-auto max-w-3xl py-12 px-4">
      <h1 className="text-4xl font-extrabold mb-8">我的博客</h1>
      <div className="space-y-8">
        {sortedPosts.map((post) => (
          <article key={post.slug}>
            <h2 className="text-2xl font-bold">
              <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-muted-foreground mt-2">
              <time>
                {new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </p>
            <p className="mt-4">{post.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}