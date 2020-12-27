$(document).ready(function () {
  //This portion is to extract API information form session storage.
  var airTempRT = JSON.parse(sessionStorage.getItem("airTemp"));
  var rainfallRT = JSON.parse(sessionStorage.getItem("rainfall"));
  var relativeHumidityRT = JSON.parse(sessionStorage.getItem("relativeHumidity"));
  var windDirectionRT = JSON.parse(sessionStorage.getItem("WindDirection"));
  var windSpeedRT =JSON.parse(sessionStorage.getItem("WindSpeed"));
  
  var weaFc2Hr = JSON.parse(sessionStorage.getItem("02HourFC"));
  var weaFc24Hr = JSON.parse(sessionStorage.getItem("24HourFC"));
  var weaFc4d = JSON.parse(sessionStorage.getItem("4DayFC"));
  // This portion is to add values into dropdown option.
  for (let i = 0; i < weaFc2Hr.area_metadata.length; i++) {
    let temp = weaFc2Hr.area_metadata[i].name;
    let disp = "<option value = '" + i + "'>" + temp + "</option>";
    $("#location").append(disp);
  }
  var index;
  $("select").click(function () {
    index = $("#location").val();
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
  let lat = ip[0];
  let long = ip[1];
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
//API Rainfall
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
    alert("Failed to load Rainfall API!");
  }   
});
//API Air temperature
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/air-temperature",
  data: { date_time: date_time, date: date_d },
}).done(function (data) {
  if ((data.api_info.status == "healthy")) {
    sessionStorage.setItem("airTemp", JSON.stringify(data));
  }else{
    alert("Failed to load Air Temperature API!");
  }   
});
//API Relative humidity
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/relative-humidity",
  data: { date_time: date_time, date: date_d },
}).done(function (data) {
  if ((data.api_info.status == "healthy")) {
    sessionStorage.setItem("relativeHumidity", JSON.stringify(data));
  }else{
    alert("Failed to load Relative Humidity API!");
  }   
});
//API Wind Direction
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/wind-direction",
  data: { date_time: date_time, date: date_d },
}).done(function (data) {
  if ((data.api_info.status == "healthy")) {
    sessionStorage.setItem("WindDirection", JSON.stringify(data));
  }else{
    alert("Failed to load Wind Direction API!");
  }   
});
//API Wind Speed
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/wind-speed",
  data: { date_time: date_time, date: date_d },
}).done(function (data) {
  if ((data.api_info.status == "healthy")) {
    sessionStorage.setItem("WindSpeed", JSON.stringify(data));
  }else{
    alert("Failed to load Wind Speed API!");
  }   
});
//API 2 hour weather forecast
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast",
  data: { date_time: date_time, date: date_d },
}).done(function (data) {
  if ((data.api_info.status == "healthy")) {
    sessionStorage.setItem("02HourFC", JSON.stringify(data));
  }else{
    alert("Failed to load 2 Hour Weather Forecast API!");
  }  
});
//API 24 hour weather forecast
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast",
  data: { date_time: date_time, date: date_d },
}).done(function (data) {
  if ((data.api_info.status == "healthy")) {
    sessionStorage.setItem("24HourFC", JSON.stringify(data));
  }else{
    alert("Failed to load 24 Hour Weather Forecast API!");
  }   
});
//API 4 days weather forecast
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/4-day-weather-forecast",
  data: { date_time: date_time, date: date_d },
}).done(function (data) {
  if ((data.api_info.status == "healthy")) {
    sessionStorage.setItem("4DayFC", JSON.stringify(data));
  }else{
    alert("Failed to load 4 Day Weather Forecast API!");
  }   
});