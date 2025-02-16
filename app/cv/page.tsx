export default function CV() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Curriculum Vitae</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Korea Advanced Institute of Science and Technology (KAIST)</h3>
          <p className="text-gray-600">Mar 2022 - Present</p>
          <p>B.S. in Industrial and Systems Engineering</p>
          <p>Individually Designed Major: Biology, Industrial Design</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Research Experience</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold">KAIST Dept. of Industrial Design - AI Experience Lab</h3>
          <p className="text-gray-600">Aug 2024 - Present</p>
          <p className="italic">Research Intern (Advisor: Prof. Takyeon Lee)</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Conducted literature review on AI Persona and Social Simulacra</li>
            <li>First author on an LLM-based script editing and adaptation tool paper</li>
            <li>Awarded KAIST URP Grant of $3,000 for research</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">MIT Sloan School of Management - Chu Lab</h3>
          <p className="text-gray-600">Mar 2024 - Jun 2024 (Remote)</p>
          <p className="italic">Research Assistant (Advisor: Prof. Johan Chu)</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Conducted sparse search-based NLP analysis on Korean news media</li>
            <li>Performed exploratory data analysis on Korean film and drama industry datasets</li>
          </ul>
        </div>

        {/* Add other research experiences similarly */}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="space-y-2 text-gray-600">
          <p><span className="font-semibold">Programming:</span> Python (PyTorch, NumPy, pandas), Julia</p>
          <p><span className="font-semibold">Web Development:</span> HTML, CSS, JavaScript, React</p>
          <p><span className="font-semibold">Documentation:</span> LaTeX</p>
        </div>
      </section>
    </div>
  );
} 