import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export async function GET() {
  try {
    console.log('API: Verifying messages in Firestore');
    
    // Try to fetch messages
    const q = query(collection(db, 'contactMessages'), orderBy('createdAt', 'desc'), limit(5));
    const querySnapshot = await getDocs(q);
    
    const messages: any[] = [];
    querySnapshot.forEach((doc) => {
      messages.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    
    console.log('API: Found messages:', messages.length);
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Successfully connected to Firestore',
        documentCount: querySnapshot.size,
        messages: messages
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error: any) {
    console.error('API: Error verifying messages:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Failed to connect to Firestore',
        error: error.message
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}