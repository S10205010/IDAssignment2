
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
function sortDate(task1,task2){
  if(task1.eventDate > task2.eventDate){
    return 1;
  }
  else if(task1.eventDate<task2.eventDate){
    return-1;
  }
  else{
    return 0;
  }    
}
function sortTime(task1,task2){
  if(task1.startTime > task2.startTime){
    return 1;
  }
  else if(task1.startTime<task2.startTime){
    return-1;
  }
  else{
    return 0;
  }
}
function TaskObject(eventName, locationIndex,eventDate,startTime,endTime){
  this.eventName = eventName;
  this.locationIndex = locationIndex;
  this.eventDate = eventDate;
  this.startTime = startTime;
  this.endTime = endTime;
}
function processTask(){
}
function displayTasklist(){
  $("#tasks div").remove();
  $("#tasks").append("<div class='row'></div>");
}
$(document).ajaxStop(function () {
  displayTimeOption();
  displayEventLocation(area);
  var weaFc4d = JSON.parse(sessionStorage.getItem("4DayFC"));
  let forecast = weaFc4d.items[0].forecasts;
  displayDateOption(forecast);
  
  if ($(window).width()<=576){
    $("form div").hide();
    let formHidden = true;
  $("form").click(function(){
    if (formHidden == true){
      $("form div").show();
      formHidden = false;
    }else{
      $("form div").hide()
      formHidden = true;
    }
  })
  }
  let task;
  if (JSON.parse(localStorage.getItem("task")) == null){
    task = [];
  }else{
    task = JSON.parse(localStorage.getItem("task"));
  }
  $("#button").click(function (event) {
    $(".error div").remove();
    event.preventDefault();
    let locationIndex = $("select#scheduleLocation").val();
    let eventName = $("#eventName").val();
    let eventDate = $("select#eventDate").val();
    let startTime =
      $("select#shour").val() +
      ":" +
      $("select#smin").val() +
      ":" +
      $("select#ssec").val();
    let endTime =
      $("select#ehour").val() +
      ":" +
      $("select#emin").val() +
      ":" +
      $("select#esec").val();
    if(eventName.length == 0){
      $(".error").append("<div>Error, fill in event Name</div>");
    }
    else if(endTime<=startTime){
      $(".error").append("<div>Error, Start time and End Time input error!</div>");
    }else{
      let newTask = new TaskObject(eventName, locationIndex,eventDate,startTime,endTime);
      task.push(newTask);
      task.sort(sortTime);
      task.sort(sortDate);
      localStorage.setItem("task",JSON.stringify(task))
    }    
  });
});
