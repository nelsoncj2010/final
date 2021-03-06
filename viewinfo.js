
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
        console.log(displayDiv)
        console.log(restaurants[0].name)

        // let displayDiv = document.querySelectorAll(`div`)[2]
        // console.log(allDivs)

        restaurants.forEach(function(restaurantJson) {
            console.log("THIS HAPPENED")

            console.log(restaurantJson.url)
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
})
