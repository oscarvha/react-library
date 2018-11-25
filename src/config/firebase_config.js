import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "<>",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
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