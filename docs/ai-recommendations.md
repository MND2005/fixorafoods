# AI Product Recommendations Setup Guide

This document explains how to set up and configure the AI-powered product recommendations feature for the Fixora Food Solutions website.

## Prerequisites

1. A Google AI API key (get one at https://aistudio.google.com/)

## Setup Instructions

1. **Add your Google AI API Key**
   - Open the `.env.local` file in the root of the project
   - Add your Google AI API key:
     ```
     GOOGLE_API_KEY=your_google_ai_api_key_here
     ```

2. **Verify the genkit configuration**
   - The genkit configuration in [src/ai/genkit.ts](file:///c%3A/Users/LENOVO/Documents/Fixorafood.lk/fixorafoods/src/ai/genkit.ts) should automatically use the API key from the environment variables

## How It Works

- The product recommendations appear on product detail pages in the "You Might Also Like" section
- When a user views a product, the system sends product details to Google AI (Gemini)
- The AI analyzes the product and suggests 4 complementary or related products
- The system then tries to find actual products in the database that match these recommendations
- If matching products can't be found, the system falls back to showing random products from the same category

## Testing Recommendations

You can test the recommendations feature by visiting the test page:
- Navigate to `/test-recommendations` in your browser to test the original implementation
- Navigate to `/test-recommendations-fix` in your browser to test the fixed implementation
- Select different products from the dropdown to see their recommendations

## Fallback Mechanism

If the AI service is unavailable or returns no results:
1. The system automatically falls back to showing random products from the same category
2. If there aren't enough products in the same category, it will include products from other categories
3. Users will see a notification that AI recommendations are unavailable

## Customizing Recommendations

To improve the quality of AI recommendations:
1. Modify the prompt in [src/ai/flows/product-recommendations.ts](file:///c%3A/Users/LENOVO/Documents/Fixorafood.lk/fixorafoods/src/ai/flows/product-recommendations.ts)
2. Adjust the number of recommended products in the prompt
3. Fine-tune the instructions to better match your product catalog

## Troubleshooting

1. **Recommendations not appearing**
   - Verify that the Google AI API key is correctly set in `.env.local`
   - Check that there are no JavaScript errors in the browser console
   - Ensure the [ProductRecommendations](file:///c%3A/Users/LENOVO/Documents/Fixorafood.lk/fixorafoods/src/components/ProductRecommendations.tsx#L13-L235) component is included in the product detail page

2. **API key issues**
   - Verify that the API key is correctly set in `.env.local`
   - Ensure there are no extra spaces or characters in the key
   - Check that the key has the necessary permissions for the Gemini API

3. **Empty recommendations**
   - The system will automatically fall back to random products if AI returns no results
   - Check the browser console for any error messages
   - Verify that the product data being sent to the AI is complete

4. **404 Errors on Product Links**
   - This was a known issue where AI-generated recommendations had fake IDs
   - The fix ensures that only real products from the database are shown in recommendations
   - All recommended products now link to actual product detail pages

5. **Model issues**
   - The current implementation uses `googleai/gemini-1.5-pro`
   - You can change the model in [src/ai/genkit.ts](file:///c%3A/Users/LENOVO/Documents/Fixorafood.lk/fixorafoods/src/ai/genkit.ts) if needed
   - See Google AI documentation for available models