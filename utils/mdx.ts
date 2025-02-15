import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getProjectContent(slug: string) {
  const fullPath = path.join(process.cwd(), 'content/projects', `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return {
    frontmatter: data,
    content: mdxSource
  };
}

export async function getAllProjectPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/projects'));
  return files.map(file => ({
    params: {
      slug: file.replace(/\.mdx$/, '')
    }
  }));
} 