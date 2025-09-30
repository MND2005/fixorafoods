import { db } from '@/lib/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export async function GET() {
  if (!db) {
    return new Response(JSON.stringify({ error: 'Firestore not initialized' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const querySnapshot = await getDocs(collection(db, 'contactMessages'));
    const messages = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return new Response(JSON.stringify(messages), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch messages' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request: Request) {
  if (!db) {
    return new Response(JSON.stringify({ error: 'Firestore not initialized' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();
    const docRef = await addDoc(collection(db, 'contactMessages'), {
      ...body,
      createdAt: new Date()
    });

    return new Response(JSON.stringify({ id: docRef.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error adding message:', error);
    return new Response(JSON.stringify({ error: 'Failed to add message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}