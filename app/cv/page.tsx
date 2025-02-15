export default function CV() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-6">Jaewoong Jeong</h1>
          <div className="space-y-2 text-gray-600">
            <p>291 Daehak-ro, Yuseong-gu, Daejeon, Republic of Korea</p>
            <p>Phone: 010-8998-7360</p>
            <p>Email: jaywoong.jeong@gmail.com, jaywoong.jeong@kaist.ac.kr</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">KAIST (March 2022 - Present)</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>B.S. in Industrial and Systems Engineering</li>
              <li>Individually Designed Major: Biology, Industrial Design</li>
              <li>Major GPA: 3.72/4.3</li>
              <li>Relevant Coursework: HCI Design, Introduction to AI with Mathematics (Graduate Course Audit), Molecular Biology, Interactive Product Design</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Research Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">KAIST Dept. of Industrial Design - AI Experience Lab (Aug 2024 - Present)</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                <li>Research Intern (Advisor: Prof. Takyeon Lee)</li>
                <li>Literature review on AI Persona, Social Simulacra</li>
                <li>First author on LLM-based script editing tool paper (NAACL In2Writing Workshop)</li>
                <li>Awarded KAIST URP Grant ($3,000)</li>
              </ul>
            </div>
            {/* Add other research experiences similarly */}
          </div>
        </section>

        {/* Add other sections (Projects, Work Experience, etc.) similarly */}

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="space-y-2 text-gray-600">
            <p><span className="font-semibold">Programming:</span> Python (PyTorch, NumPy, pandas), Julia</p>
            <p><span className="font-semibold">Web Development:</span> HTML, CSS, JavaScript, React</p>
            <p><span className="font-semibold">Documentation:</span> LaTeX</p>
          </div>
        </section>
      </div>
    </div>
  );
} 