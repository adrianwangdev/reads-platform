import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAQGkNQID9QGXpfT_qGCQw3RssWFTjFpts",
  authDomain: "reads-platform-e3ef8.firebaseapp.com",
  projectId: "reads-platform-e3ef8",
  storageBucket: "reads-platform-e3ef8.appspot.com",
  messagingSenderId: "886400438930",
  appId: "1:886400438930:web:0899f990ea0dd44c384c4b"
}

const fire = firebase.initializeApp(firebaseConfig)

export default fire
