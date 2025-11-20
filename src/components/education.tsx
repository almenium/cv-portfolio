import { GraduationCap } from "lucide-react";

export function Education() {
  const education = [
    {
      id: 1,
      degree: "Titre Professionnel Développeur Web et Web Mobile (DWWM)",
      institution: "MODE83, Draguignan",
      period: "2019 — 2020",
      description:
        "Formation professionnelle (niveau III) axée sur le développement front-end et back-end.",
    },
  ];

  return (
    <section id="education" className="scroll-mt-8">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="w-6 h-6 text-[#C44536]" />
        <h2 className="text-3xl text-[#1A1A1D]">Formation</h2>
      </div>

      <div className="space-y-4">
        {education.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#1F3A5F]"
          >
            <h3 className="text-xl text-[#1A1A1D]">{item.degree}</h3>
            <p className="text-sm text-[#393E46]">
              {item.institution} — {item.period}
            </p>
            <p className="text-sm text-[#393E46] mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
