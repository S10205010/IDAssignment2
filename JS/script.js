var modeCondition = false;
$("#LightDarkMode").click(function () {
  // false means not dark mode  
  if (modeCondition == false) {
    $("header nav").removeClass("bg-light navbar-light");
    $("header nav").addClass("bg-dark navbar-dark");
    $("body").css({ color: "gray", "background-color": "black" });
    $("#LightDarkMode").css({ "background-color": "black" });
    $(".navbar-brand img").attr("src", "Images/CarpeDiemDark.png");
    modeCondition= true;
  } else {
    $("header nav").removeClass("bg-dark navbar-dark");
    $("header nav").addClass("bg-light navbar-light");
    $("body").css({ color: "black", "background-color": "white" });
    $("#LightDarkMode").css({ "background-color": "white" });
    $(".navbar-brand img").attr("src", "Images/CarpeDiemLight.png");
    modeCondition = false;
  }
});