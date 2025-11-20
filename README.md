# 🌐 **CV Portfolio – Alexia Ménier**

![Banner](https://img.shields.io/badge/Status-Online-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-2025-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-Bundled-646CFF?style=for-the-badge&logo=vite)
![GitHub Pages](https://img.shields.io/badge/Deployed%20with-GitHub%20Pages-black?style=for-the-badge&logo=github)

---

## 🔗 **Site en ligne**

👉 **https://almenium.github.io/cv-portfolio/**  
📄 Le site est automatiquement mis à jour à chaque commit sur `main`.

---

## 👩‍💻 **À propos du projet**

Ce projet est mon **CV interactif** et **Portfolio développeuse**, conçu pour présenter :

- mes compétences,
- mon expérience professionnelle,
- mes projets,
- et mes objectifs.

Il est construit en React + Tailwind pour une navigation fluide et un design moderne.

---

## 🛠️ **Tech Stack**

| Catégorie | Technologies |
|----------|--------------|
| **Frontend** | React, TypeScript, Vite |
| **UI / Design** | Tailwind CSS, Lucide Icons |
| **Déploiement** | GitHub Pages |
| **Automations** | GitHub Actions |
| **Langage** | TypeScript |

---

## 📂 **Structure du projet**

```
cv-portfolio/
 ├── public/                 # Images, PDF du CV
 ├── src/
 │   ├── components/         # Sections du site
 │   ├── main.tsx
 │   └── index.css
 ├── vite.config.ts          # Configuration Vite (+ base "/cv-portfolio/")
 ├── package.json
 └── README.md
```

---

## 🚀 **Déploiement automatique via GitHub Actions**

Ce projet est déployé sur GitHub Pages grâce à un workflow automatique.

Chaque push sur `main` déclenche :

1. `npm install`
2. `npm run build`
3. Upload du dossier `build/`
4. Déploiement sur GitHub Pages

Le workflow se trouve ici :  
→ `.github/workflows/deploy.yml`

---

## 📄 **Télécharger mon CV PDF**

Déposer votre fichier dans :

```
public/cv-alexia-menier.pdf
```

Le bouton dans le site pointera automatiquement dessus.

---

# 🧩 **Guide : modifier et personnaliser ce CV**

Tu peux tout modifier **depuis Github.com**, sans terminal, sans Node installé.

### 🔧 1. Modifier les textes

Chaque section se trouve dans :

```
src/components/
```

Exemples :

- `header.tsx`
- `about.tsx`
- `skills.tsx`
- `experience.tsx`
- `projects.tsx`
- `education.tsx`
- `contact.tsx`

---

### 🎨 2. Modifier les couleurs et styles

Les styles Tailwind sont directement dans les composants :

Exemple :  
`bg-[#1F3A5F]`, `text-[#C44536]`, `rounded-xl`, `shadow-lg`, `grid`, etc.

Si tu veux changer la palette, je peux t’en générer une nouvelle.

---

### 🖼️ 3. Modifier l’image d’aperçu

Dans le README :  
```md
![Preview](public/preview.png)
```

Dépose un fichier dans `public/preview.png`.

---

### 📦 4. Modifier la configuration Vite

Dans `vite.config.ts` :

```ts
base: "/cv-portfolio/",
build: {
   outDir: "build",
}
```

Ne change **`base`** que si tu renommes ton repo GitHub.

---

### 🧪 5. Tester le site en local

Si un jour tu es sur ton PC perso :

```
npm install
npm run dev
```

---

### 🌐 6. Ajouter un nouveau projet dans le Portfolio

Dans `src/components/projects.tsx` :

```ts
const projects = [
  { id: 1, title: "...", description: "...", technologies: ["..."] },
];
```

➡️ Ajouter un projet = ajouter un objet.

---

### 📝 7. Ajouter une nouvelle section

1. Créer un fichier `src/components/NomDeSection.tsx`
2. L’importer et l’ajouter dans `App.tsx`

---

# 💬 **Contact**

📧 Email : **alexia.menier.83@gmail.com**  
📱 Téléphone : **06 15 84 47 42**  
🔗 LinkedIn : **https://www.linkedin.com/in/alexia-menier-0501**  
📍 Basée à Fréjus — déménagement prévu vers Chinon

---

# © Licence

Projet personnel — Tous droits réservés © **2025 Alexia Ménier**
