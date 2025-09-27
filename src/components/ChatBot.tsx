'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Send, X, MessageCircle, AlertCircle } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m here to help you with any questions about Fixora Food Solutions. How can I assist you today?',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [showAttention, setShowAttention] = useState(true);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Initialize client flag
  useEffect(() => {
    setIsClient(true);
    
    // Hide attention animation after 5 seconds
    const timer = setTimeout(() => {
      setShowAttention(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom of messages
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollViewport) {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }
    }
  }, [messages]);

  // Handle Enter key press in textarea
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && inputValue.trim()) {
        handleSubmit(e as any);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    // Clear any previous errors
    setError(null);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Add assistant thinking message
      const thinkingMessage: Message = {
        id: `thinking-${Date.now()}`,
        role: 'assistant',
        content: 'Thinking...',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, thinkingMessage]);

      // Call our API route instead of using OpenAI client directly
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `You are a helpful assistant for Fixora Food Solutions (Pvt) Ltd. 
              Your responses should be friendly, professional, and informative.
              Keep responses concise but helpful.
              Company information:
              - Founded with a mission to deliver safe, nutritious, and innovative food solutions
              - Offers products in dairy, beverages, spices, and processed foods
              - Provides consultancy and support services
              - Committed to "Healthy Foods, Happy Lives"
              - Uses Industry 4.0 technology
              - Sri Lankan heritage with a future-forward mindset
              
              If asked about specific products or services, you can mention that the user can browse the website for detailed information.
              If asked about contact information, direct them to the contact page.
              
              Do not make up information that you don't have. If you're unsure, suggest checking the website or contacting the company directly.`
            },
            ...messages.filter(m => m.id !== thinkingMessage.id).map(m => ({
              role: m.role,
              content: m.content
            })),
            { role: 'user', content: userMessage.content }
          ],
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response from server');
      }
      
      // Remove thinking message and add actual response
      setMessages(prev => {
        const withoutThinking = prev.filter(m => m.id !== thinkingMessage.id);
        const assistantMessage: Message = {
          id: `response-${Date.now()}`,
          role: 'assistant',
          content: data.message || 'Sorry, I couldn\'t process that request.',
          timestamp: new Date(),
        };
        return [...withoutThinking, assistantMessage];
      });
    } catch (err: any) {
      console.error('Error getting AI response:', err);
      
      // Handle specific credit error
      if (err.message && err.message.includes('credits')) {
        setError('The chat service is temporarily unavailable due to credit limitations. Please visit https://openrouter.ai/settings/credits to upgrade or try again later.');
      } else {
        setError(`Failed to get response: ${err.message || err.toString() || 'Unknown error'}`);
      }
      
      // Remove thinking message and add error message
      setMessages(prev => {
        const withoutThinking = prev.filter(m => m.id !== `thinking-${Date.now()}`);
        const errorMessage: Message = {
          id: `error-${Date.now()}`,
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again later.',
          timestamp: new Date(),
        };
        return [...withoutThinking, errorMessage];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    // Clear error when closing chat
    if (isOpen) {
      setError(null);
    }
    // Focus textarea when opening chat
    if (!isOpen && textareaRef.current) {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
    }
  };

  // Don't render anything on the server
  if (!isClient) {
    return null;
  }

  // Don't render if no API key is provided
  if (!process.env.NEXT_PUBLIC_OPENROUTER_API_KEY) {
    return null;
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 transition-all duration-300 ${
          showAttention 
            ? 'animate-bounce scale-110' 
            : ''
        }`}
        style={{ backgroundColor: '#919432' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#7a7d2a'; // Darker shade on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#919432'; // Original color
        }}
        size="icon"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6 text-white" />
            {showAttention && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
              </span>
            )}
          </>
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-md h-[500px] bg-background border rounded-lg shadow-xl z-50 flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Fixora Assistant</h3>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleChat} aria-label="Close chat">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-destructive/10 text-destructive p-3 text-sm flex items-center">
              <AlertCircle className="h-4 w-4 mr-2" />
              {error}
            </div>
          )}

          {/* Messages */}
          <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <Textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about our products and services... (Press Enter to send)"
                className="flex-grow min-h-[40px] max-h-[100px]"
                disabled={isLoading}
                aria-label="Type your message"
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={isLoading || !inputValue.trim()}
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Press Enter to send, Shift+Enter for new line
            </div>
          </form>
        </div>
      )}
    </>
  );
}