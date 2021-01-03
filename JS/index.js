//Constant for API that failed the request.
const failedAPI = {
  metadata: {
    stations: [
      {
        id: "0",
        device_id: "0",
        name: "Failed",
        location: {
          latitude: 1.2937,
          longitude: 103.8125,
        },
      },
    ],
  },
  items: [
    {
      timestamp: "0000-00-00T00:00:00+08:00",
      readings: [
        {
          station_id: "0",
          value: 0,
        },
      ],
    },
  ],
};
const failed2hrFC = {
  area_metadata: [
    {
      name: "null",
      label_location: {
        latitude: 1.375,
        longitude: 103.839,
      },
    },
  ],
  items: [
    {
      update_timestamp: "0000-00-00T00:00:00+08:00",
      timestamp: "0000-00-00T00:00:00+08:00",
      valid_period: {
        start: "0000-00-00T00:00:00+08:00",
        end: "0000-00-00T00:00:00+08:00",
      },
      forecasts: [
        {
          area: "Ang Mo Kio",
          forecast: "Cloudy",
        },
      ],
    },
  ],
};
const failed24hrFC = {
  items: [
    {
      update_timestamp: "0000-00-00T00:00:00+08:00",
      timestamp: "0000-00-00T00:00:00+08:00",
      valid_period: {
        start: "0000-00-0T18:00:00+08:00",
        end: "0000-00-00T06:00:00+08:00",
      },
      general: {
        forecast: "Sunny",
        relative_humidity: {
          low: 55,
          high: 90,
        },
        temperature: {
          low: 24,
          high: 34,
        },
        wind: {
          speed: {
            low: 10,
            high: 20,
          },
          direction: "NNE",
        },
      },
      periods: [
        {
          time: {
            start: "0000-00-00T18:00:00+08:00",
            end: "0000-00-00T06:00:00+08:00",
          },
          regions: {
            west: "Thundery Showers",
            east: "Thundery Showers",
            central: "Thundery Showers",
            south: "Thundery Showers",
            north: "Thundery Showers",
          },
        },
        {
          time: {
            start: "0000-00-00T06:00:00+08:00",
            end: "0000-00-00T12:00:00+08:00",
          },
          regions: {
            west: "Partly Cloudy (Day)",
            east: "Partly Cloudy (Day)",
            central: "Partly Cloudy (Day)",
            south: "Partly Cloudy (Day)",
            north: "Partly Cloudy (Day)",
          },
        },
        {
          time: {
            start: "0000-00-00T12:00:00+08:00",
            end: "0000-00-00T18:00:00+08:00",
          },
          regions: {
            west: "Thundery Showers",
            east: "Thundery Showers",
            central: "Partly Cloudy (Day)",
            south: "Thundery Showers",
            north: "Partly Cloudy (Day)",
          },
        },
      ],
    },
  ],
};
const failed4dayFC = {
  items: [
    {
      update_timestamp: "0000-00-00T00:00:00+08:00",
      timestamp: "0000-00-00T00:00:00+08:00",
      forecasts: [
        {
          temperature: {
            low: 0,
            high: 0,
          },
          date: "0000-00-00",
          forecast: "Sunny",
          relative_humidity: {
            low: 0,
            high: 0,
          },
          wind: {
            speed: {
              low: 0,
              high: 0,
            },
            direction: "N",
          },
          timestamp: "0000-00-00T00:00:00+08:00",
        },
        {
          temperature: {
            low: 0,
            high: 0,
          },
          date: "0000-00-00",
          forecast: "Sunny",
          relative_humidity: {
            low: 0,
            high: 0,
          },
          wind: {
            speed: {
              low: 0,
              high: 0,
            },
            direction: "N",
          },
          timestamp: "0000-00-00T00:00:00+08:00",
        },
        {
          temperature: {
            low: 0,
            high: 0,
          },
          date: "0000-00-00",
          forecast: "Sunny",
          relative_humidity: {
            low: 0,
            high: 0,
          },
          wind: {
            speed: {
              low: 0,
              high: 0,
            },
            direction: "N",
          },
          timestamp: "0000-00-00T00:00:00+08:00",
        },
        {
          temperature: {
            low: 0,
            high: 0,
          },
          date: "0000-00-00",
          forecast: "Sunny",
          relative_humidity: {
            low: 0,
            high: 0,
          },
          wind: {
            speed: {
              low: 0,
              high: 0,
            },
            direction: "N",
          },
          timestamp: "0000-00-00T00:00:00+08:00",
        },
      ],
    },
  ],
};
const failedPSI = {
  items: [
    {
      timestamp: "2021-01-01T07:00:00+08:00",
      update_timestamp: "2021-01-01T07:08:52+08:00",
      readings: {
        psi_twenty_four_hourly: {
          west: 32,
          national: 32,
          east: 50,
          central: 41,
          south: 52,
          north: 42,
        },
      },
    },
  ],
};
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
  day = "0" + (date.getMonth() + 1);
} else {
  day = date.getDate() + 1;
}
console.log(month);
console.log(day);
var date_time =
  date.getFullYear() +
  "-" +
  month +
  "-" +
  day +
  "T" +
  date.toLocaleTimeString();
