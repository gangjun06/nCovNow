// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app"

// import "firebase/auth"
import "firebase/firestore"

import firebaseConfig from "../../firebaseConfig"

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

firebase.firestore().collection('info').add()