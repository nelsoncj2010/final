
firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {

      // Signed in
      console.log('signed in')
    
        // Build the markup for the sign-out button and set the HTML in the header
        document.querySelector(`.sign-in-or-sign-out`).innerHTML = `
        <button class="text-pink-500 underline sign-out">Sign Out</button>
        `
  
        // get a reference to the sign out button
        let signOutButton = document.querySelector(`.sign-out`)
    
        // handle the sign out button click
        signOutButton.addEventListener(`click`, function(event) {
            // sign out of firebase authentication
            firebase.auth().signOut()
        
            // redirect to the home page
            document.location.href = `index.html`
        })

        // populate restaurant entries
        let requestURL = "/.netlify/functions/pull_restaurants?user=" + user.uid
        let resp = await fetch(requestURL)
        let restaurants = await resp.json()
        console.log(restaurants)

        // display div
        let displayDiv = document.querySelector(`.restaurant-info`)

        restaurants.forEach(function(retaurantJson) {

            displayDiv.insertAdjacentHTML(`beforeend`, `
                <div class="text-center">Restaurant: ${restaurantJson.name}</div>
                <div class="text-center">URL: ${restaurantJson.url}</div>
                <div class="text-center">Review: ${restaurantJson.review}</div>
                <div class="text-center">Address: ${restaurantJson.address}</div>
            `)

            restaurants.body.dishes.forEach(function(dishJson) {
                displayDiv.insertAdjacentHTML(`beforeend`, `
                    <div class="text-center">Dish: ${dishJson.dish}</div>
                `)
            })
        })

    } else {
        // Signed out
        console.log('signed out')

        location.href = "index.html"
    }   
});


// //boilerplate from class

// // event listener for the click me button
// clickMeButton.addEventListener(`click`, async function(evet) {
//     let pageTitleElement = document.querySelector(`.page-title`)

//     //modify the contents
//     pageTitleElement.innerHTML = `Movies to Watch`
// })

// let addMovieLink = document.querySelector(`.add-movie`)

// // event listener for the 'add movie' link
// addMovieLink.addEventListener(`click`, async function(event) {
//     event.preventDefault()
//     //get a reference to the bulleted list of movies
//     //let movieList = document.querySelector(`.movies-to-watch`)

//     //add a new list item to the bulleted list of movies
//     // moviList.insertAdjacentHTML(`beforeend`, `
//         // <li>Spaceballs</li>
//     // `)

// })

// //get ref to button
// let zoomImageButton = document.querySelector(`.zoom-image`)

// // event listener
// zoomImageButton.addEventListener(`click`, function(event) {
//     //get a reference to the image
//     let image = document.querySelector(`img`)

//     //add the border-pink-500 class
//     image.classList.add(`border-pink-500`)
//     image.classList.remove(`w-96`)
//     image.classList.add(`w-full`)

// })


        // console.log(firebase.auth().currentUser); 

        // const db = firebase.firestore();
        // const form = document.querySelector('#add-restaurant-info');
        // var restaurantsColl = db.collection("restaurants");
    
        //   restaurantsColl.where("user", "==", firebase.auth().currentUser.uid)
        //   .get()
        //   .then((querySnapshot) => {
        //       console.log(querySnapshot);
        //       querySnapshot.forEach((doc) => {
        //         // var restaurantC = row.insertCell(0);
        //         // var dishesC = row.insertCell(1);
        //         // var reviewC = row.insertCell(2);
        //         // var urlC = row.insertCell(3);
        //         // var addressC = row.insertCell(4);

        //         // restaurantC.innerHTML = doc.data()  

        //         // cell1.innerHTML = 

        //           console.log(doc.id, " => ", doc.data());
        //       });
        //   })
        //   .catch((error) => {
        //       console.log("Error getting documents: ", error);
        //   });    


// //week 8

// document.addEventListener(`DOMContentLoaded`, async function(e) {
//     let url = `/.netlify/functions/posts` // check firebase_sample

//     let response = await fetch(url)
//     let json = await response.json()

//     console.log(json)

//     let postsDiv = document.querySelector(`.posts`)

//     for (let i = 0; i < json.length; i++) {
//         //store each object in memory
//         let post = json[i]

//         //can build out comments markup by appending to string within loop

//         //create markup using post data
//         postsDiv.insertAdjacentHTML(`beforeend`, `
//         <div class="xyz">
//             <div class="xyz">
//                     <span class="font-bold text-xl"> anon</span>
//             </div>
//             <div class="my-8">
//                 <img src="${post.url}" class="w-full">
//             </div>
//         </div>`)

//     }

// })