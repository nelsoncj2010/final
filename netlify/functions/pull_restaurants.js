// import firebase
let firebase = require(`./firebase`)

exports.handler = async function(e) {
    // set up lambda function
    let returnValue = []
    let db = firebase.firestore()
    let qsParams = e.queryStringParameters

    // query restaurants
    let restaurantsQuery = await db.collection(`restaurants`).where(`user`, `==`, qsParams.user).get()
    let restaurants = restaurantsQuery.docs

    if (restaurants) {

        for (let i = 0; i < restaurants.length; i++) {
            // get restaurant info
            let rId = restaurants[i].id
            let rData = restaurants[i].data()
    
            // define restaurant Json
            let rJson = {
                name : rData.name,
                url : rData.url,
                dishes : [],
                review : rData.review,
                address : rData.address
            }
    
            // query dishes related to this restaurant
            let dishesQuery = await db.collection(`dishes`).where(`user`, `==`, qsParams.user).where(`restaurant`, `==`, rId)
            let dishes = dishesQuery.docs

            // if there are any
            if (dishes) {
                // loop through related dishes
                for (let j = 0; j < dishes.length; j++) {
                    // pull dishes data and insert into dishes array
                    let dId = dishes[j].id
                    let dData = dishes[j].data().dish
        
                    // append dish string to the dishes array in the restaurant JSON
                    rJson.dishes.push(dData)
                }
            }
    }

        returnValue.push(rJson)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(returnValue)
    }
}