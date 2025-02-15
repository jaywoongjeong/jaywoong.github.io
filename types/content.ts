export interface ProjectFrontmatter {
  title: string;
  date: string;
  tags: string[];
  category: string;
  description: string;
  image?: string;
}

export interface PublicationFrontmatter {
  title: string;
  authors: string[];
  venue: string;
  date: string;
  status: 'published' | 'in-progress';
  link?: string;
} 