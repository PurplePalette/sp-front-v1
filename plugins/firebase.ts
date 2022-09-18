import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import type { Auth, User } from 'firebase/auth'

// SDKを使用するためのConfig情報
const firebaseConfig = {
  apiKey: 'AIzaSyBDQgPbsQDxKK2NNs0DU2MIUFsj4HTdijo',
  authDomain: 'sonolus-uploader.firebaseapp.com',
  projectId: 'sonolus-uploader',
  storageBucket: 'sonolus-uploader.appspot.com',
  messagingSenderId: '492081702898',
  appId: '1:492081702898:web:7c8200d69a8e019280ad6b',
  measurementId: 'G-95NZR8K3P8'
}

// Appの初期化
const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)

/*
if (process.env.NODE_ENV !== 'production') {
  auth.useEmulator('http://localhost:9099/')
}
*/

export { auth }
export const google = new GoogleAuthProvider()
export type FirebaseAuth = Auth
export type FirebaseUser = User
