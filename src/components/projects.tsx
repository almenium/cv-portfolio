import { FolderGit2, ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Outil de statistiques ventes & production",
      description:
        "Application interne pour automatiser les rapports et suivre les indicateurs clés de performance (CA, volumes, productivité).",
      technologies: ["PHP", "MSSQL", "ETL", "Rapports automatisés"],
    },
    {
      id: 2,
      title: "Cartographie interactive OpenStreetMap",
      description:
        "Interface front-end intégrant une carte dynamique avec moteur de recherche intelligent (stemming).",
      technologies: ["React", "JavaScript", "OpenStreetMap"],
    },
    {
      id: 3,
      title: "Application mobile de checklist maternité",
      description:
        "Projet personnel : application Flutter pour gérer une checklist interactive de préparation au séjour à la maternité.",
      technologies: ["Flutter", "Mobile", "UX minimaliste"],
    },
  ];

  return (
    <section id="projects" className="scroll-mt-8">
      <div className="flex items-center gap-3 mb-6">
        <FolderGit2 className="w-6 h-6 text-[#C44536]" />
        <h2 className="text-3xl text-[#1A1A1D]">Portfolio</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB] flex flex-col"
          >
            <h3 className="text-xl text-[#1A1A1D] mb-2">{project.title}</h3>
            <p className="text-sm text-[#393E46] mb-3 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-full bg-[#EEEEEE] text-[#1F3A5F]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-xs text-[#C44536] mt-auto"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Projet non publié (interne / perso)</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
