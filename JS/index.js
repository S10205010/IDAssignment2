// API requests
// Formating request
var date = new Date();
var month;
var day;
if (date.getMonth() < 9) {
  month = "0" + (date.getMonth() + 1);
} else {
  month = date.getMonth() + 1;
}
if (date.getDate() < 9) {
  day = "0" + date.getDate();
} else {
  day = date.getDate();
}
var date_time =
  date.getFullYear() +
  "-" +
  month +
  "-" +
  day +
  "T" +
  date.toLocaleTimeString();
var date_d = date.getFullYear() + "-" + month + "-" + day;

//API for PSI
//Plans to get full day readings
//chart as a function
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/psi",
  data: {date: date_d },
  error: function (status, request) {
    console.log(`PSI API ${request} ${status.status}`);
  },
}).done(function (data) {});
//ajaxStop is used so that all ajax is requests is completed before
//execution
$(document).ajaxStop(function () {
  //This portion is to extract API information form session storage.
  var airTempRT = JSON.parse(sessionStorage.getItem("airTemp"));
  var relativeHumidityRT = JSON.parse(
    sessionStorage.getItem("relativeHumidity")
  );
  var windDirectionRT = JSON.parse(sessionStorage.getItem("WindDirection"));
  var windSpeedRT = JSON.parse(sessionStorage.getItem("WindSpeed"));

  var weaFc2Hr = JSON.parse(sessionStorage.getItem("02HourFC"));
  var weaFc24Hr = JSON.parse(sessionStorage.getItem("24HourFC"));
  var weaFc4d = JSON.parse(sessionStorage.getItem("4DayFC"));
  //Variable to be used by main program
  var area = area_JSON.area_metadata;
  //Loading of 24Hour information
  loadCurrentWeather(area);
  load24Hour(weaFc24Hr);
  //Search function
  $("#locationSearch").keyup(function () {
    //Get input from user
    $("#location div").remove();
    let userValue = $("#locationSearch").val().toUpperCase();
    let userLen = userValue.length;
    let indexResult = [];
    //Search index of related areas
    for (i = 0; i < area.length; i++) {
      let areaname = area[i].name.slice(0, userLen).toUpperCase();
      if (userValue == areaname) {
        indexResult.push(i);
      } else {
        continue;
      }
    }
    //From index establish latitude and longitude of each respective location
    for (i = 0; i < indexResult.length; i++) {
      let index = indexResult[i];
      let lat = area[index].label_location.latitude;
      let long = area[index].label_location.longitude;
      //Labeling location
      let name = area[index].name;
      $("#location").append(`<div id = "${"location"+i}"></div>`);
      currentWeather(name,i);
    }
  });
});

function loadCurrentWeather(area){
  //just need to print once
    let lat = area[0].label_location.latitude;
    let long = area[0].label_location.longitude;
    //Labeling location
    let name = area[0].name;
    $("#location").append(`<div id = "${"location"+0}"></div>`);
    currentWeather(name,0);
}
function load24Hour(weaFc24Hr) {
  let general = weaFc24Hr.items[0].general
  //Weather(Air Temp)
  $("#t24High").text(general.temperature.high +" °C")
  $("#t24Low").text(general.temperature.low+" °C")
  // Weather (Relative Humidity)
  $("#rh24High").text(general.relative_humidity.low+" %")
  $("#rh24Low").text(general.relative_humidity.low+" %")
  //Weather (Wind Speed)
  $("#ws24High").text(general.wind.speed.low+" knots")
  $("#ws24Low").text(general.wind.speed.low+" knots")
  // Weather(Sky)
  let firstPeriodRegion = weaFc24Hr.items[0].periods[0].regions;
  let secondPeriodRegion = weaFc24Hr.items[0].periods[1].regions;
  let thirdPeriodRegion = weaFc24Hr.items[0].periods[2].regions;

  //First period
  let firstPeriod =
    weaFc24Hr.items[0].periods[0].time.start.slice(11, 19) +
    " - " +
    weaFc24Hr.items[0].periods[0].time.end.slice(11, 19);
  $("#time0").text(firstPeriod);
  // Weather forecast for first period
  $("#north0").text(firstPeriodRegion.north);
  $("#south0").text(firstPeriodRegion.south);
  $("#east0").text(firstPeriodRegion.east);
  $("#west0").text(firstPeriodRegion.west);
  $("#central0").text(firstPeriodRegion.central);

  //Second period
  let secondPeriod =
    weaFc24Hr.items[0].periods[1].time.start.slice(11, 19) +
    " - " +
    weaFc24Hr.items[0].periods[1].time.end.slice(11, 19);
  $("#time1").text(secondPeriod);
  // Weather forecast for second period
  $("#north1").text(secondPeriodRegion.north);
  $("#south1").text(secondPeriodRegion.south);
  $("#east1").text(secondPeriodRegion.east);
  $("#west1").text(secondPeriodRegion.west);
  $("#central1").text(secondPeriodRegion.central);

  //Third Period

  let date_tp =
    date.getFullYear() +
    "-" +
    month +
    "-" +
    ("0" + (parseInt(day) + 1)).slice(-2);
  let thirdPeriod =
    weaFc24Hr.items[0].periods[2].time.start.slice(11, 19) +
    " - " +
    weaFc24Hr.items[0].periods[2].time.end.slice(11, 19);
  $("#time3").html("Time: ("+date_tp+`)<span>${thirdPeriod}</span>`);
  // Weather forecast for first period
  $("#north2").text(thirdPeriodRegion.north)
  $("#south2").text(thirdPeriodRegion.south)
  $("#east2").text(thirdPeriodRegion.east)
  $("#west2").text(thirdPeriodRegion.west)
  $("#central2").text(thirdPeriodRegion.central)
}

function currentWeather(name,i) {
  let disp = "<h4>" + name + "</h4>";
  $(`#location #${"location"+i}`).append(disp);
}
// Function to process location and output display
// Pythagoras function to calculate distance.
function closestDist(lat, long, lat1, long1) {
  let xDiff = lat - lat1;
  let yDiff = long - long1;
  let result = xDiff * xDiff + yDiff * yDiff;
  return result;
}
