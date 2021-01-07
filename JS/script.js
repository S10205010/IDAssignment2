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
//Constant variable needed to run search
const area_JSON = {"area_metadata": [
  {
    "name": "Ang Mo Kio",
    "label_location": {
      "latitude": 1.375,
      "longitude": 103.839
    }
  },
  {
    "name": "Bedok",
    "label_location": {
      "latitude": 1.321,
      "longitude": 103.924
    }
  },
  {
    "name": "Bishan",
    "label_location": {
      "latitude": 1.350772,
      "longitude": 103.839
    }
  },
  {
    "name": "Boon Lay",
    "label_location": {
      "latitude": 1.304,
      "longitude": 103.701
    }
  },
  {
    "name": "Bukit Batok",
    "label_location": {
      "latitude": 1.353,
      "longitude": 103.754
    }
  },
  {
    "name": "Bukit Merah",
    "label_location": {
      "latitude": 1.277,
      "longitude": 103.819
    }
  },
  {
    "name": "Bukit Panjang",
    "label_location": {
      "latitude": 1.362,
      "longitude": 103.77195
    }
  },
  {
    "name": "Bukit Timah",
    "label_location": {
      "latitude": 1.325,
      "longitude": 103.791
    }
  },
  {
    "name": "Central Water Catchment",
    "label_location": {
      "latitude": 1.38,
      "longitude": 103.805
    }
  },
  {
    "name": "Changi",
    "label_location": {
      "latitude": 1.357,
      "longitude": 103.987
    }
  },
  {
    "name": "Choa Chu Kang",
    "label_location": {
      "latitude": 1.377,
      "longitude": 103.745
    }
  },
  {
    "name": "Clementi",
    "label_location": {
      "latitude": 1.315,
      "longitude": 103.76
    }
  },
  {
    "name": "City",
    "label_location": {
      "latitude": 1.292,
      "longitude": 103.844
    }
  },
  {
    "name": "Geylang",
    "label_location": {
      "latitude": 1.318,
      "longitude": 103.884
    }
  },
  {
    "name": "Hougang",
    "label_location": {
      "latitude": 1.361218,
      "longitude": 103.886
    }
  },
  {
    "name": "Jalan Bahar",
    "label_location": {
      "latitude": 1.347,
      "longitude": 103.67
    }
  },
  {
    "name": "Jurong East",
    "label_location": {
      "latitude": 1.326,
      "longitude": 103.737
    }
  },
  {
    "name": "Jurong Island",
    "label_location": {
      "latitude": 1.266,
      "longitude": 103.699
    }
  },
  {
    "name": "Jurong West",
    "label_location": {
      "latitude": 1.34039,
      "longitude": 103.705
    }
  },
  {
    "name": "Kallang",
    "label_location": {
      "latitude": 1.312,
      "longitude": 103.862
    }
  },
  {
    "name": "Lim Chu Kang",
    "label_location": {
      "latitude": 1.423,
      "longitude": 103.717332
    }
  },
  {
    "name": "Mandai",
    "label_location": {
      "latitude": 1.419,
      "longitude": 103.812
    }
  },
  {
    "name": "Marine Parade",
    "label_location": {
      "latitude": 1.297,
      "longitude": 103.891
    }
  },
  {
    "name": "Novena",
    "label_location": {
      "latitude": 1.327,
      "longitude": 103.826
    }
  },
  {
    "name": "Pasir Ris",
    "label_location": {
      "latitude": 1.37,
      "longitude": 103.948
    }
  },
  {
    "name": "Paya Lebar",
    "label_location": {
      "latitude": 1.358,
      "longitude": 103.914
    }
  },
  {
    "name": "Pioneer",
    "label_location": {
      "latitude": 1.315,
      "longitude": 103.675
    }
  },
  {
    "name": "Pulau Tekong",
    "label_location": {
      "latitude": 1.403,
      "longitude": 104.053
    }
  },
  {
    "name": "Pulau Ubin",
    "label_location": {
      "latitude": 1.404,
      "longitude": 103.96
    }
  },
  {
    "name": "Punggol",
    "label_location": {
      "latitude": 1.401,
      "longitude": 103.904
    }
  },
  {
    "name": "Queenstown",
    "label_location": {
      "latitude": 1.291,
      "longitude": 103.78576
    }
  },
  {
    "name": "Seletar",
    "label_location": {
      "latitude": 1.404,
      "longitude": 103.869
    }
  },
  {
    "name": "Sembawang",
    "label_location": {
      "latitude": 1.445,
      "longitude": 103.818495
    }
  },
  {
    "name": "Sengkang",
    "label_location": {
      "latitude": 1.384,
      "longitude": 103.891443
    }
  },
  {
    "name": "Sentosa",
    "label_location": {
      "latitude": 1.243,
      "longitude": 103.832
    }
  },
  {
    "name": "Serangoon",
    "label_location": {
      "latitude": 1.357,
      "longitude": 103.865
    }
  },
  {
    "name": "Southern Islands",
    "label_location": {
      "latitude": 1.208,
      "longitude": 103.842
    }
  },
  {
    "name": "Sungei Kadut",
    "label_location": {
      "latitude": 1.413,
      "longitude": 103.756
    }
  },
  {
    "name": "Tampines",
    "label_location": {
      "latitude": 1.345,
      "longitude": 103.944
    }
  },
  {
    "name": "Tanglin",
    "label_location": {
      "latitude": 1.308,
      "longitude": 103.813
    }
  },
  {
    "name": "Tengah",
    "label_location": {
      "latitude": 1.374,
      "longitude": 103.715
    }
  },
  {
    "name": "Toa Payoh",
    "label_location": {
      "latitude": 1.334304,
      "longitude": 103.856327
    }
  },
  {
    "name": "Tuas",
    "label_location": {
      "latitude": 1.294947,
      "longitude": 103.635
    }
  },
  {
    "name": "Western Islands",
    "label_location": {
      "latitude": 1.205926,
      "longitude": 103.746
    }
  },
  {
    "name": "Western Water Catchment",
    "label_location": {
      "latitude": 1.405,
      "longitude": 103.689
    }
  },
  {
    "name": "Woodlands",
    "label_location": {
      "latitude": 1.432,
      "longitude": 103.786528
    }
  },
  {
    "name": "Yishun",
    "label_location": {
      "latitude": 1.418,
      "longitude": 103.839
    }
  }
]}
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
//Once retrieve API data, it is stored into Session storage.

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
    sessionStorage.setItem("02HourFC", JSON.stringify(data.items));
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
  if (data.items.length != 0) {
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
  if (data.items.length != 0) {
    sessionStorage.setItem("4DayFC", JSON.stringify(data));
  } else {
    console.log("Failed to load 4 Day Weather Forecast API! (API data error)");
    sessionStorage.setItem("4DayFC", JSON.stringify(failed4dayFC));
  }
});
var modeCondition;
$("#LightDarkMode").click(function () {
  // false means not dark mode
  if (modeCondition == 'false'){
    localStorage.setItem("LightDarkMode", true);
    modeCondition = "true";
  }else{
    localStorage.setItem("LightDarkMode", false);
    modeCondition = "false";
  }
  lightDark(modeCondition);
});
$(document).ready(function () {
  if (localStorage.getItem("LightDarkMode") == null) {
    modeCondition = 'true';
  } else {
    modeCondition = localStorage.getItem("LightDarkMode");
  }
  lightDark(modeCondition);
  
});
function lightDark(modeCondition){
  if (modeCondition == "false") {
    $("header nav").removeClass("bg-light navbar-light");
    $("header nav").addClass("bg-dark navbar-dark");
    $("body").css({ color: "gray", "background-color": "black" });
    $("#LightDarkMode").css({ "background-color": "black" });
    $(".navbar-brand img").attr("src", "Images/CarpeDiemDark.png");
    $("#locationSearch,#startTime select,#endTime select,#button,#eventDate,#scheduleLocation,#eventName").css({"background-color":"#444","border-color":"#999","color":"#aaa"})
  } else {
    $("header nav").removeClass("bg-dark navbar-dark");
    $("header nav").addClass("bg-light navbar-light");
    $("body").css({ color: "black", "background-color": "white" });
    $("#LightDarkMode").css({ "background-color": "white" });
    $(".navbar-brand img").attr("src", "Images/CarpeDiemLight.png");
    $("#locationSearch,#startTime select,#endTime select,#button,#eventDate,#scheduleLocation,#eventName").css({"background-color":"#eee","border-color":"black","color":"black"})
  }
}