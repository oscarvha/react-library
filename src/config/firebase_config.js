import * as firebase from 'firebase'
import {
  FIREBASE_API,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL, FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET
} from "../constants/variables";

const firebaseConfig = {
  apiKey: FIREBASE_API,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
};

export const inicializeFireStore = () => {
  const database = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig).firestore()
    : firebase.app().firestore();

  database.settings({
    timestampsInSnapshots: true
  });

  return database;
}