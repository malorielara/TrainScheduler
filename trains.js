var config = {
    apiKey: "AIzaSyBRBXjIwkFcoLU5dwMliZCr4M5ojAgN3Cg",
    authDomain: "trainscheduler-7f4b4.firebaseapp.com",
    databaseURL: "https://trainscheduler-7f4b4.firebaseio.com",
    projectId: "trainscheduler-7f4b4",
    storageBucket: "",
    messagingSenderId: "763037232069"
};

firebase.initializeApp(config);

var database = firebase.database();

// to add trains
$("#submit").on("click", function (event) {
    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var unoTrainTime = $("#uno-Train").val().trim();
    var frequencyMin = $("#frequency-min").val().trim();

    var newTrain = {
        name: trainName,
        destination = destination,
        unoTrainTime = unoTrainTime,
        frequency = frequencyMin
    };

    // train data to the firebase database
    data.ref().push(newTrain);

    // console.log(newTrain.name);
    // console.log(newTrain, destination);
    // console.log(newTrain,unoTrainTime);
    // console.log(newTrain.frequency);

    alert("Train added!");

    // will clear out textboxes after the user has added a train
    $("#train-name").val("");
    $("#destination").val("");
    $("#uno-Train").val().trim();
    $("#frequency").val().trim();

    // return false;
});

data.ref().on("child", function (child, prevChild) {

    console.log(child.val());

    // storing into variables
    var name1 = child.val().name;
    var destination1 = child.val().destination;
    var frequency1 = child.val().frequency;
    var unoTrain1 = child.val().unoTrainTime;

    // time adds : 
    var times = unoTrain1.split(":");
    var traintimes = moment().hours(times[0]).minutes(times[1]);
    var maxM = moment.max(moment(), traintimes);
    var arrival;

    // set arrival to first train time
    if(maxM == traintimes) {
        arrival = traintimes.format("hh:mm A");
    }

    $("#trainTable > tbody").append("<tr><td>" + name1 + "</td><td>" + destination1
        + "</td><td>" + frequency1 + "</td><td>" + arrival + "</td><td>");
})