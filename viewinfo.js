
firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {
      // Signed in
      console.log('signed in')
  
    // Build the markup for the sign-out button and set the HTML in the header
    document.querySelector(`.sign-in-or-sign-out`).innerHTML = `
    <button class="text-pink-500 underline sign-out">Sign Out</button>
    `

    // console.log(firebase.auth().currentUser); 

    const db = firebase.firestore();
    const form = document.querySelector('#add-restaurant-info');
    var restaurantsColl = db.collection("restaurants");
  
      restaurantsColl.where("user", "==", firebase.auth().currentUser.uid)
      .get()
      .then((querySnapshot) => {
          console.log(querySnapshot);
          querySnapshot.forEach((doc) => {
            // var restaurantC = row.insertCell(0);
            // var dishesC = row.insertCell(1);
            // var reviewC = row.insertCell(2);
            // var urlC = row.insertCell(3);
            // var addressC = row.insertCell(4);

            // restaurantC.innerHTML = doc.data()  

            // cell1.innerHTML = 

              console.log(doc.id, " => ", doc.data());
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });    


  
    // get a reference to the sign out button
    let signOutButton = document.querySelector(`.sign-out`)
  
    // handle the sign out button click
    signOutButton.addEventListener(`click`, function(event) {
    // sign out of firebase authentication
    firebase.auth().signOut()
  
    // redirect to the home page
    document.location.href = `index.html`
    })
    } else {
      // Signed out
      console.log('signed out')

      location.href = "index.html"
    }   
  });


