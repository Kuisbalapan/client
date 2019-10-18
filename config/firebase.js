const firebase = require('firebase/app')
require('firebase/firestore')


firebase.initializeApp({
  apiKey: "AIzaSyAWkcuUyz9AAN-mPcwUK5ypaFd6CwRf93g",
  authDomain: "groupproject-game.firebaseapp.com",
  databaseURL: "https://groupproject-game.firebaseio.com",
  projectId: "groupproject-game",
  storageBucket: "groupproject-game.appspot.com",
  messagingSenderId: "266950735287",
  appId: "1:266950735287:web:e0977e4a38660bbccba432"
})


module.exports = firebase