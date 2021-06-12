let firebase = require('./firebase')

// /.netlify/functions/add_restaurant
exports.handler = async function(event) {
    let firebase = require(`./firebase`)
    let db = firebase.firestore()
    let qsParams = event.queryStringParameters
    let returnValue = []

    // insert the restaurant to the DB and get a reference back
    let newRestaurant = await db.collection('restaurants').add({ 
      user : qsParams.user,
      name : qsParams.name,
      address : qsParams.address,
      url : qsParams.url,
      review : qsParams.review
    })

    // user restaurant reference to insert dish with a foreign restaurant key
    let newDish = await db.collection(`dishes`).add({
        restaurant : newRestaurant.id,
        dish : qsParams.dishes,
        user: qsParams.user
    })   

    returnValue.push({
        restaurant: newRestaurant,
        dishes : newDish
    })

    return {
        statusCode: 200,
        body: JSON.stringify(returnValue)
    }
}

