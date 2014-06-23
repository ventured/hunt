define [
    'firebase-lib'
    'backfire'
], (FireB) ->

    FIREBASE_URL = 'https://huntvc.firebaseio.com/'
    return new FireB(FIREBASE_URL)
