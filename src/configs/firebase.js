const firebase = require("firebase")
require("firebase/firestore");

// VUE_APP_API_KEY=AIzaSyAWkcuUyz9AAN-mPcwUK5ypaFd6CwRf93g
// VUE_APP_AUTH_DOMAIN=groupproject-game.firebaseapp.com
// VUE_APP_PROJECT_ID=groupproject-game

firebase.initializeApp({
  apiKey: 'AIzaSyAWkcuUyz9AAN-mPcwUK5ypaFd6CwRf93g',
  authDomain: 'groupproject-game.firebaseapp.com',
  projectId: 'groupproject-game'
});

module.exports = firebase

