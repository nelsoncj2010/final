//define lambda functio
exports.handler = async function(event) {
        let todos = JSON.stringify(['fuck ally', 'get laid', 'have her blow me'])
        let number = event.queryStringParameters.bedroom


    return {
        STATUS CODE
        body
    }
}


// to call it

let url = "./netlify/functions/test"
let resp = await fetch(url)
let resp = await resp.json()
let body = resp.body