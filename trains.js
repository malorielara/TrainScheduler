<script src="https://www.gstatic.com/firebasejs/5.4.1/firebase.js"></script>

$(document)
var config = {
    apiKey: "AIzaSyBRBXjIwkFcoLU5dwMliZCr4M5ojAgN3Cg",
    authDomain: "trainscheduler-7f4b4.firebaseapp.com",
    databaseURL: "https://trainscheduler-7f4b4.firebaseio.com",
    projectId: "trainscheduler-7f4b4",
    storageBucket: "",
    messagingSenderId: "763037232069"
  };

  firebase.initializeApp(config);

  var database= firebase.database();

  $("#submit").on("click", function(event) {
      var trainName = $("#train-name").val().trim();
      var destination = $("#destination-d").val().trim();
      var unoTrainTime = $("#unoTrain").val().trim();
      var frequencyMin = $("#frequency-min").val().trim();

      var newTrain = {
          name: trainName,
          destination = destination,
          unoTrainTime = unoTrainTime,
          frequency = frequencyMin
      };
  })
