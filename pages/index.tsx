import { HexagonAnimation } from '@/components/home/HexagonAnimation';

export default function Home() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <HexagonAnimation />
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Jaeyoon Song</h1>
            <p className="text-xl text-gray-600">
              PhD Student @ MIT
            </p>
            <p className="mt-2 text-gray-600">
              Human-AI Interaction, Collaboration, Generative AI, Computational Social Science
            </p>
          </div>

          <div className="prose prose-lg mx-auto">
            <p>
              Hello, I am a PhD student at MIT Sloan School of Management in the Information Technology (IT) group.
              My general research area is computational social science and social computing at the intersection of 
              computer science, data science, and social science.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 