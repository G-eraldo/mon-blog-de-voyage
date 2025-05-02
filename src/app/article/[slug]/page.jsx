import { MDXComponents } from "@/app/components/MDXComponents";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getArticleBySluh, getArticlesSlug } from "../../../../lib/articles";

export async function generateStaticParams() {
  const slugs = getArticlesSlug();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}
export default async function Page({ params }) {
  const { slug } = await params;
  try {
    const { content, frontmatter } = getArticleBySluh(slug);
    return (
      <article className="prose mx-9 p-4  text-amber-50">
        <h1 className="h-full mb-5 text-4xl font-poppins">
          {frontmatter.title}
        </h1>
        <MDXRemote className="" source={content} components={MDXComponents} />
      </article>
    );
  } catch (error) {
    notFound();
  }
}
