# Chatbot Setup Guide

This document explains how to set up and configure the chatbot feature for the Fixora Food Solutions website.

## Prerequisites

1. An OpenRouter API key (get one at https://openrouter.ai/)

## Setup Instructions

1. **Add your OpenRouter API Key**
   - Open the `.env.local` file in the root of the project
   - Replace `your_openrouter_api_key_here` with your actual OpenRouter API key:
     ```
     NEXT_PUBLIC_OPENROUTER_API_KEY=sk-or-your-api-key-here
     ```

2. **Configure Site Information (Optional)**
   - The chatbot is already configured with the site URL and title
   - These are automatically detected from the browser in the [ChatBot.tsx](file:///c%3A/Users/LENOVO/Documents/Fixorafood.lk/fixorafoods/src/components/ChatBot.tsx#L0-L269) component

3. **Customize the Assistant's Personality**
   - You can modify the system prompt in the [ChatBot.tsx](file:///c%3A/Users/LENOVO/Documents/Fixorafood.lk/fixorafoods/src/components/ChatBot.tsx#L0-L269) component
   - Look for the `system` role message in the `handleSubmit` function
   - Adjust the personality, knowledge, and response style as needed

## How It Works

- The chatbot appears as a floating button in the bottom right corner of every page
- Click the button to open/close the chat window
- The chatbot uses OpenRouter's API with the GPT-3.5-turbo model (cost-effective option)
- All conversations happen in real-time with the AI assistant

## Credit Limitations

OpenRouter has credit limitations for free accounts. If you encounter errors about insufficient credits:

1. **Upgrade your OpenRouter account**:
   - Visit https://openrouter.ai/settings/credits to upgrade to a paid account
   - This will give you access to more tokens and higher rate limits

2. **Use a different model**:
   - The current implementation uses `openai/gpt-3.5-turbo` which is more cost-effective
   - You can change the model in [src/app/api/chat/route.ts](file:///c%3A/Users/LENOVO/Documents/Fixorafood.lk/fixorafoods/src/app/api/chat/route.ts#L25-L30) if needed

3. **Reduce token usage**:
   - The current implementation limits responses to 300 tokens
   - You can adjust this limit in [src/app/api/chat/route.ts](file:///c%3A/Users/LENOVO/Documents/Fixorafood.lk/fixorafoods/src/app/api/chat/route.ts#L25-L30) if needed

## Testing

- Unit tests are available in [ChatBot.test.tsx](file:///c%3A/Users/LENOVO/Documents/Fixorafood.lk/fixorafoods/src/components/ChatBot.test.tsx)
- Run tests with `npm test` (if you have a testing framework set up)
- Tests cover:
  - Rendering of the chat toggle button
  - Opening/closing the chat window
  - Sending messages and receiving responses

## Troubleshooting

1. **Chatbot not appearing**
   - Ensure the [ChatBot](file:///c%3A/Users/LENOVO/Documents/Fixorafood.lk/fixorafoods/src/components/ChatBot.tsx#L12-L267) component is included in the [layout.tsx](file:///c%3A/Users/LENOVO/Documents/Fixorafood.lk/fixorafoods/src/app/layout.tsx#L25-L47) file
   - Check that there are no JavaScript errors in the browser console

2. **API key issues**
   - Verify that the API key is correctly set in `.env.local`
   - Ensure there are no extra spaces or characters in the key
   - Check that the key has the necessary permissions

3. **Credit/Token issues**
   - If you see errors about credits or tokens, you need to upgrade your OpenRouter account
   - Visit https://openrouter.ai/settings/credits to add credits

4. **Model issues**
   - If the `openai/gpt-3.5-turbo` model is not available, you can change it in [src/app/api/chat/route.ts](file:///c%3A/Users/LENOVO/Documents/Fixorafood.lk/fixorafoods/src/app/api/chat/route.ts#L25-L30)
   - See OpenRouter documentation for available models