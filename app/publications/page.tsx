import { getAllPublications } from '@/utils/mdx';

export default async function Publications() {
  const publications = await getAllPublications();
  
  const workingPapers = publications.filter(p => p.status === 'in-progress');
  const publishedPapers = publications.filter(p => p.status === 'published');

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-12">Publications</h1>
        
        {workingPapers.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Working Papers</h2>
            {workingPapers.map(paper => (
              <div key={paper.title} className="mb-8">
                <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                <p className="text-gray-600">{paper.authors.join(', ')}</p>
                {paper.venue && (
                  <p className="text-gray-500 text-sm mt-1">{paper.venue}</p>
                )}
              </div>
            ))}
          </section>
        )}
        
        {publishedPapers.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-8">Published Papers</h2>
            {publishedPapers.map(paper => (
              <div key={paper.title} className="mb-8">
                <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                <p className="text-gray-600">{paper.authors.join(', ')}</p>
                {paper.venue && (
                  <p className="text-gray-500 text-sm mt-1">{paper.venue}</p>
                )}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
} 