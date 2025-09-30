'use client';

import { useState, useEffect } from 'react';
import { db, auth } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClientOnly } from '@/components/ClientOnly';
import { AlertTriangle, RefreshCw, ShieldAlert } from 'lucide-react';

export default function DebugFirebasePage() {
  const [user, setUser] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [firebaseError, setFirebaseError] = useState<string | null>(null);

  useEffect(() => {
    if (!auth) {
      setFirebaseError("Firebase Authentication is not properly initialized.");
      return;
    }
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const fetchMessages = async () => {
    if (!db) {
      setError("Firestore is not properly initialized.");
      return;
    }
    
    setLoading(true);
    setError('');
    setMessages([]);
    
    try {
      console.log('Fetching messages...');
      
      // Log current user status
      console.log('Current user:', user);
      console.log('User authenticated:', !!user);
      
      // Try to fetch messages
      const q = query(collection(db, 'contactMessages'), orderBy('createdAt', 'desc'), limit(10));
      const querySnapshot = await getDocs(q);
      
      console.log('Query snapshot size:', querySnapshot.size);
      
      const messagesData: any[] = [];
      querySnapshot.forEach((doc) => {
        console.log('Document ID:', doc.id);
        console.log('Document data:', doc.data());
        messagesData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      
      setMessages(messagesData);
      console.log('Messages fetched:', messagesData);
    } catch (err: any) {
      console.error('Error fetching messages:', err);
      setError(`Error: ${err.message || 'Unknown error'}`);
      
      // Provide more specific guidance for permission errors
      if (err.message && err.message.includes('permissions')) {
        setError(`Permission Error: ${err.message}. Please check your Firestore security rules. See documentation for correct rules.`);
      }
    } finally {
      setLoading(false);
    }
  };

  if (firebaseError) {
    return (
      <ClientOnly>
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                <AlertTriangle className="mr-2 text-yellow-500" />
                Firebase Configuration Error
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                There's an issue with your Firebase configuration:
              </p>
              
              <div className="p-3 bg-red-50 text-red-700 rounded-md">
                <p><strong>Error:</strong> {firebaseError}</p>
              </div>
              
              <div className="flex justify-center">
                <Button onClick={() => window.location.reload()}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reload Page
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Firebase Debug Tool</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Authentication Status</h3>
              <p>User: {user ? user.email : 'Not logged in'}</p>
              <p>UID: {user ? user.uid : 'N/A'}</p>
              {!user && (
                <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                  <h4 className="font-medium text-yellow-800 mb-1">Login Required</h4>
                  <p className="text-yellow-700 text-sm mb-2">
                    You need to be logged in to read messages. Only authenticated admins can view contact form submissions.
                  </p>
                  <Button 
                    onClick={() => window.open('/admin', '_blank')} 
                    variant="outline" 
                    size="sm"
                    className="text-yellow-700 border-yellow-300 hover:bg-yellow-100"
                  >
                    Go to Admin Login
                  </Button>
                  <p className="text-yellow-600 text-xs mt-2">
                    For detailed instructions, see the <a href="/docs/admin-login-guide.md" className="underline">Admin Login Guide</a>
                  </p>
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Debug Actions</h3>
              <Button onClick={fetchMessages} disabled={loading || !db}>
                {loading ? 'Fetching...' : 'Fetch Messages'}
              </Button>
              {!db && (
                <p className="text-red-500 text-sm mt-2">
                  Firestore is not initialized. Check your Firebase configuration.
                </p>
              )}
            </div>
            
            {error && (
              <div className="p-3 bg-red-50 text-red-700 rounded-md">
                <div className="flex items-center">
                  {error.includes('permissions') ? (
                    <ShieldAlert className="h-5 w-5 text-red-500 mr-2" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                  )}
                  <h3 className="font-semibold">Error:</h3>
                </div>
                <p>{error}</p>
                
                {error.includes('permissions') && (
                  <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                    <h4 className="font-medium text-yellow-800 mb-1">Permission Fix Required:</h4>
                    <p className="text-yellow-700 text-sm mb-2">
                      Your Firestore security rules need to be updated to allow authenticated users to read messages.
                    </p>
                    <div className="p-2 bg-white border border-yellow-300 rounded-md mb-2">
                      <p className="text-xs font-mono">
                        rules_version = '2';
                        <br />
                        service cloud.firestore {'{'}
                        <br />
                        &nbsp;&nbsp;match /databases/{{'{database}'}}/documents {'{'}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;// Allow anyone to create contact messages
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;match /contactMessages/{{'{document}'}} {'{'}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;allow create: if true;
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;allow read, update, delete: if request.auth != null;
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'}'}
                        <br />
                        &nbsp;&nbsp;{'}'}
                        <br />
                        {'}'}
                      </p>
                    </div>
                    <p className="text-yellow-700 text-sm">
                      To fix this:
                      <br />
                      1. Go to Firebase Console {'>'} Firestore Database {'>'} Rules
                      <br />
                      2. Replace the existing rules with the ones above
                      <br />
                      3. Click "Publish" to save
                    </p>
                    <p className="text-yellow-600 text-xs mt-2">
                      Note: You also need to be logged in to read messages. <Button 
                        onClick={() => window.open('/admin', '_blank')} 
                        variant="link" 
                        size="sm"
                        className="text-yellow-600 p-0 h-auto"
                      >
                        Go to Admin Login
                      </Button>
                    </p>
                  </div>
                )}
              </div>
            )}
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Messages ({messages.length})</h3>
              {messages.length === 0 ? (
                <div>
                  <p className="text-muted-foreground">No messages found</p>
                  {!user && (
                    <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                      <p className="text-yellow-700 text-sm">
                        You need to be logged in to read messages. Only authenticated admins can view contact form submissions.
                      </p>
                      <Button 
                        onClick={() => window.open('/admin', '_blank')} 
                        variant="outline" 
                        size="sm"
                        className="mt-2 text-yellow-700 border-yellow-300 hover:bg-yellow-100"
                      >
                        Go to Admin Login
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className="p-3 border rounded-md">
                      <p><strong>ID:</strong> {msg.id}</p>
                      <p><strong>Name:</strong> {msg.fullName || 'N/A'}</p>
                      <p><strong>Email:</strong> {msg.email || 'N/A'}</p>
                      <p><strong>Subject:</strong> {msg.subject || 'N/A'}</p>
                      <p><strong>Created:</strong> {msg.createdAt?.toDate?.() || msg.createdAt?.seconds ? new Date(msg.createdAt.seconds * 1000).toString() : 'Unknown'}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </ClientOnly>
  );
}