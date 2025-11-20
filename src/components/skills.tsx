import { Code, Database, Wrench } from "lucide-react";

export function Skills() {
  const webDevSkills = [
    "PHP (4 → 8)",
    "JavaScript",
    "HTML / CSS",
    "Bootstrap",
    "React (bases)",
    "Flutter (bases)",
  ];

  const dataSkills = [
    "MSSQL",
    "MySQL",
    "DB2",
    "Requêtes SQL avancées",
    "ETL / traitements batch",
    "Rapports statistiques",
  ];

  const tools = [
    "Git",
    "Jira",
    "AS400 (IBM iSeries)",
    "Méthodes Agile",
    "MVP",
    "UX simple et fluide",
  ];

  return (
    <section id="skills" className="scroll-mt-8">
      <div className="flex items-center gap-3 mb-6">
        <Code className="w-6 h-6 text-[#C44536]" />
        <h2 className="text-3xl text-[#1A1A1D]">Compétences & technologies</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#1F3A5F]">
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-5 h-5 text-[#1F3A5F]" />
            <h3 className="text-xl text-[#1A1A1D]">Développement Web</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {webDevSkills.map((skill) => (
              <span
                key={skill}
                className="bg-[#1F3A5F] text-white px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#C44536]">
          <div className="flex items-center gap-2 mb-4">
            <Database className="w-5 h-5 text-[#C44536]" />
            <h3 className="text-xl text-[#1A1A1D]">Données & SQL</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {dataSkills.map((skill) => (
              <span
                key={skill}
                className="bg-[#C44536] text-white px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#393E46]">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-[#393E46]" />
            <h3 className="text-xl text-[#1A1A1D]">Outils & méthodes</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="bg-[#393E46] text-white px-3 py-1 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
