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
    console.log(`Rainfall API ${request} ${status.status}`);
    sessionStorage.setItem("rainfall", JSON.stringify(failedAPI));
  },
}).done(function (data) {
  if (data.items[0].timestamp != "") {
    sessionStorage.setItem("rainfall", JSON.stringify(data));
  } else {
    console.log("Failed to load Rainfall API!(API data error)");
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
    console.log(`Air Temperature API ${request} ${status.status}`);
    sessionStorage.setItem("airTemp", JSON.stringify(failedAPI));
  },
}).done(function (data) {
  if (data.items[0].timestamp != "") {
    sessionStorage.setItem("airTemp", JSON.stringify(data));
  } else {
    console.log("Failed to load Air Temperature API!(API data error)");
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
    console.log(`Relative Humidity API ${request} ${status.status}`);
    sessionStorage.setItem("relativeHumidity", JSON.stringify(failedAPI));
  },
}).done(function (data) {
  if (data.items[0].timestamp != "") {
    sessionStorage.setItem("relativeHumidity", JSON.stringify(data));
  } else {
    console.log("Failed to load Relative Humidity API! (API data error)");
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
    console.log(`Wind Direction API ${request} ${status.status}`);
    sessionStorage.setItem("WindDirection", JSON.stringify(failedAPI));
  },
}).done(function (data) {
  if (data.items[0].timestamp != "") {
    sessionStorage.setItem("WindDirection", JSON.stringify(data));
  } else {
    console.log("Failed to load Wind Direction API! (API data error)");
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
    console.log(`Wind Speed API ${request} ${status.status}`);
    sessionStorage.setItem("WindSpeed", JSON.stringify(failedAPI));
  },
}).done(function (data) {
  if (data.items[0].timestamp != "") {
    sessionStorage.setItem("WindSpeed", JSON.stringify(data));
  } else {
    console.log("Failed to load Wind Speed API! (API data error)");
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
    console.log(`2 Hour Weather Forecast API ${request} ${status.status}`);
    sessionStorage.setItem("02HourFC", JSON.stringify(failed2hrFC));
  },
}).done(function (data) {
  if (data.area_metadata.length != 0) {
    sessionStorage.setItem("02HourFC", JSON.stringify(data));
  } else {
    console.log("Failed to load 2 Hour Weather Forecast API! (API data error)");
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
    console.log(`24 Hour Weather Forecast API ${request} ${status.status}`);
    sessionStorage.setItem("24HourFC", JSON.stringify(failed24hrFC));
  },
}).done(function (data) {
  if (data.items.length != 1) {
    sessionStorage.setItem("24HourFC", JSON.stringify(data));
  } else {
    console.log(
      "Failed to load 24 Hour Weather Forecast API! (API data error)"
    );
    sessionStorage.setItem("24HourFC", JSON.stringify(failed24hrFC));
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
    console.log(`4 Day Weather Forecast API ${request} ${status.status}`);
    sessionStorage.setItem("4DayFC", JSON.stringify(failed4dayFC));
  },
}).done(function (data) {
  if (data.items.length != 1) {
    sessionStorage.setItem("4DayFC", JSON.stringify(data));
  } else {
    console.log("Failed to load 4 Day Weather Forecast API! (API data error)");
    sessionStorage.setItem("4DayFC", JSON.stringify(failed4dayFC));
  }
});
//API for PSI
//Plans to get full day readings
//chart as a function
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/psi",
  data: { date_time: date_time, date: date_d },
  error: function (status, request) {
    console.log(`PSI API ${request} ${status.status}`);
  },
}).done(function (data) {});
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
  //Loading of 24Hour information
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
      console.log(name);
      $("#location").append("<div></div>");
      currentWeather(name);
    }
  });
});

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
  $("#time3").text("Time:"+date_tp);
  $("#time2").text(thirdPeriod);
  // Weather forecast for first period
  $("#north2").text(thirdPeriodRegion.north)
  $("#south2").text(thirdPeriodRegion.south)
  $("#east2").text(thirdPeriodRegion.east)
  $("#west2").text(thirdPeriodRegion.west)
  $("#central2").text(thirdPeriodRegion.central)
}

function currentWeather(name) {
  let disp = "<h3>" + name + "</h3>";
  $("#location div").append(disp);
}
// Function to process location and output display
// Pythagoras function to calculate distance.
function closestDist(lat, long, lat1, long1) {
  let xDiff = lat - lat1;
  let yDiff = long - long1;
  let result = xDiff * xDiff + yDiff * yDiff;
  return result;
}
