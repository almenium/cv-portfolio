import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Développeuse Full-Stack PHP / JavaScript",
      company: "Hydro Building System",
      period: "Août 2020 — Aujourd'hui",
      description: [
        "Étude et développement d’applications métier (ventes, finance, production).",
        "Automatisation de rapports statistiques via MSSQL et PHP.",
        "Intégration d’API externes et optimisation du traitement des données.",
        "Participation à la modernisation du front (Bootstrap, JavaScript).",
      ],
    },
    {
      id: 2,
      title: "Programmeuse Analyste",
      company: "MODE83",
      period: "2019 — 2020",
      description: [
        "Participation à des projets de développement et de maintenance d’applications.",
        "Montée en compétences sur les bonnes pratiques de développement web.",
      ],
    },
    {
      id: 3,
      title: "Développeuse Web (Stage)",
      company: "L’Encre Noire",
      period: "Décembre 2018",
      description: [
        "Développement front-end (React JS) pour un site vitrine.",
        "Mise en place d’une carte interactive OpenStreetMap.",
        "Contribution à un moteur de recherche intelligent (stemming).",
      ],
    },
    {
      id: 4,
      title: "Télé-gestionnaire",
      company: "Domus Vie Quotidienne",
      period: "Juin 2010 — Octobre 2019",
      description: [
        "Gestion des sinistres habitation et accompagnement des assurés.",
        "Formation de nouveaux collaborateurs sur les outils et procédures.",
        "Développement de compétences en gestion du stress, priorisation et communication.",
      ],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-8">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="w-6 h-6 text-[#C44536]" />
        <h2 className="text-3xl text-[#1A1A1D]">Expérience professionnelle</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB]"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-xl text-[#1A1A1D]">{exp.title}</h3>
                <p className="text-sm text-[#393E46]">{exp.company}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
            </div>
            <ul className="space-y-2">
              {exp.description.map((item, index) => (
                <li key={index} className="text-[#393E46] flex gap-2">
                  <span className="text-[#C44536] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
