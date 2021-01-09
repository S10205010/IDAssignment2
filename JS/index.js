// API requests
// Formating request
var date = new Date();
var month;
var day;
if (date.getMonth() <= 9) {
  month = "0" + (date.getMonth() + 1);
} else {
  month = date.getMonth() + 1;
}
if (date.getDate() <= 9) {
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
let previous_date = date;
previous_date.setDate(date.getDate() - 1);
let date_p =
  previous_date.getFullYear() +
  "-" +
  ("0" + (previous_date.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + previous_date.getDate()).slice(-2);
$.ajax({
  type: "GET",
  dataType: "json",
  contentType: "text/plain",
  url: "https://api.data.gov.sg/v1/environment/psi",
  data: { date: date_p },
  error: function (status, request) {
    console.log(`PSI API ${request} ${status.status}`);
  },
}).done(function (data) {
  let psiData = [];
  let hour = date.getHours() - 1;
  let label = [];
  for (i = hour; i < data.items.length; i++) {
    let timeStamp = data.items[i].timestamp.slice(11, 19);
    label.push(timeStamp);
    let reading = data.items[i].readings.psi_twenty_four_hourly;
    psiData.push(reading);
  }
  label.push("00:00:00");
  psiData.push(
    data.items[data.items.length - 1].readings.psi_twenty_four_hourly
  );
  $.ajax({
    type: "GET",
    dataType: "json",
    contentType: "text/plain",
    url: "https://api.data.gov.sg/v1/environment/psi",
    data: { date: date_d },
    error: function (status, request) {
      console.log(`PSI API ${request} ${status.status}`);
    },
  }).done(function (data) {
    for (i = 0; i < data.items.length; i++) {
      let timeStamp = data.items[i].timestamp.slice(11, 19);
      label.push(timeStamp);
      let reading = data.items[i].readings.psi_twenty_four_hourly;
      psiData.push(reading);
    }
    sessionStorage.setItem("psiHour", JSON.stringify(label));
    sessionStorage.setItem("psiData", JSON.stringify(psiData));
  });
});
//ajaxStop is used so that all ajax is requests is completed before
//execution
$(document).ajaxStop(function () {
  //This portion is to extract API information form session storage.
  var airTempRT = JSON.parse(sessionStorage.getItem("airTemp"));
  var relativeHumidityRT = JSON.parse(
    sessionStorage.getItem("relativeHumidity")
  );
  var windSpeedRT = JSON.parse(sessionStorage.getItem("WindSpeed"));

  var weaFc2Hr = JSON.parse(sessionStorage.getItem("02HourFC"));
  var weaFc24Hr = JSON.parse(sessionStorage.getItem("24HourFC"));
  var weaFc4d = JSON.parse(sessionStorage.getItem("4DayFC"));
  var label = JSON.parse(sessionStorage.getItem("psiHour"));
  var psiData = JSON.parse(sessionStorage.getItem("psiData"));
  //Variable to be used by main program
  var area = area_JSON.area_metadata;
  var hide = true;
  //Loading of website information
  loadCurrentWeather(
    area,
    airTempRT,
    weaFc2Hr,
    relativeHumidityRT,
    windSpeedRT
  );
  load24Hour(weaFc24Hr);

  chartPSI(label, psiData);
  chart4Day(weaFc24Hr, weaFc4d);
  //light dark mode function
  $("#LightDarkMode").click(function () {
    chartPSI(label, psiData);
    chart4Day(weaFc24Hr, weaFc4d);
  });
  if ($(window).width() <= 768) {
    var period0 = true;
    $(".firstPeriod").click(function () {
      if (period0 == true) {
        $(".period0").show();
        period0 = false;
      } else {
        $(".period0").hide();
        period0 = true;
      }
    });
    var period1 = true;
    $(".secondPeriod").click(function () {
      if (period1 == true) {
        $(".period1").show();
        period1 = false;
      } else {
        $(".period1").hide();
        period1 = true;
      }
    });
    var period2 = true;
    $(".thirdPeriod").click(function () {
      if (period2 == true) {
        $(".period2").show();
        period2 = false;
      } else {
        $(".period2").hide();
        period2 = true;
      }
    });


    $("main form div input").remove();
    $("main form div").append("<select id ='indexLocation'></select");
    displayIndexLocation(area);
    $("#indexLocation").click(function () {
      $("#location div").remove();
      let index = $("select#indexLocation").val();
      let lat = area[index].label_location.latitude;
      let long = area[index].label_location.longitude;
      //Labeling location
      let name = area[index].name;
      $("#location").append(`<div id = "${"location" + index}"></div>`);
      weatherLocation(name, index);
      currentWeather(
        lat,
        long,
        airTempRT,
        weaFc2Hr,
        relativeHumidityRT,
        windSpeedRT,
        index
      );
      $(`#${"location" + index} areadata`).hide();
      $(`#${"location" + index}`).click(function () {
        if (hide == true) {
          $(`#${"location" + index} areadata`).show();
          hide = false;
        } else {
          $(`#${"location" + index} areadata`).hide();
          hide = true;
        }
      });
    });
  } else {
    var period = true;
    $(".firstPeriod,.secondPeriod,.thirdPeriod").click(function () {
      if (period == true) {
        $(".period0,.period1,.period2").show();
        period = false;
      } else {
        $(".period0,.period1,.period2").hide();
        period = true;
      }
    });
    //Search function
    $("#locationSearch").keyup(function () {
      //Get input from user
      $("#location div").remove();
      let userValue = $("#locationSearch").val().toUpperCase();
      let userLen = userValue.length;
      if (userLen != 0) {
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
          $("#location").append(`<div id = "${"location" + i}"></div>`);
          weatherLocation(name, i);
          currentWeather(
            lat,
            long,
            airTempRT,
            weaFc2Hr,
            relativeHumidityRT,
            windSpeedRT,
            i
          );
        }
      }
    });
  }
});

function displayIndexLocation(area) {
  for (i = 0; i < area.length; i++) {
    let option = `<option value="${i}">` + area[i].name + "</option>";
    $("#indexLocation").append(option);
  }
}
function loadCurrentWeather(
  area,
  airTempRT,
  weaFc2Hr,
  relativeHumidityRT,
  windSpeedRT
) {
  let hide = true;
  //just need to print once
  let lat = area[0].label_location.latitude;
  let long = area[0].label_location.longitude;
  //Labeling location
  let name = area[0].name;
  $("#location").append(`<div id = "${"location" + 0}"></div>`);
  weatherLocation(name, 0);
  currentWeather(
    lat,
    long,
    airTempRT,
    weaFc2Hr,
    relativeHumidityRT,
    windSpeedRT,
    0
  );
  $(`#${"location" + 0} areadata`).hide();
  $(`#${"location" + 0}`).click(function () {
    if (hide == true) {
      $(`#${"location" + 0} areadata`).show();
      hide = false;
    } else {
      $(`#${"location" + 0} areadata`).hide();
      hide = true;
    }
  });
}
function weatherLocation(name, i) {
  let disp = "<h4>" + name + "</h4>";
  $(`#location #${"location" + i}`).append(disp);
  $(`#${"location" + i}`).append("<areadata></areadata>");
}
function findReading(lat, long, info) {
  let stationInfo = info.metadata.stations;
  let index;
  let dist = 1000;
  for (i = 0; i < stationInfo.length; i++) {
    let station = stationInfo[i];
    let stationLat = station.location.latitude;
    let stationLong = station.location.longitude;
    let diff = closestDist(lat, long, stationLat, stationLong);
    if (diff <= dist) {
      index = i;
      dist = diff;
    } else {
      continue;
    }
  }
  let reading = info.items[0].readings[index].value;
  return reading;
}
function currentWeather(
  lat,
  long,
  airTempRT,
  weaFc2Hr,
  relativeHumidityRT,
  windSpeedRT,
  i
) {
  let airTemp = findReading(lat, long, airTempRT);
  let weatherForecast = weaFc2Hr[0].forecasts[i].forecast;
  let relativeHumidity = findReading(lat, long, relativeHumidityRT);
  let windSpeed = findReading(lat, long, windSpeedRT);
  $(`#${"location" + i} areadata`).append(`<div class = "row">
  <div class ="col-sm">Forecast : ${weatherForecast}</div>
  <div class ="col-sm">Temperature: ${airTemp}°C</div>
  <div class ="col-sm">Relative Humidity: ${relativeHumidity}%</div>
  <div class ="col-sm">Wind Speed : ${windSpeed}knots</div>
  </div>`);
}
function load24Hour(weaFc24Hr) {
  let general = weaFc24Hr.items[0].general;
  //Weather(Air Temp)
  $("#t24High").text(general.temperature.high + " °C");
  $("#t24Low").text(general.temperature.low + " °C");
  // Weather (Relative Humidity)
  $("#rh24High").text(general.relative_humidity.high + " %");
  $("#rh24Low").text(general.relative_humidity.low + " %");
  //Weather (Wind Speed)
  $("#ws24High").text(general.wind.speed.high + " knots");
  $("#ws24Low").text(general.wind.speed.low + " knots");
  //Weather Wind Direction
  $("#wd24").text(general.wind.direction);
  // Weather(Sky)
  let firstPeriodRegion = weaFc24Hr.items[0].periods[0].regions;
  let secondPeriodRegion = weaFc24Hr.items[0].periods[1].regions;
  let thirdPeriodRegion = weaFc24Hr.items[0].periods[2].regions;

  //First period
  let firstStart =
    "(" +
    weaFc24Hr.items[0].periods[0].time.start.slice(0, 10) +
    ") " +
    weaFc24Hr.items[0].periods[0].time.start.slice(11, 19);
  let firstEnd =
    "(" +
    weaFc24Hr.items[0].periods[0].time.end.slice(0, 10) +
    ") " +
    weaFc24Hr.items[0].periods[0].time.end.slice(11, 19);
  $("#stime0").text(firstStart);
  $("#etime0").text(firstEnd);
  // Weather forecast for first period
  $("#north0").text(firstPeriodRegion.north);
  $("#south0").text(firstPeriodRegion.south);
  $("#east0").text(firstPeriodRegion.east);
  $("#west0").text(firstPeriodRegion.west);
  $("#central0").text(firstPeriodRegion.central);

  //Second period
  let secondStart =
    "(" +
    weaFc24Hr.items[0].periods[1].time.start.slice(0, 10) +
    ") " +
    weaFc24Hr.items[0].periods[1].time.start.slice(11, 19);
  let secondEnd =
    "(" +
    weaFc24Hr.items[0].periods[1].time.end.slice(0, 10) +
    ") " +
    weaFc24Hr.items[0].periods[1].time.end.slice(11, 19);
  $("#stime1").text(secondStart);
  $("#etime1").text(secondEnd);

  // Weather forecast for second period
  $("#north1").text(secondPeriodRegion.north);
  $("#south1").text(secondPeriodRegion.south);
  $("#east1").text(secondPeriodRegion.east);
  $("#west1").text(secondPeriodRegion.west);
  $("#central1").text(secondPeriodRegion.central);

  //Third Period
  let thirdStart =
    "(" +
    weaFc24Hr.items[0].periods[2].time.start.slice(0, 10) +
    ") " +
    weaFc24Hr.items[0].periods[2].time.start.slice(11, 19);
  let thirdEnd =
    "(" +
    weaFc24Hr.items[0].periods[2].time.end.slice(0, 10) +
    ") " +
    weaFc24Hr.items[0].periods[2].time.end.slice(11, 19);
  $("#stime2").text(thirdStart);
  $("#etime2").text(thirdEnd);

  // Weather forecast for first period
  $("#north2").text(thirdPeriodRegion.north);
  $("#south2").text(thirdPeriodRegion.south);
  $("#east2").text(thirdPeriodRegion.east);
  $("#west2").text(thirdPeriodRegion.west);
  $("#central2").text(thirdPeriodRegion.central);
  $(".period0,.period1,.period2").hide();
}
function extractPSI(psiData, a, label_x) {
  let north = [];
  let south = [];
  let east = [];
  let west = [];
  let central = [];
  let label = [];
  for (i = a; i < psiData.length; i++) {
    north.push(psiData[i].north);
    south.push(psiData[i].south);
    east.push(psiData[i].east);
    west.push(psiData[i].west);
    central.push(psiData[i].central);
    label.push(label_x[i]);
  }
  let result = [north, south, east, west, central, label];
  return result;
}
function chartPSI(label_x, psiData) {
  let a = 0;
  let viewLen = $(window).width();
  if (viewLen < 540) {
    a = 17;
  } else if (viewLen < 720) {
    a = 11;
  } else if (viewLen < 960) {
    a = 5;
  }
  let result = extractPSI(psiData, a, label_x);
  let north = result[0];
  let south = result[1];
  let east = result[2];
  let west = result[3];
  let central = result[4];
  let label = result[5];
  var ctx = $("#PSIChart");
  if (localStorage.getItem("LightDarkMode") == "true") {
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            label: "North",
            data: north,
            backgroundColor: ["rgba(255,0,0,0.2)"],
            borderColor: ["rgba(255,0,0,1)"],
            hoverBackgroundColor: ["rgba(0,0,0,1)"],
          },
          {
            label: "South",
            data: south,
            backgroundColor: ["rgba(255,255,0,0.2)"],
            borderColor: ["rgba(255,255,0,1)"],
            hoverBackgroundColor: ["rgba(0,0,0,1)"],
          },
          {
            label: "East",
            data: east,
            backgroundColor: ["rgba(0,0,255,0.2)"],
            borderColor: ["rgba(0,0,255,1)"],
            hoverBackgroundColor: ["rgba(0,0,0,1)"],
          },
          {
            label: "West",
            data: west,
            backgroundColor: ["rgba(255,0,255,0.2)"],
            borderColor: ["rgba(255,0,255,1)"],
            hoverBackgroundColor: ["rgba(0,0,0,1)"],
          },
          {
            label: "Central",
            data: central,
            backgroundColor: ["rgba(0,255,255,0.2)"],
            borderColor: ["rgba(0,255,255,1)"],
            hoverBackgroundColor: ["rgba(0,0,0,1)"],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    });
  } else {
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            label: "North",
            data: north,
            backgroundColor: ["rgba(100,0,0,0.2)"],
            borderColor: ["rgba(100,0,0,1)"],
          },
          {
            label: "South",
            data: south,
            backgroundColor: ["rgba(100,100,0,0.2)"],
            borderColor: ["rgba(100,100,0,1)"],
          },
          {
            label: "East",
            data: east,
            backgroundColor: ["rgba(0,0,100,0.2)"],
            borderColor: ["rgba(0,0,100,1)"],
          },
          {
            label: "West",
            data: west,
            backgroundColor: ["rgba(100,0,100,0.2)"],
            borderColor: ["rgba(100,0,100,1)"],
          },
          {
            label: "Central",
            data: central,
            backgroundColor: ["rgba(0,100,100,0.2)"],
            borderColor: ["rgba(0,100,100,1)"],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    });
  }
}
function chart4Day(weaFc24Hr, weaFc4d) {
  let general = weaFc24Hr.items[0].general;
  let forecast = weaFc4d.items[0].forecasts;
  let label = [];
  let tempHigh = [];
  let tempLow = [];
  let rhHigh = [];
  let rhLow = [];
  let wsHigh = [];
  let wsLow = [];
  tempHigh.push(general.temperature.high);
  tempLow.push(general.temperature.low);
  rhHigh.push(general.relative_humidity.high);
  rhLow.push(general.relative_humidity.low);
  wsHigh.push(general.wind.speed.high);
  wsLow.push(general.wind.speed.low);
  label.push(date_d);
  for (i = 0; i < forecast.length; i++) {
    label.push(forecast[i].date);
    tempHigh.push(forecast[i].temperature.high);
    tempLow.push(forecast[i].temperature.low);
    rhHigh.push(forecast[i].relative_humidity.high);
    rhLow.push(forecast[i].relative_humidity.low);
    wsHigh.push(forecast[i].wind.speed.high);
    wsLow.push(forecast[i].wind.speed.low);
  }

  var ttx = $("#4dTemp");
  var rtx = $("#4drh");
  var wtx = $("#4dws");
  if (localStorage.getItem("LightDarkMode") == "true") {
    var d4Chart = new Chart(ttx, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            label: "High(°C)",
            data: tempHigh,
            backgroundColor: ["rgba(255,0,0,0.2)"],
            borderColor: ["rgba(255,0,0,1)"],
          },
          {
            label: "Low(°C)",
            data: tempLow,
            backgroundColor: ["rgba(255,255,0,0.2)"],
            borderColor: ["rgba(255,255,0,1)"],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    });
    var r4Chart = new Chart(rtx, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            label: "High(%)",
            data: rhHigh,
            backgroundColor: ["rgba(0,0,255,0.2)"],
            borderColor: ["rgba(0,0,255,1)"],
          },
          {
            label: "Low(%)",
            data: rhLow,
            backgroundColor: ["rgba(0,255,255,0.2)"],
            borderColor: ["rgba(0,255,255,1)"],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    });
    var w4Chart = new Chart(wtx, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            label: "High(knots)",
            data: wsHigh,
            backgroundColor: ["rgba(0,255,0,0.2)"],
            borderColor: ["rgba(0,255,0,1)"],
          },
          {
            label: "Low(knots)",
            data: wsLow,
            backgroundColor: ["rgba(255,0,255,0.2)"],
            borderColor: ["rgba(255,0,255,1)"],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    });
  } else {
    var d4Chart = new Chart(ttx, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            label: "High(°C)",
            data: tempHigh,
            backgroundColor: ["rgba(150,0,0,0.2)"],
            borderColor: ["rgba(150,0,0,1)"],
          },
          {
            label: "Low(°C)",
            data: tempLow,
            backgroundColor: ["rgba(150,150,0,0.2)"],
            borderColor: ["rgba(150,150,0,1)"],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    });
    var r4Chart = new Chart(rtx, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            label: "High(%)",
            data: rhHigh,
            backgroundColor: ["rgba(0,0,150,0.2)"],
            borderColor: ["rgba(0,0,150,1)"],
          },
          {
            label: "Low(%)",
            data: rhLow,
            backgroundColor: ["rgba(0,150,150,0.2)"],
            borderColor: ["rgba(0,150,150,1)"],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    });
    var w4Chart = new Chart(wtx, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            label: "High(knots)",
            data: wsHigh,
            backgroundColor: ["rgba(0,150,0,0.2)"],
            borderColor: ["rgba(0,150,0,1)"],
          },
          {
            label: "Low(knots)",
            data: wsLow,
            backgroundColor: ["rgba(150,0,150,0.2)"],
            borderColor: ["rgba(150,0,150,1)"],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    });
  }
}

// Function to process location and output display
// Pythagoras function to calculate distance.
function closestDist(lat, long, lat1, long1) {
  let xDiff = lat - lat1;
  let yDiff = long - long1;
  let result = xDiff * xDiff + yDiff * yDiff;
  return result;
}
