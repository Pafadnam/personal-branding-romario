# Plateforme Personal Branding — TIENDREBEOGO Kiswend-Sida Franck Romario

## État d'avancement

- **Phase 1 — Architecture & Squelette** ✅
- **Phase 2 — Pages complètes** ✅ (CV, Publications, Journaux d'activités, Galerie, Documents)
- **Phase 3 — Decap CMS** ✅ (interface d'administration sans code)

## Stack

- **Framework** : Astro 7 (SSG)
- **Style** : Tailwind CSS v4, système de design éditorial propre au projet
- **Contenu** : collections typées (`src/content.config.ts`) + `src/data/profile.json`
- **Administration** : Decap CMS (`public/admin`), backend Git Gateway
- **Hébergement recommandé** : Netlify (gratuit)

## Lancer le projet en local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère le site statique dans /dist
npm run preview   # prévisualise le build de production
```

## Mise en ligne et activation de l'administration (à faire une seule fois)

1. **Créer le dépôt GitHub** et y pousser ce projet (`git init`, `git remote add origin ...`, `git push`).
2. **Créer un compte Netlify** (gratuit) et connecter le dépôt GitHub — Netlify détecte
   automatiquement `netlify.toml` et déploie à chaque push.
3. Dans le tableau de bord Netlify du site : **Site configuration → Identity → Enable Identity**.
4. Toujours dans Identity : **Registration → Invite only** (pour que seul le client puisse
   créer un compte), puis **Services → Git Gateway → Enable Git Gateway**.
5. Inviter le client comme utilisateur : **Identity → Invite users** avec son email
   ({'{'}franckromario@gmail.com{'}'}). Il recevra un lien pour définir son mot de passe.
6. Le client peut ensuite se connecter sur `https://<nom-du-site>.netlify.app/admin/`
   et modifier tout le contenu du site (CV, publications, journaux, galerie, documents,
   coordonnées) sans écrire une ligne de code. Chaque modification crée automatiquement
   un commit Git et redéploie le site.

## Contenu

Le contenu d'exemple présent dans `src/content/` est marqué `[EXEMPLE — à remplacer]`.
Il peut être remplacé directement via `/admin/` une fois le CMS activé, ou modifié à la
main dans les fichiers Markdown/JSON avant la mise en ligne.

## Prochaines phases

| Phase | Contenu |
|---|---|
| 4 | Recherche, filtres, partage, impression, multilingue |
| 5 | SEO complet (sitemap, robots.txt, Schema.org) |
| 6 | Tests & accessibilité |
| 7 | Automatisation avancée du déploiement (déjà en place via Netlify — GitHub Actions en option) |
| 8 | Formation du client à l'administration |
| 9 | Maintenance |

