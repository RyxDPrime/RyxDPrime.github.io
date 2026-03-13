// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function () {

  // STEP 7: Create an object 'byeSpeaker' to expose to global context
  var byeSpeaker = {};

  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";

  // STEP 8: Rewrite 'speak' attached to byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose 'byeSpeaker' to the global scope
  window.byeSpeaker = byeSpeaker;

})();
