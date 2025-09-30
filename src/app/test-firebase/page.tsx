'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, orderBy, getDocs } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ClientOnly } from '@/components/ClientOnly';

export default function TestFirebasePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);
    
    if (!db) {
      setSubmitStatus({ type: 'error', message: 'Firestore is not initialized. Please check your Firebase configuration.' });
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'contactMessages'), {
        ...formData,
        createdAt: new Date()
      });
      console.log('Document written with ID: ', docRef.id);
      setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  const fetchMessages = async () => {
    if (!db) {
      setSubmitStatus({ type: 'error', message: 'Firestore is not initialized. Please check your Firebase configuration.' });
      return;
    }

    setLoading(true);
    try {
      const q = query(collection(db, 'contactMessages'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const fetchedMessages = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(fetchedMessages);
    } catch (error) {
      console.error('Error fetching messages: ', error);
      setSubmitStatus({ type: 'error', message: 'Failed to fetch messages. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ClientOnly>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Firebase Test Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send Test Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button type="submit">Send Message</Button>
              </form>
              
              {submitStatus && (
                <div className={`mt-4 p-3 rounded-md ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={fetchMessages} disabled={loading} className="mb-4">
                {loading ? 'Loading...' : 'Fetch Messages'}
              </Button>
              
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className="p-3 border rounded-md">
                    <p><strong>Name:</strong> {msg.fullName || 'N/A'}</p>
                    <p><strong>Email:</strong> {msg.email || 'N/A'}</p>
                    <p><strong>Subject:</strong> {msg.subject || 'N/A'}</p>
                    <p><strong>Message:</strong> {msg.message || 'N/A'}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ClientOnly>
  );
}