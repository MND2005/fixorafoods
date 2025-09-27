# Fixora Food Solutions Website

This is the official website for Fixora Food Solutions (Pvt) Ltd, built with Next.js.

## Features

- Responsive design for all device sizes
- Product showcase with detailed pages
- Services listing
- Company information
- News section
- Careers page
- Contact form
- **AI Chatbot** - Instant customer support using OpenRouter API
- **AI Product Recommendations** - Smart product suggestions using Google AI

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up the chatbot:
   - Create a `.env.local` file in the root directory
   - Add your OpenRouter API key:
     ```
     NEXT_PUBLIC_OPENROUTER_API_KEY=your_api_key_here
     ```

3. Set up AI product recommendations:
   - In the same `.env.local` file, add your Google AI API key:
     ```
     GOOGLE_API_KEY=your_google_ai_api_key_here
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Chatbot Setup

For detailed instructions on setting up and configuring the chatbot, see [docs/chatbot-setup.md](docs/chatbot-setup.md).

## AI Product Recommendations

The website uses Google AI (Gemini) to provide product recommendations. To enable this feature:

1. Get a Google AI API key from [Google AI Studio](https://aistudio.google.com/)
2. Add it to your `.env.local` file as shown in the Getting Started section

For detailed instructions on setting up and configuring the AI recommendations, see [docs/ai-recommendations.md](docs/ai-recommendations.md).

## Testing Features

- Test chatbot: Visit any page and click the chat icon in the bottom right
- Test product recommendations: Visit a product detail page and scroll to the "You Might Also Like" section
- Test recommendations directly: Visit `/test-recommendations` to test with different products
- Test page loading: Visit `/test-pages` to verify About and Careers pages load correctly

## Troubleshooting

If you encounter issues with page loading:
- See [docs/page-loading-fixes.md](docs/page-loading-fixes.md) for information about common page loading issues and fixes

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!