export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="prose">
        <p>
          I am an undergraduate student at KAIST (Korea Advanced Institute of Science and Technology), 
          majoring in Industrial and Systems Engineering with an individually designed focus on Biology 
          and Industrial Design.
        </p>
        
        <p>
          Currently, I am working as a Research Intern at the AI Experience Lab under the guidance of 
          Prof. Takyeon Lee, where I focus on AI Persona and Social Simulacra research. I am also 
          developing an LLM-based script editing and adaptation tool.
        </p>

        <p>
          My research interests span across Human-AI Interaction, AI Experience Design, and the application 
          of AI in creative domains. I have experience in various AI projects, including work with VAEs, 
          GANs, and Diffusion models.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
        <p>
          KAIST (Korea Advanced Institute of Science and Technology)<br />
          B.S. in Industrial and Systems Engineering<br />
          Individually Designed Major: Biology, Industrial Design<br />
          GPA: 3.72/4.3
        </p>
      </div>
    </div>
  );
} 