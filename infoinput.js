// boilerplate testing code for initializing the collection
db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

// Add a second document with a generated ID.
db.collection("users").add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
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