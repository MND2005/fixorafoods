'use client';

import { useState, useEffect } from 'react';
import { db, auth } from '@/lib/firebase';
import { collection, addDoc, getDocs, query, limit } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClientOnly } from '@/components/ClientOnly';
import { AlertTriangle, CheckCircle, Database, Shield } from 'lucide-react';
import { Auth } from 'firebase/auth';

// Define types for our test results
interface TestResults {
  firebaseInitialized?: boolean;
  canWrite?: boolean;
  testDocId?: string;
  writeError?: string;
  canRead?: boolean;
  readError?: string;
  docCount?: number;
  authInitialized?: boolean;
  currentUser?: {
    uid: string;
    email: string | null;
  } | null;
  generalError?: string;
}

export default function TestFirebaseConfigPage() {
  const [testResults, setTestResults] = useState<TestResults>({});
  const [loading, setLoading] = useState(false);

  const runTests = async () => {
    setLoading(true);
    const results: TestResults = {};

    try {
      // Test 1: Check if Firebase is initialized
      results.firebaseInitialized = !!db && !!auth;
      
      // Test 2: Check if we can write to Firestore (public access)
      if (db) {
        try {
          const testDoc = {
            test: true,
            timestamp: new Date(),
            message: "Firebase configuration test"
          };
          const docRef = await addDoc(collection(db, "contactMessages"), testDoc);
          results.canWrite = true;
          results.testDocId = docRef.id;
          console.log("Test document written with ID: ", docRef.id);
        } catch (writeError: any) {
          results.canWrite = false;
          results.writeError = writeError.message || 'Unknown error';
          console.error("Error writing test document: ", writeError);
        }
      }
      
      // Test 3: Check if we can read from Firestore (requires auth)
      if (db) {
        try {
          const q = query(collection(db, "contactMessages"), limit(1));
          const querySnapshot = await getDocs(q);
          results.canRead = true;
          results.docCount = querySnapshot.size;
        } catch (readError: any) {
          results.canRead = false;
          results.readError = readError.message || 'Unknown error';
          console.error("Error reading documents: ", readError);
        }
      }
      
      // Test 4: Check auth status
      if (auth) {
        results.authInitialized = true;
        results.currentUser = auth.currentUser ? {
          uid: auth.currentUser.uid,
          email: auth.currentUser.email
        } : null;
      } else {
        results.authInitialized = false;
      }
      
    } catch (error: any) {
      console.error("Test error:", error);
      results.generalError = error.message || 'Unknown error';
    } finally {
      setTestResults(results);
      setLoading(false);
    }
  };

  useEffect(() => {
    runTests();
  }, []);

  return (
    <ClientOnly>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="mr-2" />
              Firebase Configuration Test
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <Button 
                onClick={runTests} 
                disabled={loading}
                className="mx-auto"
              >
                {loading ? 'Running Tests...' : 'Run Tests'}
              </Button>
            </div>
            
            {Object.keys(testResults).length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Test Results</h3>
                
                {/* Firebase Initialization */}
                <div className="p-3 rounded-md border">
                  <div className="flex items-center">
                    {testResults.firebaseInitialized ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                    )}
                    <span className="font-medium">Firebase Initialization</span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-7">
                    {testResults.firebaseInitialized 
                      ? 'Firebase services are properly initialized' 
                      : 'Firebase services are not initialized. Check your configuration.'}
                  </p>
                </div>
                
                {/* Write Test */}
                <div className="p-3 rounded-md border">
                  <div className="flex items-center">
                    {testResults.canWrite ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                    )}
                    <span className="font-medium">Write Access Test</span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-7">
                    {testResults.canWrite 
                      ? 'Successfully wrote test document to Firestore' 
                      : `Failed to write to Firestore: ${testResults.writeError}`}
                  </p>
                  {testResults.testDocId && (
                    <p className="text-xs text-muted-foreground ml-7 mt-1">
                      Test document ID: {testResults.testDocId}
                    </p>
                  )}
                </div>
                
                {/* Read Test */}
                <div className="p-3 rounded-md border">
                  <div className="flex items-center">
                    {testResults.canRead ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                    )}
                    <span className="font-medium">Read Access Test</span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-7">
                    {testResults.canRead 
                      ? `Successfully read from Firestore (${testResults.docCount} documents found)`
                      : `Read access restricted: ${testResults.readError}`}
                  </p>
                  {!testResults.canRead && (
                    <p className="text-xs text-yellow-600 ml-7 mt-1">
                      Note: Read access is restricted to authenticated users only. This is expected behavior.
                    </p>
                  )}
                </div>
                
                {/* Auth Status */}
                <div className="p-3 rounded-md border">
                  <div className="flex items-center">
                    {testResults.authInitialized ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                    )}
                    <span className="font-medium">Authentication Status</span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-7">
                    {testResults.authInitialized 
                      ? 'Firebase Authentication is properly initialized' 
                      : 'Firebase Authentication is not initialized'}
                  </p>
                  {testResults.currentUser ? (
                    <div className="ml-7 mt-1">
                      <p className="text-sm">Logged in as: {testResults.currentUser.email}</p>
                      <p className="text-xs text-muted-foreground">UID: {testResults.currentUser.uid}</p>
                    </div>
                  ) : (
                    <p className="text-sm text-yellow-600 ml-7 mt-1">
                      Not logged in. To read messages, you need to log in to the admin panel.
                    </p>
                  )}
                </div>
                
                {/* Summary */}
                <div className="p-4 bg-blue-50 rounded-md border border-blue-200">
                  <div className="flex items-center mb-2">
                    <Shield className="h-5 w-5 text-blue-500 mr-2" />
                    <h4 className="font-medium text-blue-800">Configuration Summary</h4>
                  </div>
                  
                  {testResults.canWrite && !testResults.canRead && !testResults.currentUser && (
                    <div className="space-y-2">
                      <p className="text-blue-700 text-sm">
                        Your Firebase configuration is working correctly:
                      </p>
                      <ul className="list-disc pl-5 text-blue-700 text-sm space-y-1">
                        <li>Firebase services are properly initialized</li>
                        <li>Public write access is working (contact form submissions will work)</li>
                        <li>Read access is properly restricted to authenticated users</li>
                      </ul>
                      <p className="text-blue-700 text-sm mt-2">
                        To view messages in the admin panel:
                      </p>
                      <ol className="list-decimal pl-5 text-blue-700 text-sm space-y-1">
                        <li>Create an admin account in Firebase Authentication</li>
                        <li>Log in to the admin panel at <a href="/admin" className="underline">/admin</a></li>
                        <li>Messages will appear automatically</li>
                      </ol>
                    </div>
                  )}
                  
                  {testResults.canWrite && testResults.canRead && testResults.currentUser && (
                    <p className="text-blue-700 text-sm">
                      Your Firebase configuration is fully working. Both public submissions and admin access are functional.
                    </p>
                  )}
                  
                  {!testResults.canWrite && (
                    <p className="text-blue-700 text-sm">
                      There's an issue with your Firebase configuration. Check your environment variables and security rules.
                    </p>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </ClientOnly>
  );
}