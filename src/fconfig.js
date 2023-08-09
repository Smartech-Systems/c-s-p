import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCtgp09mqxPf47yH380OU2ZeVGx1hOEBfs",
    authDomain: "iclass-ff149.firebaseapp.com",
    projectId: "iclass-ff149",
    storageBucket: "iclass-ff149.appspot.com",
    messagingSenderId: "96494696554",
    appId: "1:96494696554:web:536a373e92dc13d1667213",
    measurementId: "G-RKHKJRQ4ZM"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}


export const firestore = firebase.firestore();

export default firebase;