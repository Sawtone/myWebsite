import { defineCollection, defineConfig, s } from "velite";

// 定义一篇文章的数据结构
const posts = defineCollection({
  name: "Post", // 数据集合的名称
  pattern: "blog/**/*.md", // 匹配 content/blog 目录下所有的 .md 文件
  schema: s.object({
    slug: s.path(), // 从文件路径中提取slug
    title: s.string().max(99), // 标题，字符串类型，最大99个字符
    date: s.isodate().transform((str) => new Date(str)), // 发布日期，ISO 8601日期格式
    cover: s.image().optional(), // 封面图，图片类型，可选
    description: s.string().max(999).optional(), // 描述，可选
    content: s.markdown(), // 正文内容，由Markdown转换而来
  }),
});

export default defineConfig({
  root: "content", // 指定内容文件的根目录
  output: {
    data: ".velite", // 处理后的数据输出目录
    assets: "public/static", // 媒体文件输出目录
    base: "/static/",
    clean: true,
  },
  collections: { posts }, // 注册我们的posts集合
});
