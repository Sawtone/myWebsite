import { posts } from '../../../../.velite';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PostPageProps {
  params: {
    slug: string;
  };
}

// 在构建时告诉Next.js有哪些文章页面需要被生成
export function generateStaticParams(): PostPageProps['params'][] {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }: PostPageProps) {
  // 根据URL的slug参数查找对应的文章
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) { notFound(); }

  return (
    <main className="container mx-auto max-w-3xl py-12 px-4">
      <div className="mb-8">
        <Link href="/blog" className="text-sm text-primary hover:underline">
          ← 返回博客列表
        </Link>
      </div>
      <article>
        <h1 className="text-5xl font-extrabold mb-4">{post.title}</h1>
        <p className="text-muted-foreground mb-8">
          <time>
            发布于 {new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </p>

        {/* 应用prose类来美化Markdown内容 */}
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}