// nodejs
var admin = require("firebase-admin");
var serviceAccount = require("path/to/serviceAccountKey.json");
admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://databaseName.firebaseio.com"
});
var db = admin.database();
var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
        console.log(snapshot.val());
});

