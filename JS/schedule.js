
var date = new Date();
var month = ("0" + (date.getMonth() + 1)).slice(-2);
var day = ("0" + date.getDate()).slice(-2);
var area = area_JSON.area_metadata;
function displayEventLocation(area) {
  for (i = 0; i < area.length; i++) {
    let option = `<option value="${i}">` + area[i].name + "</option>";
    $("#scheduleLocation").append(option);
  }
}
function displayDateOption(forecast) {
  let date_display = date.getFullYear() + "-" + month + "-" + day;
  let option = `<option value="${date_display}">` + date_display + "</option>";
  $("#eventDate").append(option);
  for (i = 0; i < forecast.length; i++) {
    option =
      `<option value="${forecast[i].timestamp.slice(0, 10)}">` +
      forecast[i].timestamp.slice(0, 10) +
      "</option>";
    $("#eventDate").append(option);
  }
}
function displayTimeOption() {
  for (i = 0; i < 24; i++) {
    i = ("0" + i).slice(-2);
    let option = `<option value="${i}">` + i + "</option>";
    $("#shour, #ehour").append(option);
  }
  for (i = 0; i < 60; i++) {
    i = ("0" + i).slice(-2);
    let option = `<option value="${i}">` + i + "</option>";
    $("#smin, #emin, #ssec, #esec").append(option);
  }
}
function processTask(){
}
function displayTasklist(){
  $("#tasks").append("<div class='row'></div>");

}
$(document).ready(function () {
  displayTimeOption();
  displayEventLocation(area);
  var weaFc4d = JSON.parse(sessionStorage.getItem("4DayFC"));
  let forecast = weaFc4d.items[0].forecasts;
  displayDateOption(forecast);

  $("#button").click(function (event) {
    event.preventDefault();
    let locationIndex = $("select#scheduleLocation").val();
    let eventName = $("#eventName").val();
    let eventDate = $("select#eventDate").val();
    let startTime =
      $("select#shour").val() +
      "/" +
      $("select#smin").val() +
      "/" +
      $("select#ssec").val();
    let endTime =
      $("select#ehour").val() +
      "/" +
      $("select#emin").val() +
      "/" +
      $("select#esec").val();
  });
});
