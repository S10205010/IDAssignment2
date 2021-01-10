
var date = new Date();
var month = ("0" + (date.getMonth() + 1)).slice(-2);
var day = ("0" + date.getDate()).slice(-2);
var area = area_JSON.area_metadata;
//Display Event Location add Location options into the select portion
//in the form section
function displayEventLocation(area) {
  for (i = 0; i < area.length; i++) {
    let option = `<option value="${i}">` + area[i].name + "</option>";
    $("#scheduleLocation").append(option);
  }
}
//Display Date function add options that are today date and 4 days from today
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
//Display Time Option add options to the time
// for hour section domain is 0-23
// hour and mins section domain is 0-59
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
//This portion is to sort the objects within the array by
//the value of the key date
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
//This portion is to sort the objects within the array by
//the value of the key time
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
// This function create an object for event list
function TaskObject(eventName, locationIndex,eventDate,startTime,endTime){
  this.eventName = eventName;
  this.locationIndex = locationIndex;
  this.eventDate = eventDate;
  this.startTime = startTime;
  this.endTime = endTime;
}
//Display task list gets information from each task
// if task date is today, it will extract information from
//weafc24hr which is 24hour weather forecast api information
// if the task date is 24hr< task Date< 4 days
// It will take information from forecast which is 
//information from 4 day weather forcast api
function displayTasklist(task,weaFc24Hr,forecast){
  $("#tasks div").remove();
  for(i = 0; i<task.length; i ++){
    let key = "task"+i;
    let keyEvent = key+"event";
    let keyForecast = key+"FC";
    let currentTask = task[i];
    let todayDate = date.getFullYear()+"-"+month+"-"+day;
    //fill in tasksheet data
    $("#tasks").append(`<div id="${key}"><h3>Event: ${currentTask.eventName} <span>(${currentTask.eventDate})</span></h3></div>`)
    $("#"+key).append(`<div class = 'row'id ="${keyEvent}"></div>`)
    $('#'+keyEvent).append(`
    <div class = 'col-sm'>Location: ${area[currentTask.locationIndex].name}</div>
    <div class = 'col-sm'>Time: (${currentTask.startTime}-${currentTask.endTime})</div>`)
    
    let predictedForecast;
    let temperature;
    let relativeHumidity;
    let windSpeed;
    $("#"+key).append(`<div class = 'row'id ="${keyForecast}"></div>`)
    if(currentTask.eventDate> todayDate){
      for(i=0;i<forecast.length;i++){
        let currentForecast = forecast[i];
        if(forecast[i].date==currentTask.eventDate){
          
          temperature = currentForecast.temperature.low+"°C" +" - "+currentForecast.temperature.high+"°C";
          relativeHumidity = currentForecast.relative_humidity.low+"%"+" - "+currentForecast.relative_humidity.high+"%";
          windSpeed = currentForecast.wind.speed.low+" knots"+" - "+currentForecast.wind.speed.high+" knots";
          predictedForecast = currentForecast.forecast;
        }
      }
    }else if(currentTask.eventDate=todayDate){
      currentForecast = weaFc24Hr.items[0].general;
      temperature = currentForecast.temperature.low+"°C" +" - "+currentForecast.temperature.high+"°C";
      relativeHumidity = currentForecast.relative_humidity.low+"%"+" - "+currentForecast.relative_humidity.high+"%";
      windSpeed = currentForecast.wind.speed.low+" knots"+" - "+currentForecast.wind.speed.high+" knots";
      predictedForecast = currentForecast.forecast;      
    }
    $(`#${keyForecast}`).append(`
  <div class ="col-sm">Forecast : <div>${predictedForecast}</div></div>
  <div class ="col-sm">Temperature: <div>${temperature}</div></div>
  <div class ="col-sm">Relative Humidity: <div>${relativeHumidity}</div></div>
  <div class ="col-sm">Wind Speed : <div>${windSpeed}</div></div>`
  );
  //Added an X so that user can clear event if completed
  $(`#${key}`).append(`<button id="${key+"x"}">X</button>`);
  $(`#${key} div, #${key+"x"}`).hide();
  sessionStorage.setItem(key,JSON.stringify("true"));
  $(`#${key}`).click(function(){
    if(JSON.parse(sessionStorage.getItem(key))=="true"){
      $(`#${key} div, #${key+"x"}`).show();
      sessionStorage.setItem(key,JSON.stringify("false"));
    }else{
      $(`#${key} div, #${key+"x"}`).hide();
      sessionStorage.setItem(key,JSON.stringify("true"));
    }
  })
  //CSS styling for the newly created elements
  $(`#${key+"x"}`).css({"color":"red","border-radius":"25px","border-style":"none","background-color":"white"});
  $(`#${keyForecast}`).css({"margin":"10px auto"});
  $(`#${keyForecast} .col-sm`).css({"margin":"10px auto","border=width":"2px","border-style":"ridge",})
  $(`#${key}`).css({"font-size":"large","border=width":"2px","border-style":"ridge",
  "margin":"10px auto","border-radius":"15px", "box-shadow":"3px 6px grey"})
  $(`#${key+"x"}`).click(function(){
    let index = key.slice(4,key.length);
    task.splice(index,1);
    localStorage.setItem("task",JSON.stringify(task));
    displayTasklist(task,weaFc24Hr,forecast);
  })
  }
}
$(document).ajaxStop(function () {
  //Load information into form
  displayTimeOption();
  displayEventLocation(area);
  var weaFc4d = JSON.parse(sessionStorage.getItem("4DayFC"));
  let forecast = weaFc4d.items[0].forecasts;
  displayDateOption(forecast);
  var weaFc24Hr = JSON.parse(sessionStorage.getItem("24HourFC"));
  //Enable toggle to expand for the form
  if ($(window).width()<=576){
    $("form div").hide();
    let formHidden = true;
  $("form h2").click(function(){
    if (formHidden == true){
      $("form div").show();
      formHidden = false;
    }else{
      $("form div").hide()
      formHidden = true;
    }
  })
  }
  //This portion extract data from local storage
  let task;
  if (JSON.parse(localStorage.getItem("task")) == null){
    task = [];
  }else{
    task = JSON.parse(localStorage.getItem("task"));
    let todayDate = date.getFullYear()+"-"+month+"-"+day;
    for(i=0;i<task.length;i++){
      let currentTask = task[i];
      if(currentTask.eventDate < todayDate){
        task.splice(i,1)
        localStorage.setItem("task",JSON.stringify(task));
      }else{
        continue;
      }
    }
  }
  //Once task array is loaded it will display all the events
  //saved by user
  displayTasklist(task,weaFc24Hr,forecast)
  $("#button").click(function (event) {
    //Gather value input from form
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
      //create object
      let newTask = new TaskObject(eventName, locationIndex,eventDate,startTime,endTime);
      task.push(newTask);
      //sort the object
      task.sort(sortTime);
      task.sort(sortDate);
      //add into local storage
      localStorage.setItem("task",JSON.stringify(task));
      //display
      displayTasklist(task,weaFc24Hr,forecast)
    }    
  });
});
