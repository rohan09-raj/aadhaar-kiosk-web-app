// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAZSgFchU_6XA0VOygXjsMjVRltM0F5FBQ',
  authDomain: 'aadhaar-7cd32.firebaseapp.com',
  projectId: 'aadhaar-7cd32',
  storageBucket: 'aadhaar-7cd32.appspot.com',
  messagingSenderId: '240598479891',
  appId: '1:240598479891:web:a756996f40bd605feefbe6',
  measurementId: 'G-F1WLRTW5WH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
