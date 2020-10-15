import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDatZI09CKh-1uOr0xT229LmxH8e5cwN0",
  authDomain: "discord-clone-c9ab4.firebaseapp.com",
  databaseURL: "https://discord-clone-c9ab4.firebaseio.com",
  projectId: "discord-clone-c9ab4",
  storageBucket: "discord-clone-c9ab4.appspot.com",
  messagingSenderId: "899099338990",
  appId: "1:899099338990:web:6b92d31740f6fcbe47ebff",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