var date_d = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
console.log(date_time);
//API request section
//API Rainfall
//Once retrieve API data, it is stored into Session storage.
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/rainfall",
  data: { date_time: date_time, date: date_d },
  error: function (status, request) {
    alert(`Rainfall API ${request} ${status.status}`);
    sessionStorage.setItem("rainfall", JSON.stringify(failedAPI));
  },
}).done(function (data) {
  if (data.api_info.status == "healthy") {
    sessionStorage.setItem("rainfall", JSON.stringify(data));
  } else {
    alert("Failed to load Rainfall API!");
    sessionStorage.setItem("rainfall", JSON.stringify(failedAPI));
  }
});
//API Air temperature
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/air-temperature",
  data: { date_time: date_time, date: date_d },
  error: function (status, request) {
    alert(`Air Temperature API ${request} ${status.status}`);
    sessionStorage.setItem("airTemp", JSON.stringify(failedAPI));
  },
}).done(function (data) {
  if (data.api_info.status == "healthy") {
    sessionStorage.setItem("airTemp", JSON.stringify(data));
  } else {
    alert("Failed to load Air Temperature API!");
    sessionStorage.setItem("airTemp", JSON.stringify(failedAPI));
  }
});
//API Relative humidity
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/relative-humidity",
  data: { date_time: date_time, date: date_d },
  error: function (status, request) {
    alert(`Relative Humidity API ${request} ${status.status}`);
    sessionStorage.setItem("relativeHumidity", JSON.stringify(failedAPI));
  },
}).done(function (data) {
  if (data.api_info.status == "healthy") {
    sessionStorage.setItem("relativeHumidity", JSON.stringify(data));
  } else {
    alert("Failed to load Relative Humidity API!");
    sessionStorage.setItem("relativeHumidity", JSON.stringify(failedAPI));
  }
});
//API Wind Direction
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/wind-direction",
  data: { date_time: date_time, date: date_d },
  error: function (status, request) {
    alert(`Wind Direction API ${request} ${status.status}`);
    sessionStorage.setItem("WindDirection", JSON.stringify(failedAPI));
  },
}).done(function (data) {
  if (data.api_info.status == "healthy") {
    sessionStorage.setItem("WindDirection", JSON.stringify(data));
  } else {
    alert("Failed to load Wind Direction API!");
    sessionStorage.setItem("WindDirection", JSON.stringify(failedAPI));
  }
});
//API Wind Speed
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/wind-speed",
  data: { date_time: date_time, date: date_d },
  error: function (status, request) {
    alert(`Wind Speed API ${request} ${status.status}`);
    sessionStorage.setItem("WindSpeed", JSON.stringify(failedAPI));
  },
}).done(function (data) {
  if (data.api_info.status == "healthy") {
    sessionStorage.setItem("WindSpeed", JSON.stringify(data));
  } else {
    alert("Failed to load Wind Speed API!");
    sessionStorage.setItem("WindSpeed", JSON.stringify(failedAPI));
  }
});
//API 2 hour weather forecast
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast",
  data: { date_time: date_time, date: date_d },
  error: function (status, request) {
    alert(`2 Hour Weather Forecast API ${request} ${status.status}`);
    sessionStorage.setItem("02HourFC", JSON.stringify(failed2hrFC));
  },
}).done(function (data) {
  if (data.api_info.status == "healthy") {
    sessionStorage.setItem("02HourFC", JSON.stringify(data));
  } else {
    alert("Failed to load 2 Hour Weather Forecast API!");
    sessionStorage.setItem("02HourFC", JSON.stringify(failed2hrFC));
  }
});
//API 24 hour weather forecast
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast",
  data: { date_time: date_time, date: date_d },
  error: function (status, request) {
    alert(`24 Hour Weather Forecast API ${request} ${status.status}`);
    sessionStorage.setItem("rainfall", JSON.stringify(failed24hrFC));
  },
}).done(function (data) {
  if (data.api_info.status == "healthy") {
    sessionStorage.setItem("24HourFC", JSON.stringify(data));
  } else {
    alert("Failed to load 24 Hour Weather Forecast API!");
    sessionStorage.setItem("rainfall", JSON.stringify(failed24hrFC));
  }
});
//API 4 days weather forecast
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/4-day-weather-forecast",
  data: { date_time: date_time, date: date_d },
  error: function (status, request) {
    alert(`4 Day Weather Forecast API ${request} ${status.status}`);
    sessionStorage.setItem("4DayFC", JSON.stringify(failed4dayFC));
  },
}).done(function (data) {
  if (data.api_info.status == "healthy") {
    sessionStorage.setItem("4DayFC", JSON.stringify(data));
  } else {
    alert("Failed to load 4 Day Weather Forecast API!");
    sessionStorage.setItem("4DayFC", JSON.stringify(failed4dayFC));
  }
});
//API for PSI
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/psi",
  data: { date_time: date_time, date: date_d },
  error: function (status, request) {
    alert(`PSI API ${request} ${status.status}`);
    sessionStorage.setItem("psi", JSON.stringify(failedPSI));
  },
}).done(function (data) {
  if (data.api_info.status == "healthy") {
    sessionStorage.setItem("psi", JSON.stringify(data));
  } else {
    alert("Failed to load 4 Day Weather Forecast API!");
    sessionStorage.setItem("psi", JSON.stringify(failedPSI));
  }
});
//ajaxStop is used so that all ajax is requests is completed before
//execution
$(document).ajaxStop(function () {
  //This portion is to extract API information form session storage.
  var airTempRT = JSON.parse(sessionStorage.getItem("airTemp"));
  var rainfallRT = JSON.parse(sessionStorage.getItem("rainfall"));
  var relativeHumidityRT = JSON.parse(
    sessionStorage.getItem("relativeHumidity")
  );
  var windDirectionRT = JSON.parse(sessionStorage.getItem("WindDirection"));
  var windSpeedRT = JSON.parse(sessionStorage.getItem("WindSpeed"));

  var weaFc2Hr = JSON.parse(sessionStorage.getItem("02HourFC"));
  var weaFc24Hr = JSON.parse(sessionStorage.getItem("24HourFC"));
  var weaFc4d = JSON.parse(sessionStorage.getItem("4DayFC"));
  //Variable to be used by main program
  var area = weaFc2Hr.area_metadata;
  $("#locationSearch").keyup(function(){
    //Get input from user
    $("#location div").remove();
    let userValue = $("#locationSearch").val().toUpperCase();
    let userLen = userValue.length;
    let indexResult = [];
    //Search index of related areas
    for(i = 0; i < area.length; i ++){
      let areaname = area[i].name.slice(0,userLen).toUpperCase();
      if(userValue == areaname){
        indexResult.push(i);        
      }
      else{
        continue;
      }
    }
    //From index establish latitude and longitude of each respective location
    for(i = 0;i<indexResult.length;i++){
      let index = indexResult[i];
      let lat = area[index].label_location.latitude;
      let long = area[index].label_location.longitude;
      //Labeling location
      let name = area[index].name;
      console.log(name);
      $("#location").append("<div></div>")
      currentWeather(name);
    }
  })
});

function currentWeather(name){
  let disp = "<h3>"+name+"</h3>"
  $("#location div").append(disp)
}
// Function to process location and output display
// Pythagoras function to calculate distance.
function closestDist(lat, long, lat1, long1) {
  let xDiff = lat - lat1;
  let yDiff = long - long1;
  let result = xDiff * xDiff + yDiff * yDiff;
  return result;
}

