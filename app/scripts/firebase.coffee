define [
    'firebase-lib'
], (FireB) ->

    FIREBASE_URL = 'https://huntvc.firebaseio.com/'
    return {
        FIREBASE_URL,
        firebase: new FireB(FIREBASE_URL)
    }
