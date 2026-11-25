import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const tools = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/tools" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    tagline: z.string(),
    category: z.string(),
    pricing_model: z.string(),
    license: z.string(),
    requires_signup: z.boolean(),
    has_watermark: z.boolean(),
    commercial_use: z.boolean(),
    runs_offline: z.boolean(),
    platforms: z.array(z.string()),
    min_vram_gb: z.number(),
    min_ram_gb: z.number(),
    alternative_to: z.array(z.string()),
    official_url: z.string().url(),
    github_repo: z.string().optional(),
    real_test_summary: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    last_verified: z.string(),
  }),
});

export const collections = { tools };
