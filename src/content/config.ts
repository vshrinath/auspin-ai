import { defineCollection, z } from 'astro:content';

const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const listItemSchema = z.object({
  title: z.string(),
  body: z.string(),
});

const heroSection = z.object({
  type: z.literal('hero'),
  order: z.number(),
  anchor: z.string().optional(),
  tagline: z.string(),
  heading: z.object({
    pre: z.string(),
    highlight: z.string(),
    post: z.string(),
  }),
  description: z.string(),
  footnote: z.string(),
  ctas: z.object({
    primary: linkSchema,
    secondary: linkSchema,
  }),
});

const problemSection = z.object({
  type: z.literal('problem'),
  order: z.number(),
  anchor: z.string(),
  title: z.string(),
  intro: z.string(),
  bullets: z.array(listItemSchema),
  closing: z.string(),
});

const servicesSection = z.object({
  type: z.literal('services'),
  order: z.number(),
  anchor: z.string(),
  title: z.string(),
  intro: z.string(),
  services: z.array(listItemSchema),
  cta: linkSchema.optional(),
});

const methodSection = z.object({
  type: z.literal('method'),
  order: z.number(),
  anchor: z.string(),
  title: z.string(),
  intro: z.string(),
  steps: z.array(
    z.object({
      title: z.string(),
      detail: z.string(),
    }),
  ),
  toolset: z.string(),
  cta: linkSchema.optional(),
});

const outcomesSection = z.object({
  type: z.literal('outcomes'),
  order: z.number(),
  anchor: z.string(),
  title: z.string(),
  intro: z.string(),
  deliverables: z.array(z.string()),
  note: z.string(),
});

const teamSection = z.object({
  type: z.literal('team'),
  order: z.number(),
  anchor: z.string(),
  title: z.string(),
  intro: z.string(),
  cta: linkSchema.optional(),
});

const contactFieldSchema = z.object({
  name: z.string(),
  type: z.enum(['text', 'email', 'textarea']),
  placeholder: z.string(),
  required: z.boolean().optional(),
});

const contactSection = z.object({
  type: z.literal('contact'),
  order: z.number(),
  anchor: z.string(),
  title: z.string(),
  marketsLabel: z.string(),
  regions: z.array(z.string()),
  subtitle: z.string(),
  formName: z.string(),
  formFields: z.array(contactFieldSchema),
  buttons: z.object({
    primary: z.object({
      label: z.string(),
      type: z.enum(['submit', 'button']).optional(),
    }),
    secondary: linkSchema,
  }),
  note: z.string(),
});

const sectionsCollection = defineCollection({
  type: 'content',
  schema: z.discriminatedUnion('type', [
    heroSection,
    problemSection,
    servicesSection,
    methodSection,
    outcomesSection,
    teamSection,
    contactSection,
  ]),
});

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    photo: z.string(),
  }),
});

export const collections = {
  sections: sectionsCollection,
  team: teamCollection,
};
