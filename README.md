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
→ `.github/workflows/main.yml`

---

## 📄 **Télécharger mon CV PDF**

Déposer votre fichier dans :

```
public/cv-alexia-menier.pdf
```

Le bouton dans le site pointera automatiquement dessus.

---

# 💬 **Contact**

📧 Email : **alexia.menier.83@gmail.com**  
🔗 LinkedIn : **https://www.linkedin.com/in/alexia-menier-0501**  

---

# © Licence

Projet personnel — Tous droits réservés © **2025 Alexia Ménier**
