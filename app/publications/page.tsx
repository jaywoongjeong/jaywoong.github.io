import { getAllPublications } from '@/utils/mdx';

export default async function Publications() {
  const publications = await getAllPublications();
  
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-12">Publications</h1>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Working Papers</h2>
          {publications
            .filter(p => p.status === 'in-progress')
            .map(paper => (/* ... */))
          }
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-8">Published Papers</h2>
          {publications
            .filter(p => p.status === 'published')
            .map(paper => (/* ... */))
          }
        </section>
      </div>
    </div>
  );
} 