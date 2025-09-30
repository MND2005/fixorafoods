'use client';

import { useEffect, useState, useCallback } from 'react';
import { db, auth } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc, getDocs, addDoc, updateDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogIn, LogOut, Mail, Phone, User, Calendar, Trash2, AlertCircle, RefreshCw, Bug, AlertTriangle, ShieldAlert, Plus, Star, Eye } from 'lucide-react';
import { format } from 'date-fns';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ClientOnly } from '@/components/ClientOnly';
import { Checkbox } from '@/components/ui/checkbox';

interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  } | Date;
}

export default function AdminPage() {
  const { toast } = useToast();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [fetchError, setFetchError] = useState('');
  const [initialLoad, setInitialLoad] = useState(true);
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const [firebaseError, setFirebaseError] = useState<string | null>(null);
  
  // State for delete confirmation modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteMessageId, setDeleteMessageId] = useState<string | null>(null);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteLoading, setDeleteLoading] = useState(false);
  
  // State for blog post management
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [newBlogPost, setNewBlogPost] = useState({
    title: '',
    url: '',
    summary: '',
    isFeatured: false
  });
  const [blogLoading, setBlogLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('messages'); // 'messages' or 'blog'

  // Fetch blog posts from Firestore
  const fetchBlogPosts = useCallback(async () => {
    if (!db) {
      setFetchError("Firestore is not properly initialized.");
      return;
    }
    
    if (!user) {
      console.log('No user, skipping blog fetch');
      return;
    }

    console.log('Fetching blog posts for user:', user.uid);
    setBlogLoading(true);

    try {
      const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const postsData: any[] = [];
      querySnapshot.forEach((doc) => {
        postsData.push({
          id: doc.id,
          ...(doc.data() as any),
        });
      });
      
      console.log('Fetched blog posts:', postsData);
      setBlogPosts(postsData);
      setFetchError('');
    } catch (error: any) {
      console.error('Error fetching blog posts:', error);
      let errorMessage = `Failed to load blog posts: ${error.message || 'Unknown error'}`;
      setFetchError(errorMessage);
      
      toast({
        title: "Error",
        description: "Failed to load blog posts. Check console for details.",
        variant: "destructive",
      });
    } finally {
      setBlogLoading(false);
    }
  }, [user, toast]);

  // Add a new blog post
  const addBlogPost = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!db) {
      toast({
        title: "Error",
        description: "Firestore is not properly initialized.",
        variant: "destructive",
      });
      return;
    }
    
    if (!newBlogPost.title || !newBlogPost.url) {
      toast({
        title: "Error",
        description: "Please provide both title and URL for the blog post.",
        variant: "destructive",
      });
      return;
    }
    
    setBlogLoading(true);
    
    try {
      const blogPostData = {
        title: newBlogPost.title,
        url: newBlogPost.url,
        summary: newBlogPost.summary || '',
        isFeatured: newBlogPost.isFeatured || false,
        createdAt: new Date(),
      };
      
      const docRef = await addDoc(collection(db, 'blogPosts'), blogPostData);
      
      toast({
        title: "Success",
        description: "Blog post added successfully.",
      });
      
      // Reset form
      setNewBlogPost({
        title: '',
        url: '',
        summary: '',
        isFeatured: false
      });
      
      // Refresh blog posts
      fetchBlogPosts();
    } catch (error: any) {
      console.error('Error adding blog post:', error);
      toast({
        title: "Error",
        description: `Failed to add blog post: ${error.message || 'Unknown error'}`,
        variant: "destructive",
      });
    } finally {
      setBlogLoading(false);
    }
  };

  // Delete a blog post
  const deleteBlogPost = async (id: string) => {
    if (!db) {
      toast({
        title: "Error",
        description: "Firestore is not properly initialized.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      await deleteDoc(doc(db, 'blogPosts', id));
      
      toast({
        title: "Success",
        description: "Blog post deleted successfully.",
      });
      
      // Refresh blog posts
      fetchBlogPosts();
    } catch (error: any) {
      console.error('Error deleting blog post:', error);
      toast({
        title: "Error",
        description: `Failed to delete blog post: ${error.message || 'Unknown error'}`,
        variant: "destructive",
      });
    }
  };

  // Toggle featured status of a blog post
  const toggleFeatured = async (id: string, currentStatus: boolean) => {
    if (!db) {
      toast({
        title: "Error",
        description: "Firestore is not properly initialized.",
        variant: "destructive",
      });
      return;
    }
    
    setBlogLoading(true);
    
    try {
      await updateDoc(doc(db, 'blogPosts', id), {
        isFeatured: !currentStatus
      });
      
      toast({
        title: "Success",
        description: `Blog post ${!currentStatus ? 'featured' : 'unfeatured'} successfully.`,
      });
      
      // Refresh blog posts
      fetchBlogPosts();
    } catch (error: any) {
      console.error('Error updating blog post:', error);
      toast({
        title: "Error",
        description: `Failed to update blog post: ${error.message || 'Unknown error'}`,
        variant: "destructive",
      });
    } finally {
      setBlogLoading(false);
    }
  };

  // Check if Firebase is properly initialized
  useEffect(() => {
    console.log('Admin page loaded. Checking Firebase initialization...');
    
    if (!auth || !db) {
      const errorMsg = "Firebase is not properly initialized. Please check your configuration.";
      console.error(errorMsg);
      setFirebaseError(errorMsg);
      setLoading(false);
      return;
    }
    
    console.log('Firebase initialized. Setting up auth state listener');
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('Auth state changed. Current user:', currentUser);
      setUser(currentUser);
      setLoading(false);
      setInitialLoad(false); // Make sure this is set to false
    });

    return () => {
      console.log('Cleaning up auth state listener');
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  // Fetch messages from Firestore
  const fetchMessages = useCallback(async () => {
    if (!db) {
      setFetchError("Firestore is not properly initialized.");
      return;
    }
    
    if (!user) {
      console.log('No user, skipping fetch');
      return;
    }

    console.log('Fetching messages for user:', user.uid);
    setLoading(true);
    setFetchError('');

    try {
      // Log the query we're about to execute
      console.log('Executing Firestore query for contactMessages');
      
      // Try with getDocs first for debugging
      const q = query(collection(db, 'contactMessages'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      console.log('Query snapshot size:', querySnapshot.size);
      
      const messagesData: ContactMessage[] = [];
      querySnapshot.forEach((doc) => {
        console.log('Document ID:', doc.id);
        console.log('Document data:', doc.data());
        messagesData.push({
          id: doc.id,
          ...(doc.data() as Omit<ContactMessage, 'id'>),
        });
      });
      
      console.log('Processed messages:', messagesData);
      setMessages(messagesData);
      setFetchError('');
      
      // Set debug info
      setDebugInfo({
        messageCount: messagesData.length,
        userId: user.uid,
        userEmail: user.email,
        timestamp: new Date().toISOString()
      });
    } catch (error: any) {
      console.error('Error fetching messages:', error);
      let errorMessage = `Failed to load messages: ${error.message || 'Unknown error'}`;
      setFetchError(errorMessage);
      
      // Provide more specific guidance for permission errors
      if (error.message && error.message.includes('permissions')) {
        errorMessage = `Permission Error: ${error.message}. Please check your Firestore security rules.`;
        setFetchError(errorMessage);
      }
      
      toast({
        title: "Error",
        description: "Failed to load messages. Check console for details.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setInitialLoad(false);
    }
  }, [user, toast]);

  // Set up real-time listener
  useEffect(() => {
    if (!db || !auth) {
      setFetchError("Firebase services are not properly initialized.");
      setLoading(false);
      setInitialLoad(false);
      return;
    }
    
    if (!user) return;

    console.log('Setting up real-time listener');
    
    const q = query(collection(db, 'contactMessages'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, 
      (querySnapshot) => {
        console.log('Real-time update received, docs:', querySnapshot.size);
        
        const messagesData: ContactMessage[] = [];
        querySnapshot.forEach((doc) => {
          console.log('RT Document ID:', doc.id);
          console.log('RT Document data:', doc.data());
          messagesData.push({
            id: doc.id,
            ...(doc.data() as Omit<ContactMessage, 'id'>),
          });
        });
        
        console.log('RT Processed messages:', messagesData);
        setMessages(messagesData);
        setFetchError('');
        setLoading(false);
        setInitialLoad(false);
      },
      (error) => {
        console.error('Real-time listener error:', error);
        let errorMessage = `Real-time listener error: ${error.message || 'Unknown error'}`;
        setFetchError(errorMessage);
        
        // Provide more specific guidance for permission errors
        if (error.message && error.message.includes('permissions')) {
          errorMessage = `Permission Error: ${error.message}. Please check your Firestore security rules.`;
          setFetchError(errorMessage);
        }
        
        // Try manual fetch as fallback
        fetchMessages();
      }
    );

    // Fetch blog posts when user is authenticated
    fetchBlogPosts();

    return () => {
      console.log('Cleaning up real-time listener');
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user, fetchMessages, fetchBlogPosts]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!auth) {
      setError("Firebase Authentication is not properly initialized.");
      toast({
        title: "Error",
        description: "Firebase Authentication is not properly initialized.",
        variant: "destructive",
      });
      return;
    }
    
    setError('');
    
    try {
      console.log('Attempting login with:', email);
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Success",
        description: "Logged in successfully.",
      });
    } catch (err: any) {
      console.error('Login error:', err);
      let errorMessage = 'Failed to login. Please check your credentials.';
      
      if (err.code === 'auth/invalid-credential') {
        errorMessage = 'Invalid email or password.';
      } else if (err.code === 'auth/too-many-requests') {
        errorMessage = 'Too many failed attempts. Please try again later.';
      } else if (err.code) {
        errorMessage = `Login error: ${err.code}`;
      }
      
      setError(errorMessage);
      
      toast({
        title: "Login Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    if (!auth) {
      toast({
        title: "Error",
        description: "Firebase Authentication is not properly initialized.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      console.log('Logging out');
      await signOut(auth);
      toast({
        title: "Success",
        description: "Logged out successfully.",
      });
    } catch (err) {
      console.error('Logout error:', err);
      
      toast({
        title: "Error",
        description: "Failed to logout. Please try again.",
        variant: "destructive",
      });
    }
  };

  const deleteMessage = async (id: string) => {
    if (!db) {
      toast({
        title: "Error",
        description: "Firestore is not properly initialized.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      console.log('Deleting message:', id);
      await deleteDoc(doc(db, 'contactMessages', id));
      
      toast({
        title: "Success",
        description: "Message deleted successfully.",
      });
    } catch (err: any) {
      console.error('Error deleting message:', err);
      let errorMessage = 'Failed to delete message.';
      
      if (err.code === 'permission-denied') {
        errorMessage = 'Permission denied. You may not have the required permissions to delete messages.';
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  // New function to handle delete confirmation
  const confirmDeleteMessage = (id: string) => {
    setDeleteMessageId(id);
    setDeletePassword('');
    setShowDeleteModal(true);
  };

  // New function to handle actual deletion after confirmation
  const handleDeleteConfirm = async () => {
    if (!deleteMessageId || !auth || !user?.email) return;
    
    setDeleteLoading(true);
    
    try {
      // Re-authenticate user with password before deletion
      await signInWithEmailAndPassword(auth, user.email, deletePassword);
      
      // If authentication succeeds, proceed with deletion
      await deleteMessage(deleteMessageId);
      
      // Close modal and reset state
      setShowDeleteModal(false);
      setDeleteMessageId(null);
      setDeletePassword('');
    } catch (err: any) {
      console.error('Error during deletion:', err);
      let errorMessage = 'Failed to authenticate. Please check your password.';
      
      if (err.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password. Please try again.';
      } else if (err.code === 'auth/too-many-requests') {
        errorMessage = 'Too many failed attempts. Please try again later.';
      }
      
      toast({
        title: "Authentication Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setDeleteLoading(false);
    }
  };

  const refreshMessages = () => {
    console.log('Refreshing messages');
    fetchMessages();
  };

  if (firebaseError) {
    return (
      <ClientOnly>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 p-4">
          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-center">
                <div className="flex justify-center">
                  <AlertTriangle className="h-12 w-12 text-white" />
                </div>
                <h1 className="mt-2 text-2xl font-bold text-white">Firebase Configuration Error</h1>
                <p className="text-red-100 mt-1">There's an issue with your Firebase configuration</p>
              </div>
              
              <div className="p-6">
                <div className="rounded-lg bg-red-50 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-red-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">Error Details</h3>
                      <div className="mt-1 text-sm text-red-700">
                        <p>{firebaseError}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-2">Possible Causes</h3>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Invalid API key in environment variables</li>
                      <li>• Incorrect Firebase project configuration</li>
                      <li>• Project not properly set up in Firebase Console</li>
                      <li>• Network connectivity issues</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">How to Fix</h3>
                    <ol className="space-y-1 text-green-700 text-sm list-decimal pl-5">
                      <li>Verify Firebase project settings</li>
                      <li>Check environment variables in .env.local</li>
                      <li>Ensure correct API key configuration</li>
                      <li>Restart development server</li>
                    </ol>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    onClick={() => window.location.reload()}
                    className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium py-2 px-6 rounded-lg"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Reload Page
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClientOnly>
    );
  }

  // Show loading spinner only during initial load
  if (loading && initialLoad) {
    return (
      <ClientOnly>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Loading Admin Dashboard</h3>
            <p className="mt-2 text-gray-500">Please wait while we fetch your data...</p>
          </div>
        </div>
      </ClientOnly>
    );
  }

  // Show login form when there's no user
  // Added debug logging to see why this might not be showing
  console.log('Rendering decision point - user:', user, 'loading:', loading, 'initialLoad:', initialLoad);
  
  if (!user) {
    console.log('Displaying login form');
    return (
      <ClientOnly>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-center">
                <h1 className="text-2xl font-bold text-white">Admin Portal</h1>
                <p className="text-blue-100 mt-1">Sign in to access dashboard</p>
              </div>
              
              <div className="p-6">
                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10 py-3"
                        placeholder="admin@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pl-10 py-3"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  
                  {error && (
                    <div className="rounded-md bg-red-50 p-3">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <AlertTriangle className="h-5 w-5 text-red-400" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-red-800">Login Error</h3>
                          <div className="mt-1 text-sm text-red-700">
                            <p>{error}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                        Signing in...
                      </>
                    ) : (
                      <>
                        <LogIn className="mr-2 h-4 w-4" />
                        Sign In
                      </>
                    )}
                  </Button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Forgot your password? Contact your system administrator.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 px-6 py-4">
                <div className="flex items-center justify-center">
                  <ShieldAlert className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-xs text-gray-500">
                    Secure Admin Portal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 w-10 h-10 rounded-lg flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <h1 className="ml-3 text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button 
                  onClick={() => window.open('/debug-firebase', '_blank')} 
                  variant="outline" 
                  size="sm"
                  className="flex items-center"
                >
                  <Bug className="mr-2 h-4 w-4" />
                  Debug
                </Button>
                <Button 
                  onClick={refreshMessages} 
                  variant="outline" 
                  size="sm"
                  className="flex items-center"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh
                </Button>
                <Button 
                  onClick={handleLogout} 
                  variant="outline"
                  className="flex items-center bg-red-50 hover:bg-red-100 text-red-700 border-red-200 hover:border-red-300"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg p-6 mb-8 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Welcome back, Admin!</h2>
                <p className="mt-1 opacity-90">Manage your contact messages and blog posts</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-full p-3">
                <User className="h-8 w-8" />
              </div>
            </div>
          </div>

          {/* Tabs for Messages and Blog Posts */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('messages')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'messages'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Contact Messages
                </button>
                <button
                  onClick={() => setActiveTab('blog')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'blog'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  News & Updates
                </button>
              </nav>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 p-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Messages</p>
                  <p className="text-2xl font-bold text-gray-900">{messages.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center">
                <div className="rounded-full bg-green-100 p-3">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Last Updated</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {messages.length > 0 
                      ? format(new Date(messages[0].createdAt instanceof Date 
                          ? messages[0].createdAt 
                          : messages[0].createdAt?.seconds 
                          ? new Date(messages[0].createdAt.seconds * 1000)
                          : new Date()), 'MMM d')
                      : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center">
                <div className="rounded-full bg-purple-100 p-3">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Blog Posts</p>
                  <p className="text-2xl font-bold text-gray-900">{blogPosts.length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Debug Info */}
          {debugInfo && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Bug className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    Loaded <span className="font-semibold">{debugInfo.messageCount}</span> messages for user <span className="font-semibold">{debugInfo.userEmail}</span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Messages */}
          {fetchError && (
            <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-start">
                {fetchError.includes('permissions') ? (
                  <ShieldAlert className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                )}
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error</h3>
                  <div className="mt-1 text-sm text-red-700">
                    <p>{fetchError}</p>
                  </div>
                  
                  {fetchError.includes('permissions') && (
                    <div className="mt-3 p-3 bg-white rounded-md">
                      <h4 className="font-semibold text-red-800 mb-1">Permission Fix Required:</h4>
                      <p className="text-red-700 text-sm">
                        Your Firestore security rules need to be updated to allow authenticated users to read messages and blog posts.
                      </p>
                      <div className="mt-2 p-2 bg-gray-50 rounded-md">
                        <pre className="text-xs font-mono whitespace-pre-wrap text-gray-700">
{`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to create contact messages
    match /contactMessages/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    // Allow anyone to read blog posts, but only authenticated users to write
    match /blogPosts/{document} {
      allow read: if true;
      allow create, update, delete: if request.auth != null;
    }
  }
}`}
                        </pre>
                      </div>
                      <p className="text-red-700 text-sm mt-2">
                        To fix this:
                        <br />
                        1. Save these rules to your firestore.rules file
                        <br />
                        2. Deploy with: firebase deploy --only firestore:rules
                      </p>
                    </div>
                  )}
                  
                  {!fetchError.includes('permissions') && (
                    <p className="text-red-600 text-sm mt-2">
                      Please check that you have the correct Firestore security rules configured.
                    </p>
                  )}
                  
                  <Button 
                    onClick={refreshMessages} 
                    variant="outline" 
                    size="sm" 
                    className="mt-3 bg-white border-red-300 text-red-700 hover:bg-red-50"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                        Retrying...
                      </>
                    ) : (
                      'Try Again'
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Contact Messages Section */}
          {activeTab === 'messages' && (
            <div className="bg-white rounded-xl shadow">
              <div className="px-6 py-5 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Contact Form Submissions</h2>
                  <Button 
                    onClick={refreshMessages} 
                    variant="outline" 
                    size="sm"
                    disabled={loading}
                    className="flex items-center"
                  >
                    <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                    {loading ? 'Refreshing...' : 'Refresh'}
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                {messages.length === 0 && !fetchError ? (
                  <div className="text-center py-12">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
                      <Mail className="h-6 w-6 text-gray-400" />
                    </div>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No messages</h3>
                    <p className="mt-1 text-sm text-gray-500">Get started by refreshing to check for new submissions.</p>
                    <div className="mt-6">
                      <Button 
                        onClick={refreshMessages} 
                        variant="outline"
                        disabled={loading}
                        className="flex items-center mx-auto"
                      >
                        <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                        {loading ? 'Checking...' : 'Check for Messages'}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-6">
                    {messages.map((message, index) => (
                      <div 
                        key={message.id} 
                        className={`border rounded-lg p-5 transition-all duration-200 hover:shadow-md ${
                          index === 0 ? 'border-blue-200 bg-blue-50' : 'border-gray-200'
                        }`}
                      >
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{message.subject}</h3>
                            <p className="text-sm text-gray-500 mt-1">From {message.fullName}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => confirmDeleteMessage(message.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="flex items-center text-sm">
                            <Mail className="mr-2 h-4 w-4 text-gray-400 flex-shrink-0" />
                            <a href={`mailto:${message.email}`} className="text-blue-600 hover:underline truncate">
                              {message.email}
                            </a>
                          </div>
                          
                          {message.phone && (
                            <div className="flex items-center text-sm">
                              <Phone className="mr-2 h-4 w-4 text-gray-400 flex-shrink-0" />
                              <a href={`tel:${message.phone}`} className="text-blue-600 hover:underline">
                                {message.phone}
                              </a>
                            </div>
                          )}
                          
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 h-4 w-4 text-gray-400 flex-shrink-0" />
                            <span className="text-gray-600">
                              {message.createdAt instanceof Date 
                                ? format(message.createdAt, 'PPP p')
                                : message.createdAt?.seconds 
                                ? format(new Date(message.createdAt.seconds * 1000), 'PPP p')
                                : 'Unknown date'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-gray-700">{message.message}</p>
                        </div>
                        
                        {index === 0 && (
                          <div className="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Latest Message
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Blog Posts Section */}
          {activeTab === 'blog' && (
            <div className="bg-white rounded-xl shadow">
              <div className="px-6 py-5 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">News & Updates Management</h2>
                  <Button 
                    onClick={fetchBlogPosts} 
                    variant="outline" 
                    size="sm"
                    disabled={blogLoading}
                    className="flex items-center"
                  >
                    <RefreshCw className={`mr-2 h-4 w-4 ${blogLoading ? 'animate-spin' : ''}`} />
                    {blogLoading ? 'Refreshing...' : 'Refresh'}
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                {/* Information Panel */}
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-medium text-blue-800 mb-2">How to use News & Updates</h3>
                  <ul className="list-disc pl-5 space-y-1 text-blue-700">
                    <li>Add blog posts with URLs pointing to your articles</li>
                    <li>Feature one post to display its full content on the News page</li>
                    <li>Regular posts will appear as links only</li>
                    <li>Featured posts automatically load their content on the News page</li>
                  </ul>
                </div>
                
                {/* Add New Blog Post Form */}
                <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Blog Post</h3>
                  <form onSubmit={addBlogPost} className="space-y-4">
                    <div>
                      <Label htmlFor="title" className="text-gray-700 font-medium">Title</Label>
                      <Input
                        id="title"
                        value={newBlogPost.title}
                        onChange={(e) => setNewBlogPost({...newBlogPost, title: e.target.value})}
                        placeholder="Enter blog post title"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="url" className="text-gray-700 font-medium">URL</Label>
                      <Input
                        id="url"
                        value={newBlogPost.url}
                        onChange={(e) => setNewBlogPost({...newBlogPost, url: e.target.value})}
                        placeholder="https://example.com/blog-post"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="summary" className="text-gray-700 font-medium">Summary (Optional)</Label>
                      <Input
                        id="summary"
                        value={newBlogPost.summary}
                        onChange={(e) => setNewBlogPost({...newBlogPost, summary: e.target.value})}
                        placeholder="Brief summary of the blog post"
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <Checkbox
                        id="isFeatured"
                        checked={newBlogPost.isFeatured}
                        onCheckedChange={(checked) => setNewBlogPost({...newBlogPost, isFeatured: !!checked})}
                        className="mr-2"
                      />
                      <Label htmlFor="isFeatured" className="text-gray-700">
                        Feature this post (will be shown with full content)
                      </Label>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        type="submit" 
                        disabled={blogLoading || !newBlogPost.title || !newBlogPost.url}
                        className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
                      >
                        {blogLoading ? (
                          <>
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                            Adding...
                          </>
                        ) : (
                          <>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Blog Post
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
                
                {/* Blog Posts List */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Existing Blog Posts</h3>
                  
                  {blogPosts.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
                        <Eye className="h-6 w-6 text-gray-400" />
                      </div>
                      <h3 className="mt-2 text-sm font-medium text-gray-900">No blog posts</h3>
                      <p className="mt-1 text-sm text-gray-500">Get started by adding a new blog post above.</p>
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {blogPosts.map((post) => (
                        <div key={post.id} className="border rounded-lg p-4 flex justify-between items-center">
                          <div>
                            <div className="flex items-center">
                              <h4 className="font-medium text-gray-900">{post.title}</h4>
                              {post.isFeatured && (
                                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                  <Star className="mr-1 h-3 w-3" />
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500 mt-1 truncate max-w-md">{post.url}</p>
                            {post.summary && (
                              <p className="text-sm text-gray-600 mt-1">{post.summary}</p>
                            )}
                            <p className="text-xs text-gray-400 mt-1">
                              Added on {format(new Date(post.createdAt?.seconds ? post.createdAt.seconds * 1000 : post.createdAt), 'PPP')}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => toggleFeatured(post.id, post.isFeatured)}
                              className="flex items-center"
                            >
                              <Star className={`mr-1 h-4 w-4 ${post.isFeatured ? 'text-yellow-500 fill-current' : ''}`} />
                              {post.isFeatured ? 'Unfeature' : 'Feature'}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(post.url, '_blank')}
                              className="flex items-center"
                            >
                              <Eye className="mr-1 h-4 w-4" />
                              View
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => deleteBlogPost(post.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Confirm Deletion</h3>
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setDeleteMessageId(null);
                    setDeletePassword('');
                  }}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-4">
                <p className="text-gray-600">
                  Are you sure you want to delete this message? This action cannot be undone.
                </p>
                <p className="text-gray-600 mt-2">
                  Please enter your password to confirm:
                </p>
                
                <div className="mt-4">
                  <Label htmlFor="delete-password" className="text-gray-700 font-medium">Password</Label>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <Input
                      id="delete-password"
                      type="password"
                      value={deletePassword}
                      onChange={(e) => setDeletePassword(e.target.value)}
                      className="pl-10 py-3"
                      placeholder="Enter your password"
                      autoFocus
                    />
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowDeleteModal(false);
                      setDeleteMessageId(null);
                      setDeletePassword('');
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleDeleteConfirm}
                    className="bg-red-600 hover:bg-red-700 text-white"
                    disabled={deleteLoading || !deletePassword}
                  >
                    {deleteLoading ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                        Deleting...
                      </>
                    ) : (
                      'Delete Message'
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ClientOnly>
  );
}
