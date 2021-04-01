import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCu9Oi40eo9Sq4I2vtDxTffJd99SJeB0tQ",
    authDomain: "aprilfool-ca679.firebaseapp.com",
    projectId: "aprilfool-ca679",
    storageBucket: "aprilfool-ca679.appspot.com",
    messagingSenderId: "1002356996558",
    appId: "1:1002356996558:web:a9e3484f9125c02636139f"
};
// Initialize Firebase
var firebasedata = firebase.initializeApp(firebaseConfig);

export default firebasedata;