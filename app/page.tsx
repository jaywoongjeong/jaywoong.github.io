import HexagonAnimation from '@/components/home/HexagonAnimation';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <HexagonAnimation />
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Jaewoong Jeong</h1>
          <p className="text-xl text-gray-600">
            B.S. Student @ KAIST
          </p>
          <p className="mt-2 text-gray-600">
            Industrial and Systems Engineering, Biology, Industrial Design
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <p>
            Hello, I am an undergraduate student at KAIST, pursuing a B.S. in Industrial and Systems Engineering
            with an individually designed major in Biology and Industrial Design. My research interests include
            Human-AI Interaction, AI Experience Design, and Computational Biology.
          </p>
        </div>
      </div>
    </div>
  );
}
