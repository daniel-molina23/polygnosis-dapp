const firebase = require('firebase');
require('firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyD-djuI1nWvmw3ZL7LXzC5Se7lXQUbg0dk",
    authDomain: "fir-crud-dapp.firebaseapp.com",
    projectId: "fir-crud-dapp",
    storageBucket: "fir-crud-dapp.appspot.com",
    messagingSenderId: "220919629314",
    appId: "1:220919629314:web:bc5c1eb5e1599ccc59491b",
    measurementId: "G-64BZ747NS7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const db = firebase.firestore();

function populateCollection (collectionName, items){
    return Promise.all(items.map((item) => {
        const {id, ...data} = item;
        return db.collection(collectionName)
            .doc(id)
            .set(data);
    }));
}

//runs an asynchronous promise for all of these
Promise.all([
    populateCollection('reservation', reservation),
    populateCollection('reviews', reviews),
    populateCollection('restaurants', restaurants),
])
.then(() => {
    console.log("Done!");
    process.exit(0);
})