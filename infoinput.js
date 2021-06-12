firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {
        // Signed in
        console.log('signed in');
  
        // handle sign-out button

        // Build the markup for the sign-out button and set the HTML in the header
        document.querySelector(`.sign-in-or-sign-out`).innerHTML = `
        <button class="text-pink-500 underline sign-out">Sign Out</button>
        `

        // get a reference to the sign out button
        let signOutButton = document.querySelector(`.sign-out`)
    
        // handle the sign out button click
        signOutButton.addEventListener(`click`, function(event) {
            // sign out of firebase authentication
            firebase.auth().signOut();
            // redirect to the home page
            document.location.href = `index.html`
        })

        let form = document.querySelector(`#add-restaurant-info`)
        // set up event listener for the submit button
        form.addEventListener('submit', async function(e) {
            e.preventDefault()

            // create a json object for the restaurant based on user input
            let restaurantInput = {
                name: form.restaurantName.value,
                address: form.address.value,
                url: form.url.value,
                review: form.review.value,
                dishes: form.dishes.value,
                user: user.uid
            }

            //prime the API URL string
            let addRestaurantAPIString = "/.netlify/functions/add_restaurant?"

            // loop over restaurant JSON to build full url
            Object.keys(restaurantInput).forEach(function(key) {
                addRestaurantAPIString = addRestaurantAPIString + key + "=" + restaurantInput[key].value + "&"
            })

            console.log(addRestaurantAPIString)
            let resp = await fetch(addRestaurantAPIString)
            let resp_json = resp.json()

            // add restaurant object to the firestore collection using Netlify API
            // db.collection('restaurants').add({

            // });

            //set destination
            location.href  = "viewinfo.html"
        })

    } else {
      // Signed out
      console.log('signed out')
      location.href = "index.html"
    }
});

// const db = firebase.firestore();
// const form = document.querySelector('#add-restaurant-info');

// var restaurantsColl = db.collection("restaurants");

// console.log(firebase.auth());
// console.log(firebase.auth().currentUser)


// // Your web app's Firebase configuration    
// // console.log(firebase.auth().currentUser.uid);
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     db.collection('restaurants').add({
//         name: form.restaurantName.value,
//         address: form.address.value,
//         url: form.url.value,
//         review: form.review.value,
//         dishes: form.dishes.value,

//     });

//     //set destination
//     location.href  = "viewinfo.html";
// });


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

// let sayHiButton = documen.querySelector(`.say-hi-button`)

// sayHiButton.addEventListener(`click`, async function(event) {
//     let nameInput = document.querySelector(`#first-name`)
//     let firstName = nameInput.value
//     let greetElement = document.querySelector(`.greet`)
//     let greetElement.innerHTML = `Hi ${FIRSTNAME}`


// })


// document.addEventListener('DOMContentLoaded', async function(event) {
//     let submitButton = document.querySelector(`button`)
//     submitButton.addEventListener(`click`, async function(event) {
//         event.preventDefault()
//         let url = `https://api.coindesk.com/v1/bpi/currentprice/USD.json`
//         let response = await fetch(url)

//         let json = response.json()

//         console.log(json)

//         let currentPriceUSD = json.bpi.USD.rate_float

        

//     })
// })