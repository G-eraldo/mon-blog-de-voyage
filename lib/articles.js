import fs from "fs";
// permet de lire les fichiers sur l'ordi
import path from "path";
// aide à construire des chemins de fichiers corrects selon le système.
import matter from "gray-matter";
// lit les données qu’on met en haut des fichiers .mdx entre --- (appelé frontmatter).

const articlesDirectory = path.join(process.cwd(), "content");

export function getArticlesSlug() {
  return fs
    .readdirSync(articlesDirectory)
    .filter((file) => file.endsWith(".mdx"));
}
export function getArticleBySluh(slug) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(articlesDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  return { slug: realSlug, frontmatter: data, content };
}

export function getAllArticles() {
  const slugs = getArticlesSlug();
  return slugs.map((slug) => getArticleBySluh(slug));
}
