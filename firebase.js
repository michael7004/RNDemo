import { initializeApp, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAHvVGTMnYYAO2zzTf7RATf5ZEZIGLEmMw',
  authDomain: 'fir-auth-76668.firebaseapp.com',
  projectId: 'fir-auth-76668',
  storageBucket: 'fir-auth-76668.appspot.com',
  messagingSenderId: '810381484767',
  appId: '1:810381484767:web:1caa0677871d8bad8a7f6a',
  measurementId: 'G-W9N5W5BS49'
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export { db, auth };