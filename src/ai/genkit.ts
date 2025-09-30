import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Only initialize Google AI if API key is available
const plugins = [];
const apiKey = process.env.GOOGLE_API_KEY;

if (apiKey) {
  plugins.push(googleAI({
    apiKey: apiKey,
  }));
} else {
  console.warn('GOOGLE_API_KEY not found. AI features will be disabled.');
}

export const ai = genkit({
  plugins: plugins,
  model: 'googleai/gemini-1.5-pro',
});