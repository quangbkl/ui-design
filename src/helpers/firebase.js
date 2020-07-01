import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDplwLoAJoPEZPIW3FotC4mRn7CZPx-zek",
  authDomain: "ductttest-1564323372832.firebaseapp.com",
  databaseURL: "https://ductttest-1564323372832.firebaseio.com",
  projectId: "ductttest-1564323372832",
  storageBucket: "ductttest-1564323372832.appspot.com",
  messagingSenderId: "335058615265",
  appId: "1:335058615265:web:747917b797bc386e66f0a0",
  measurementId: "G-XLE9H0JESH",
};

const initApp = () => {
  firebase.initializeApp(firebaseConfig);
};

export default {
  initApp,
};
