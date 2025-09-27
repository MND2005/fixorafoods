import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    
    // Check if API key is available
    const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json({ 
        error: 'API key not configured' 
      }, { status: 500 });
    }
    
    // Initialize OpenAI client
    const openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: apiKey,
    });
    
    // Get response from OpenAI with token limits and a more cost-effective model
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-3.5-turbo', // Using a more cost-effective model
      messages: messages,
      max_tokens: 300, // Further reduce token limit
    });
    
    return NextResponse.json({ 
      message: completion.choices[0]?.message?.content || 'Sorry, I couldn\'t process that request.'
    });
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json({ 
      error: error.message || 'Unknown error occurred' 
    }, { status: 500 });
  }
}