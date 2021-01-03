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
    $("#locationSearch").css({"background-color":"#444","border-color":"#999","color":"#aaa"})
  } else {
    $("header nav").removeClass("bg-dark navbar-dark");
    $("header nav").addClass("bg-light navbar-light");
    $("body").css({ color: "black", "background-color": "white" });
    $("#LightDarkMode").css({ "background-color": "white" });
    $(".navbar-brand img").attr("src", "Images/CarpeDiemLight.png");
    $("#locationSearch").css({"background-color":"#eee","border-color":"black","color":"black"})
  }
}