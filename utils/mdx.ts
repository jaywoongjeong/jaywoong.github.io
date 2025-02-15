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

interface Publication {
  title: string;
  authors: string[];
  venue?: string;
  status: 'published' | 'in-progress';
}

export async function getAllPublications(): Promise<Publication[]> {
  // 임시 데이터
  return [
    {
      title: "A Test for Evaluating Performance in Human-Computer Systems",
      authors: ["Andres Campero", "Michelle Vaccaro", "Jaeyoon Song", "Haoran Wen", "Abdullah Almaatouq", "Thomas W. Malone"],
      status: "published"
    },
    {
      title: "How Human-AI Synergy Changes as AI Technology Advances: A Case of Writing Short Stories",
      authors: ["Jaeyoon Song"],
      status: "in-progress"
    }
  ];
} 