import firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyC08QhR3Y3hfv3PG8P_jfR4-yjzs77b0Oo",
    authDomain: "violette-8b112.firebaseapp.com",
    databaseURL: "https://violette-8b112.firebaseio.com",
    projectId: "violette-8b112",
    storageBucket: "violette-8b112.appspot.com",
    messagingSenderId: "649191539042",
    appId: "1:649191539042:web:0ce1aa85bf53768ef2ac3b",
    measurementId: "G-LHCE89KCQQ"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


