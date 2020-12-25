
$(document).ready(function () {
  var weaFc2Hr = JSON.parse(sessionStorage.getItem("2hourly"));
  var ip = JSON.parse(sessionStorage.getItem("IP"));
  console.log(ip,weaFc2Hr)
  var closestWeaFc2Hr = closestPoint(ip,weaFc2Hr);
  $("#location").text(weaFc2Hr.area_metadata[closestWeaFc2Hr].name)
});

// Pythagoras function to calculate distance.
function closestDist(lat, long, lat1, long1) {
  let xDiff = lat - lat1;
  let yDiff = long - long1;
  let result = xDiff * xDiff + yDiff * yDiff;
  return result;
}
//Function to find closest station/reading point for weather
function closestPoint(ip,weaFc2Hr){
  //user Latidude and Longitude
  let lat = ip.latitude;
  let long = ip.longitude;
  let smallestDist = 10;
  let indexWeaFc2Hr;
  for (let i = 0;i<weaFc2Hr.area_metadata.length;i++)
  {
    //station's latitude and longitude
    let lat1=weaFc2Hr.area_metadata[i].label_location.latitude;
    let long1= weaFc2Hr.area_metadata[i].label_location.longitude;
    let distDiff = closestDist(lat,long,lat1,long1);
    if (distDiff <= smallestDist){
      smallestDist = distDiff;
      indexWeaFc2Hr=i; 
    }
    else{
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
  if (sessionStorage.getItem("2hourly") != null) {
    sessionStorage.clear();
  } else {
    console.log("null");
  }
  sessionStorage.setItem("2hourly", JSON.stringify(data));
});

//IP portion
// var test = {
//   "ip": "112.199.235.83",
//   "type": "ipv4",
//   "continent_code": "AS",
//   "continent_name": "Asia",
//   "country_code": "SG",
//   "country_name": "Singapore",
//   "region_code": "01",
//   "region_name": null,
//   "city": "Singapore",
//   "zip": null,
//   "latitude": 1.3200000524520874,
//   "longitude": 103.8198013305664,
//   "location": {
//     "geoname_id": 1880252,
//     "capital": "Singapore",
//     "languages": [
//       {
//         "code": "en",
//         "name": "English",
//         "native": "English"
//       },
//       {
//         "code": "ms",
//         "name": "Malay",
//         "native": "Bahasa Melayu"
//       },
//       {
//         "code": "ta",
//         "name": "Tamil",
//         "native": "தமிழ்"
//       },
//       {
//         "code": "zh",
//         "name": "Chinese",
//         "native": "中文"
//       }
//     ],
//     "country_flag": "http://assets.ipapi.com/flags/sg.svg",
//     "country_flag_emoji": "🇸🇬",
//     "country_flag_emoji_unicode": "U+1F1F8 U+1F1EC",
//     "calling_code": "65",
//     "is_eu": false
//   }
// }
fetch("http://api.ipapi.com/check?access_key=fcc0cefb939e2977b8aa4f6143767571&format=1")
.then(response=>response.json())
.then(function(data){
  if (sessionStorage.getItem("IP")== null){
  sessionStorage.setItem("IP",JSON.stringify(data))}
  else{
    sessionStorage.setItem("IP",null)
  }
})

