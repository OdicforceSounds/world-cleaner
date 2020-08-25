var firebase = require('firebase');
var firebaseui = require('firebaseui');
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
  signInOptions: [
	    firebase.auth.EmailAuthProvider.PROVIDER_ID
			{
			  provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
				requireDisplayName: false
			}

			],
				  // Other config options...
	});

