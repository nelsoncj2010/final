// // import firebase
// let firebase = require(`./firebase`)

// exports.handler = async function(e) {

//     let returnValue = []

//     let db = firebase.firestore()

//     let postsQuery = await db.collection(`posts`).get()
//     let posts = postQuery.docs()

//     console.log(posts)

//     for (let i=0; i < posts.length; i++) {
//         let postId = posts[i].id
//         console.log(postId)

//         let postData = posts.id.data()

//         let postObject = {
//             id: postId,
//             imageURL: postData.imageUrl,
//             numberOfLikes: postData.numberOfLikes
//             comments: []
//         }

//         let commentsQuery = await db.collection(`comments`).where(`postId`, `==`, postId).get()
//         let comments = commentsQuery.docs()

//         for (let j = 0;  < comments.length; j++) {
//             let commentId = comments[j].id 
//             let commentData = comments[j].data()

//             let commentJson = {
//                 id: commentId,
//                 body: commentData.body
//             }

//             postObject.comments.push(commentJson)
//         }

//         returnValue.push(postObject)

//     }

//     return {
//         statusCode: 200,
//         body: JSON.stringify(returnValue)
//     }
// }