const auth = require("firebase/auth'");

function loginWithgoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    const user = result.user;
  }).catch(function (error) {
    console.log(error);
  });
}

/*
 * SETUP Auth RULES
 * { "rules":
 *   { ".read": true,
 *     ".write": "auth != null"
 *   }
 * }
 */


