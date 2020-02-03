import * as firebase from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'
import 'firebase/firestore'

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()