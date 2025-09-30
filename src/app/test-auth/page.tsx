'use client';

import { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClientOnly } from '@/components/ClientOnly';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function TestAuthPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [firebaseError, setFirebaseError] = useState<string | null>(null);

  useEffect(() => {
    if (!auth) {
      setFirebaseError("Firebase Authentication is not properly initialized.");
      setLoading(false);
      return;
    }
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('Auth state changed:', currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const signOut = async () => {
    if (!auth) {
      return;
    }
    
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error('Sign out error:', error);
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

  if (loading) {
    return (
      <ClientOnly>
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Firebase Authentication Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Authentication Status</h3>
              {user ? (
                <div className="space-y-2">
                  <p><strong>Status:</strong> Authenticated</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>UID:</strong> {user.uid}</p>
                  <p><strong>Email Verified:</strong> {user.emailVerified ? 'Yes' : 'No'}</p>
                  <Button onClick={signOut} variant="outline">
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div>
                  <p><strong>Status:</strong> Not authenticated</p>
                  <p className="text-muted-foreground mt-2">
                    Please log in through the admin panel at <a href="/admin" className="text-blue-500 hover:underline">/admin</a>
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </ClientOnly>
  );
}