'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Newspaper, ExternalLink, Eye } from 'lucide-react';

export default function NewsPage() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        if (!db) {
          console.error('Firestore not initialized');
          setError('Failed to connect to database');
          setLoading(false);
          return;
        }

        const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const postsData: any[] = [];
        querySnapshot.forEach((doc) => {
          postsData.push({
            id: doc.id,
            ...(doc.data() as any),
          });
        });
        
        setBlogPosts(postsData);
      } catch (error: any) {
        console.error('Error fetching blog posts:', error);
        setError(`Failed to load news: ${error.message || 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-headline font-bold text-center mb-10">News & Updates</h1>
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading news articles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-headline font-bold text-center mb-10">News & Updates</h1>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <Newspaper className="mx-auto h-12 w-12 text-red-500 mb-4" />
            <h2 className="text-2xl font-semibold text-red-800 mb-2">Error Loading News</h2>
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Find the featured post (if any)
  const featuredPost = blogPosts.find(post => post.isFeatured) || (blogPosts.length > 0 ? blogPosts[0] : null);
  const otherPosts = blogPosts.filter(post => post.id !== featuredPost?.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold text-center mb-10">News & Updates</h1>
      <div className="max-w-4xl mx-auto">
        {blogPosts.length > 0 ? (
          <div className="grid gap-8">
            {/* Featured Post - Full View with Embedded Preview */}
            {featuredPost && (
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-blue-200">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="w-fit mb-2 bg-white">
                      {featuredPost.createdAt 
                        ? new Date(featuredPost.createdAt?.seconds ? featuredPost.createdAt.seconds * 1000 : featuredPost.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) 
                        : 'Unknown date'}
                    </Badge>
                    <Badge variant="default" className="bg-yellow-500">
                      Featured
                    </Badge>
                  </div>
                  <CardHeader className="p-0 pt-2">
                    <CardTitle className="text-3xl font-headline">{featuredPost.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    {featuredPost.summary && (
                      <p className="text-muted-foreground text-lg mb-6">{featuredPost.summary}</p>
                    )}
                    
                    {/* Embedded Preview Section */}
                    <div className="mt-6">
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-2 text-gray-600" />
                            <span className="text-sm font-medium text-gray-700">Preview</span>
                          </div>
                          <a 
                            href={featuredPost.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline flex items-center"
                          >
                            View Original
                            <ExternalLink className="ml-1 h-4 w-4" />
                          </a>
                        </div>
                        <div className="relative h-96 w-full overflow-hidden">
                          <iframe
                            src={featuredPost.url}
                            className="w-[150%] h-[150%] border-0 scale-75 origin-top-left"
                            title={`Preview of ${featuredPost.title}`}
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )}

            {/* Other Posts - Titles Only */}
            {otherPosts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-headline font-bold mb-6 text-gray-800">More Updates</h2>
                <div className="space-y-4">
                  {otherPosts.map((post) => (
                    <Card key={post.id} className="transition-all duration-300 hover:shadow-md">
                      <CardHeader className="p-4">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg font-headline">
                            <a 
                              href={post.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              {post.title}
                            </a>
                          </CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {post.createdAt 
                              ? new Date(post.createdAt?.seconds ? post.createdAt.seconds * 1000 : post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) 
                              : 'Unknown date'}
                          </Badge>
                        </div>
                        {post.summary && (
                          <p className="text-muted-foreground text-sm mt-2">{post.summary}</p>
                        )}
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <Newspaper className="mx-auto h-16 w-16 mb-4 text-accent" />
            <h2 className="text-2xl font-semibold mb-2">No News Yet</h2>
            <p>Check back soon for the latest updates and announcements.</p>
          </div>
        )}
      </div>
    </div>
  );
}