'use server';

/**
 * @fileOverview An AI agent that recommends products based on a viewed product.
 *
 * - recommendProducts - A function that handles the product recommendation process.
 * - RecommendProductsInput - The input type for the recommendProducts function.
 * - RecommendProductsOutput - The return type for the recommendProducts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendProductsInputSchema = z.object({
  productName: z.string().describe('The name of the product currently being viewed.'),
  productDescription: z.string().describe('The description of the product currently being viewed.'),
  productCategory: z.string().describe('The category of the product currently being viewed.'),
  productImageUrl: z.string().describe('The URL of the product image currently being viewed.'),
});
export type RecommendProductsInput = z.infer<typeof RecommendProductsInputSchema>;

const RecommendProductsOutputSchema = z.object({
  recommendedProducts: z.array(
    z.object({
      name: z.string().describe('The name of the recommended product.'),
      description: z.string().describe('A short description of the recommended product.'),
      imageUrl: z.string().describe('The URL of the recommended product image.'),
      category: z.string().describe('The category of the recommended product.'),
    })
  ).describe('An array of recommended products based on the viewed product.'),
});
export type RecommendProductsOutput = z.infer<typeof RecommendProductsOutputSchema>;

export async function recommendProducts(input: RecommendProductsInput): Promise<RecommendProductsOutput> {
  try {
    return await recommendProductsFlow(input);
  } catch (error) {
    console.error('AI recommendation error:', error);
    // Return empty recommendations to trigger fallback mechanism
    return { recommendedProducts: [] };
  }
}

const prompt = ai.definePrompt({
  name: 'recommendProductsPrompt',
  input: {schema: RecommendProductsInputSchema},
  output: {schema: RecommendProductsOutputSchema},
  prompt: `You are a product recommendation expert for Fixora Food Solutions (Pvt) Ltd, a company that provides dairy and food processing equipment and services in Sri Lanka.

Based on the product the user is currently viewing, recommend 4 other relevant products that the user might be interested in. These recommendations should be complementary products that would enhance or work well with the current product.

Current Product Details:
- Name: {{{productName}}}
- Description: {{{productDescription}}}
- Category: {{{productCategory}}}
- Image URL: {{{productImageUrl}}}

Instructions:
1. Recommend products that are complementary or related to the current product
2. Ensure recommendations are relevant to the dairy/food processing industry
3. Include products from both the same category and related categories
4. Provide realistic product names, descriptions, and categories that match Fixora's product catalog
5. Use appropriate image URLs for dairy/food processing equipment (use generic but relevant URLs like /images/diary-01.png, /images/diary-02.png, etc.)
6. Focus on products that would be useful to someone interested in the current product

Format your answer as a JSON object with a "recommendedProducts" array containing exactly 4 products, each with name, description, imageUrl and category fields.

Example format:
{
  "recommendedProducts": [
    {
      "name": "Milk Storage Tank - 1000L",
      "description": "Large capacity stainless steel bulk milk cooler with temperature control for efficient storage",
      "imageUrl": "/images/diary-02.png",
      "category": "Machinery & Equipment"
    }
  ]
}

Return ONLY valid JSON in the format above. Do not include any other text or explanations.
`,
});

const recommendProductsFlow = ai.defineFlow(
  {
    name: 'recommendProductsFlow',
    inputSchema: RecommendProductsInputSchema,
    outputSchema: RecommendProductsOutputSchema,
  },
  async input => {
    try {
      const {output} = await prompt(input);
      return output!;
    } catch (error) {
      console.error('AI flow error:', error);
      // Return empty recommendations to trigger fallback mechanism
      return { recommendedProducts: [] } as RecommendProductsOutput;
    }
  }
);