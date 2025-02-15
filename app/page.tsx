import { HexagonAnimation } from '@/components/home/HexagonAnimation';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">Jaewoong Jeong</h1>
        <p className="text-xl mb-6">
          Industrial and Systems Engineering Student at KAIST
        </p>
        <p className="text-lg mb-8">
          Researching AI Experience and Human-AI Interaction
        </p>
        <div className="flex justify-center space-x-4">
          <a href="mailto:jaywoong.jeong@kaist.ac.kr" className="text-blue-600 hover:text-blue-800">
            Email
          </a>
          <a href="/cv" className="text-blue-600 hover:text-blue-800">
            CV
          </a>
        </div>
      </div>
      <HexagonAnimation />
    </div>
  );
}
