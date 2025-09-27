'use client';

import { useEffect, useState } from 'react';
import { ChatBot } from './ChatBot';

export function ChatBotWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render the chatbot on the client side
  if (!isClient) {
    return null;
  }

  return <ChatBot />;
}