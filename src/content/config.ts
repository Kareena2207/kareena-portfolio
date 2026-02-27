import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    links: z.object({
      repo: z.string().url().optional(),
      paper: z.string().url().optional(),
      demo: z.string().url().optional(),
    }).optional(),
  }),
});

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).default([]),
    venue: z.string().optional(),
    year: z.number().optional(),
    pdf: z.string().url().optional(),
    code: z.string().url().optional(),
    bibtex: z.string().optional(),
  }),
});

export const collections = {
  projects,
  publications,
};
