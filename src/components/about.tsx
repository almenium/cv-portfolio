import { User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="scroll-mt-8">
      <div className="flex items-center gap-3 mb-6">
        <User className="w-6 h-6 text-[#C44536]" />
        <h2 className="text-3xl text-[#1A1A1D]">À propos</h2>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#1F3A5F]">
        <p className="text-[#393E46] leading-relaxed mb-4">
          Développeuse full-stack expérimentée (PHP, JavaScript, SQL), je conçois et maintiens des
          applications métier robustes et intuitives. Habituée à travailler au contact des équipes
          ventes, finance et production, je comprends rapidement les besoins pour proposer des
          solutions concrètes.
        </p>
        <p className="text-[#393E46] leading-relaxed">
          J&apos;accorde une grande importance à la qualité du code, à la simplicité de
          l&apos;expérience utilisateur et à l&apos;automatisation des tâches répétitives afin de
          faire gagner du temps aux utilisateurs et fiabiliser la donnée.
        </p>
      </div>
    </section>
  );
}
