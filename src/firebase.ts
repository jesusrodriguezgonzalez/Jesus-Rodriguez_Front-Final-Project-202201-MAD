// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-q8i7b_9mGnQ0ktvwvE5MgopIMPYMZwg',
  authDomain: 'ehome-77326.firebaseapp.com',
  projectId: 'ehome-77326',
  storageBucket: 'ehome-77326.appspot.com',
  messagingSenderId: '199954778219',
  appId: '1:199954778219:web:8e395137bbdbd1f623492e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
