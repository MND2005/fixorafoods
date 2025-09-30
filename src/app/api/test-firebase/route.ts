import { db } from '@/lib/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export async function GET() {
  try {
    // Test reading from Firestore
    const querySnapshot = await getDocs(collection(db, 'contactMessages'));
    const count = querySnapshot.size;
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Firebase connection successful',
        documentCount: count
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Firebase connection failed',
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

export async function POST() {
  try {
    // Test writing to Firestore
    const docRef = await addDoc(collection(db, 'contactMessages'), {
      fullName: 'API Test User',
      email: 'api-test@example.com',
      subject: 'API Test Message',
      message: 'This is a test message from the API route.',
      createdAt: new Date(),
    });
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Test message saved successfully',
        documentId: docRef.id
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Failed to save test message',
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