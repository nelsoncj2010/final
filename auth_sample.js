firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {
        // logged in
        console.log(user)

        document.querySelector(`.sign-in-or-sign-out`).innerHTML = `
            <button class="text-pink-500 underline sign-out"> Sign Out </button>
        `

    } else {
        //not logged in
        let ui = new firebaseai.auth.AuthUI(firebase.auth())

        // firebaseUI config
        let authUIConfig = {
            signInOptions: [
                firebase.auth.EmailProvider.PROVIDER_ID
            ],
            signInSuccessUrl: `index.html`
        }

        let xyz = 5

        ui.start(`.sign-in-or-sign-out`, authUIConfig)
    }
})