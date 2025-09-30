'use server';

import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export async function testMessages() {
  try {
    const q = query(collection(db, 'contactMessages'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    console.log(`Found ${querySnapshot.size} messages`);
    
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
    
    return {
      success: true,
      count: querySnapshot.size,
      messages: querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    };
  } catch (error) {
    console.error('Error fetching messages:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}