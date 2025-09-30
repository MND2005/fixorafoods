'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TestFirebasePage() {
  const [status, setStatus] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

  const testSave = async () => {
    setStatus('Saving test message...');
    try {
      const docRef = await addDoc(collection(db, 'contactMessages'), {
        fullName: 'Test User',
        email: 'test@example.com',
        subject: 'Test Message',
        message: 'This is a test message to verify Firebase integration.',
        createdAt: new Date(),
      });
      setStatus(`Message saved successfully with ID: ${docRef.id}`);
    } catch (error: any) {
      setStatus(`Error saving message: ${error.message}`);
      console.error('Error saving message:', error);
    }
  };

  const testRead = async () => {
    setStatus('Reading messages...');
    try {
      const q = query(collection(db, 'contactMessages'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const messagesData: any[] = [];
      querySnapshot.forEach((doc) => {
        messagesData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setMessages(messagesData);
      setStatus(`Found ${messagesData.length} messages`);
    } catch (error: any) {
      setStatus(`Error reading messages: ${error.message}`);
      console.error('Error reading messages:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Firebase Test Page</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Use this page to test Firebase integration for contact form messages.
          </p>
          
          <div className="flex gap-2">
            <Button onClick={testSave}>Test Save Message</Button>
            <Button onClick={testRead} variant="secondary">Test Read Messages</Button>
          </div>
          
          {status && (
            <div className="p-3 bg-muted rounded-md">
              <p className="font-medium">Status:</p>
              <p>{status}</p>
            </div>
          )}
          
          {messages.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Messages:</h3>
              {messages.map((msg) => (
                <div key={msg.id} className="p-3 border rounded-md">
                  <p><strong>ID:</strong> {msg.id}</p>
                  <p><strong>Name:</strong> {msg.fullName}</p>
                  <p><strong>Email:</strong> {msg.email}</p>
                  <p><strong>Subject:</strong> {msg.subject}</p>
                  <p><strong>Message:</strong> {msg.message}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}