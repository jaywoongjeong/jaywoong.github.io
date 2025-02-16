import { HexagonAnimation } from '@/components/home/HexagonAnimation';
import Navigation from '@/components/common/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center p-8">
        <h1 className="text-2xl font-medium">Jaewoong Jeong</h1>
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center gap-16 px-8 mt-20">
        <HexagonAnimation />
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Creative Developer</h2>
          <p className="text-gray-600">Seoul, Korea</p>
          <p className="max-w-md">
            I create fun and inspirational works to make people touched.
          </p>
        </div>
      </div>
    </main>
  );
}
