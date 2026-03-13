// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
(function () {

  // STEP 3: Create an object 'helloSpeaker' to expose to global context
  var helloSpeaker = {};

  // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  var speakWord = "Hello";

  // STEP 4: Rewrite 'speak' attached to helloSpeaker object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose 'helloSpeaker' to the global scope
  window.helloSpeaker = helloSpeaker;

})();
