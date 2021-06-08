firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {
      // Signed in
      console.log('signed in');
      console.log(firebase.auth());
        console.log(firebase.auth().currentUser)
  
    // Build the markup for the sign-out button and set the HTML in the header
    document.querySelector(`.sign-in-or-sign-out`).innerHTML = `
    <button class="text-pink-500 underline sign-out">Sign Out</button>
    `;

    // get a reference to the sign out button
    let signOutButton = document.querySelector(`.sign-out`);
  
    // handle the sign out button click
    signOutButton.addEventListener(`click`, function(event) {
        // sign out of firebase authentication
        firebase.auth().signOut();
        // redirect to the home page
        document.location.href = `index.html`;
    })

    var uid = firebase.auth().currentUser.uid;

    // Your web app's Firebase configuration    
    // console.log(firebase.auth().currentUser.uid);
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('restaurants').add({
        name: form.restaurantName.value,
        address: form.address.value,
        url: form.url.value,
        review: form.review.value,
        dishes: form.dishes.value,
        user-email: form.user-email.value
    });

    //set destination
    location.href  = "viewinfo.html";
});

    } else {
      // Signed out
      console.log('signed out');
      location.href = "index.html";
    }
});

const db = firebase.firestore();
const form = document.querySelector('#add-restaurant-info');

var restaurantsColl = db.collection("restaurants");

console.log(firebase.auth());
console.log(firebase.auth().currentUser)


// Your web app's Firebase configuration    
// console.log(firebase.auth().currentUser.uid);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('restaurants').add({
        name: form.restaurantName.value,
        address: form.address.value,
        url: form.url.value,
        review: form.review.value,
        dishes: form.dishes.value,

    });

    //set destination
    location.href  = "viewinfo.html";
});


// // boilerplate testing code for initializing the collection
// db.collection("restaurants").add({
//     name: "test",
//     address: "test"
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });

// // pull out arguments from input fields
// var formValues = {};
// var inputs = document.forms[0].getElementsByTagName('input');

// for ( var i = 0; i < inputs.length; i++) {
//     formValues[inputs[i].name] = "";
//     inputs[i].addEventListener('keyup', function() {
//         formValues[this.name] = this.value;
//     }, false);
// }

// var restaurantName = formValues['restaurantName'];
// var dishes = formValues['favoriteDishes'];
// var address = formValues['address'];
// var review = formValues['review'];
// var url = formValues['url'];

// // save to DB
// var restaurantsColl = db.collection("restaurants");

// // prime the button
// function buttonPress() {
//     restaurantsColl = restaurantsColl.doc(restaurantName).set({
//         name: restaurantName,
//         dishes: dishes,
//         address: address,
//         review: review,
//         url: url
//     })
//     .then(() => {
//             console.log("Document added")
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//     });

//     location.href = "index.html";

// }