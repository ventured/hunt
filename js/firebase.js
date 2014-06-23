(function() {
  define(['firebase-lib', 'backfire'], function(FireB) {
    var FIREBASE_URL;
    FIREBASE_URL = 'https://huntvc.firebaseio.com/';
    return new FireB(FIREBASE_URL);
  });

}).call(this);
