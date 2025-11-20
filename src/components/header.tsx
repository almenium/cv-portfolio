import { Code2, Download } from "lucide-react";

export function Header() {
  return (
    <header className="bg-[#1F3A5F] text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#C44536] p-3 rounded-lg">
            <Code2 className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl">Alexia Ménier</h1>
            <p className="text-xl text-[#EEEEEE] mt-2">
              Développeuse Full-Stack PHP / JavaScript
            </p>
          </div>
        </div>
        <p className="text-[#EEEEEE] max-w-2xl mb-4">
          Développeuse full-stack spécialisée dans les applications métier (ventes, finance,
          production), j&apos;allie rigueur technique et compréhension fonctionnelle pour livrer des
          solutions robustes, performantes et intuitives.
        </p>
        <p className="text-[#EEEEEE] max-w-2xl mb-8">
          Basée à Fréjus (déménagement prévu vers Chinon), je recherche un poste à temps plein en
          télétravail (full remote) sur des projets web ou SaaS.
        </p>
        <a
          href="/cv-portfolio/cv-alexia-menier.pdf"
          className="bg-[#C44536] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#a83a2c] transition-colors"
        >
          <Download className="w-5 h-5" />
          Télécharger mon CV (PDF)
        </a>
      </div>
    </header>
  );
}
