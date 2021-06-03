const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBt7np1055_xgsC7UdTR1FA6J-1_yqgmoM",
  authDomain: "kiei-451-d42db.firebaseapp.com",
  projectId: "kiei-451-d42db",
  storageBucket: "kiei-451-d42db.appspot.com",
  messagingSenderId: "23523507772",
  appId: "1:23523507772:web:dce6b300d75c5687c70d39"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase