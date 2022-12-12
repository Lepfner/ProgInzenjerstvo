const firebase = require("firebase-admin");
const credentials = require("./credentials.json");

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  database: "https://NFTix.firebaseio.com",
});

const auth = firebase.auth();

module.exports = { auth, firebase };
