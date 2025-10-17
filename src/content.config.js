import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const products = defineCollection({
  loader: file("src/data/products.json"),
    schema: z.object({
        id: z.number(),
        title: z.string(),
        price: z.number(),
        description: z.string(),
        category: z.string(),
        image: z.string(),
        ating: z.object({
            rate: z.number(),
            count: z.number(),
    }),
}),
});