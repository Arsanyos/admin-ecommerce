import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyC-3fc4i3C3qJOiIddkdXHEJFZCzTAxV0A',
  authDomain: 'admin-ecommerce-520e4.firebaseapp.com',
  projectId: 'admin-ecommerce-520e4',
  storageBucket: 'admin-ecommerce-520e4.appspot.com',
  messagingSenderId: '200441090219',
  appId: '1:200441090219:web:b64a9cabb5ab7f3fa767ee',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
