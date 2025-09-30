'use client';

import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { format } from 'date-fns';

export interface TestMessage {
  id: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  createdAt: {
    seconds: number;
  } | Date;
}

export async function fetchTestMessages(): Promise<TestMessage[]> {
  if (!db) {
    console.error('Firestore is not initialized');
    return [];
  }

  try {
    const q = query(collection(db, 'contactMessages'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        fullName: data.fullName || '',
        email: data.email || '',
        subject: data.subject || '',
        message: data.message || '',
        createdAt: data.createdAt || new Date()
      } as TestMessage;
    });
  } catch (error) {
    console.error('Error fetching test messages:', error);
    return [];
  }
}