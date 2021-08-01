var firebaseConfig = {
    apiKey: "AIzaSyBX6YmNxQAeummx2ElMp3v3wUzDzcGtTkA",
    authDomain: "test-7861b.firebaseapp.com",
    projectId: "test-7861b",
    storageBucket: "test-7861b.appspot.com",
    messagingSenderId: "982558408905",
    appId: "1:982558408905:web:faa5660fa1ca4f83190d18",
    measurementId: "G-FNRPS7RGFX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();

