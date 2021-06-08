

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBt7np1055_xgsC7UdTR1FA6J-1_yqgmoM",
    authDomain: "kiei-451-d42db.firebaseapp.com",
    projectId: "kiei-451-d42db",
    storageBucket: "kiei-451-d42db.appspot.com",
    messagingSenderId: "23523507772",
    appId: "1:23523507772:web:dce6b300d75c5687c70d39"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var db = firebase.firestore();

// boilerplate testing code for initializing the collection
db.collection("restaurants").add({
    name: "test",
    address: "test"
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

// pull out arguments from input fields
var formValues = {};
var inputs = document.forms[0].getElementsByTagName('input');

for ( var i = 0; i < inputs.length; i++) {
    formValues[inputs[i].name] = "";
    inputs[i].addEventListener('keyup', function() {
        formValues[this.name] = this.value;
    }, false);
}

var restaurantName = formValues['restaurantName'];
var dishes = formValues['favoriteDishes'];
var address = formValues['address'];
var review = formValues['review'];
var url = formValues['url'];

// save to DB
var restaurantsColl = db.collection("restaurants");

// prime the button
function buttonPress() {
    restaurantsColl = restaurantsColl.doc(restaurantName).set({
        name: restaurantName,
        dishes: dishes,
        address: address,
        review: review,
        url: url
    })
    .then(() => {
            console.log("Document added")
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

    location.href = "index.html";

}