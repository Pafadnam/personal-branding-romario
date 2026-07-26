import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const experiences = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cv/experiences" }),
  schema: z.object({
    poste: z.string(),
    structure: z.string(),
    lieu: z.string().optional(),
    dateDebut: z.string(),
    dateFin: z.string().optional(), // absent = poste actuel
    ordre: z.number().default(0),
  }),
});

const formations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cv/formations" }),
  schema: z.object({
    diplome: z.string(),
    etablissement: z.string(),
    annee: z.string(),
    ordre: z.number().default(0),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
  schema: z.object({
    titre: z.string(),
    date: z.date(),
    categorie: z.enum(["article", "communique", "actualite", "note", "rapport"]),
    resume: z.string(),
    image: z.string().optional(),
    documentPdf: z.string().optional(),
  }),
});

const activites = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/activites" }),
  schema: z.object({
    titre: z.string(),
    date: z.date(),
    description: z.string(),
    lieu: z.string().optional(),
    images: z.array(z.string()).default([]),
  }),
});

const galerie = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/galerie" }),
  schema: z.object({
    titre: z.string(),
    type: z.enum(["photo", "video"]),
    url: z.string(),
    album: z.string().optional(),
    date: z.date().optional(),
  }),
});

const documents = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/documents" }),
  schema: z.object({
    titre: z.string(),
    type: z.enum(["pdf", "word", "excel", "zip"]),
    fichier: z.string(),
    categorie: z.string().optional(),
    date: z.date().optional(),
  }),
});

const distinctions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/distinctions" }),
  schema: z.object({
    type: z.enum(["certification", "distinction", "formation"]),
    titre: z.string(),
  }),
});

const temoignages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/temoignages" }),
  schema: z.object({
    auteur: z.string(),
    fonction: z.string().optional(),
    citation: z.string(),
  }),
});

export const collections = {
  experiences,
  formations,
  publications,
  activites,
  galerie,
  documents,
  distinctions,
  temoignages,
};
