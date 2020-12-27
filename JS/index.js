$(document).ready(function () {
  var weaFc2Hr = JSON.parse(sessionStorage.getItem("2hourly"));
  // This portion is to add values into dropdown option.
  for (let i = 0; i < weaFc2Hr.area_metadata.length; i++) {
    let temp = weaFc2Hr.area_metadata[i].name;
    let disp = "<option value = '" + i + "'>" + temp + "</option>";
    $("#location").append(disp);
  }
  var index;
  $("select").click(function () {
    index = $("#location").val();
    console.log(index);
  });
});
// Function to process location and output display
// Pythagoras function to calculate distance.
function closestDist(lat, long, lat1, long1) {
  let xDiff = lat - lat1;
  let yDiff = long - long1;
  let result = xDiff * xDiff + yDiff * yDiff;
  return result;
}
//Function to find closest station/reading point for weather
function closestPoint(ip, weaFc2Hr) {
  //user Latidude and Longitude
  let lat = ip.latitude;
  let long = ip.longitude;
  let smallestDist = 10;
  let indexWeaFc2Hr;
  for (let i = 0; i < weaFc2Hr.area_metadata.length; i++) {
    //station's latitude and longitude
    let lat1 = weaFc2Hr.area_metadata[i].label_location.latitude;
    let long1 = weaFc2Hr.area_metadata[i].label_location.longitude;
    let distDiff = closestDist(lat, long, lat1, long1);
    if (distDiff <= smallestDist) {
      smallestDist = distDiff;
      indexWeaFc2Hr = i;
    } else {
      continue;
    }
  }
  return indexWeaFc2Hr;
}
// API request to 2hour weather forecast
// Formating request
var date = new Date();
var date_time =
  date.getFullYear() +
  "-" +
  date.getMonth() +
  "-" +
  date.getDate() +
  "T" +
  date.toLocaleTimeString();
var date_d = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
//API request section
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast",
  data: { date_time: date_time, date: date_d },
}).done(function (data) {
  if ((data.api_info.status == "healthy")) {
    sessionStorage.setItem("2hourly", JSON.stringify(data));
  }else{
    alert("Failed to load API! ")
  }  
});
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/rainfall",
  data: { date_time: date_time, date: date_d },
}).done(function (data) {
  if ((data.api_info.status == "healthy")) {
    sessionStorage.setItem("rainfall", JSON.stringify(data));
  }else{
    alert("Failed to load API! ")
  }   
});
