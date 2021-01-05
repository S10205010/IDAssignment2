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
