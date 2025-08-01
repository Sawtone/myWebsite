import { posts } from '../../../../.velite';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

// 创建一个完全符合 Next.js App Router期望的 Props 类型, 确保 Velcel 构建正常
// Next.js v15 规定路由组件接收到的 params 与 searchParams不再是同步对象，而是 Promise 对象
type Props = {
  params:  Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Next.js需要一个名为 generateMetadata 的函数来处理元数据（如页面标题）
// 即使是空的，定义它也能帮助类型系统正确推断
export async function generateMetadata(props: Props): Promise<Metadata> {
  // 等到 Promise resolve 之后取到真正的对象
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  return {
    title: post?.title || '文章未找到'
  };
}

// 在构建时告诉Next.js有哪些文章页面需要被生成，TS自动推断类型
// 设置为异步以解决与异步 generateMetadata 的类型推断冲突
export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage(props: Props) {
  // 根据URL的slug参数查找对应的文章
  // 等待 Promise resolve
  const { slug } = await props.params;
  const searchParams = await props.searchParams;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

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