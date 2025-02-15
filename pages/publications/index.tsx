import { getAllPublications } from '@/utils/mdx';

export default function Publications({ publications }) {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Working Papers</h2>
        {publications.filter(p => p.status === 'in-progress').map(paper => (
          <div key={paper.title} className="mb-8">
            <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
            <p className="text-gray-600">{paper.authors.join(', ')}</p>
            {paper.venue && (
              <p className="text-gray-500 text-sm mt-1">{paper.venue}</p>
            )}
          </div>
        ))}
        
        <h2 className="text-2xl font-bold mt-12 mb-8">Published Papers</h2>
        {publications.filter(p => p.status === 'published').map(paper => (
          <div key={paper.title} className="mb-8">
            <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
            <p className="text-gray-600">{paper.authors.join(', ')}</p>
            {paper.venue && (
              <p className="text-gray-500 text-sm mt-1">{paper.venue}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 