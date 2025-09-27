import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function GET() {
  try {
    console.log('Testing OpenRouter API connection...');
    
    // Check if API key is available
    const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
    console.log('API Key present:', !!apiKey);
    
    if (!apiKey) {
      return NextResponse.json({ 
        success: false, 
        error: 'API key not found in environment variables' 
      });
    }
    
    // Initialize OpenAI client
    const openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: apiKey,
    });
    
    // Test the API with a simple request
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-4o',
      messages: [
        {
          role: 'user',
          content: 'Say "Hello, World!"',
        },
      ],
      max_tokens: 10,
    });
    
    console.log('API test successful:', completion.choices[0].message.content);
    
    return NextResponse.json({ 
      success: true, 
      message: completion.choices[0].message.content 
    });
  } catch (error: any) {
    console.error('API test failed:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Unknown error occurred' 
    });
  }
}