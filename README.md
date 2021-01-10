# IDAssignment2
## Information on the project
* Website
  * [Carpe_Diem](https://s10205010.github.io/IDAssignment2/)
* Profile
  * Name: Lim Xiang
  * Class: T03
  * Student ID: S10205010B
## Carpe Diem
Carpe Diem is a one-stop website for users to see the weather forecast for the next 2 hours, 24 hours and 4 days and to plan for their activity. Carpe Diem also organise real-time data from APIs to let users decide the activity that they should do at that moment or within the next 4 days. Using information of where the activity held with weather forecast information from APIs, it will inform the user the weather at that place in that period of time.
## Design Process
 As a student, I want to plan to study at a comfortable location in the afternoon since exams are coming. I can use Carpe Diem to see the current air temperature and if the current temperature is going to be hot, I would head to library. If the 2 hour forecast states that it might be thundery showers, I might not want to go to the library.

 As a student, I have free time during the holidays and plans to head outside for some activity. I can use Carpe Diem to check current weather at the location or look at the 2 hour weather forecast to decide if I should head to that location.

 As a parent, I want to remind my children to take an umbrella. I can use Carpe Diem to look at the 24-hour weather forecast to advise my children to bring an umbrella.

 As a construction foreman, I have to plan the work schedule for my workers to meet the dateline of the construction project. I can use Carpe Diem to look at the 4 day weather forecast to see the next 4 days' weather. With Carpe Diem schedule feature, I can schedule my timeline on the website and receive up to date weather forecast change.

 As a person that is leaving the house for various purposes, I may want to check the weather to see if I should wear a mask if the PSI index is high or bringing an umbrella is necessary or taking a full bottle of water is important. Carpe Diem has real-time PSI index reading, real-time Air temperature reading, real-time rainfall reading to help the person to make his or her decision.

Some features that is important to be added are "click to expand" feature, charts, creating schedule, see running events.
## Features
### Existing Features
#### Click to Expand Feature
This feature allows user to click and expand sections of the webpage. This conserve space and helps user to focus on their needs. By clicking to expand necessary section, user will focus on the expanded section and its content and will not be distracted by other information.
#### Charts
This feature allows user to visualize the data. From the charts they will be able to see trends and these charts will help user to make better decisions.
#### Schedule Form
This feature allows user to insert the events that they plan on the day itself or within 4 days before. It will give the appropriate forecast for that day.
#### Event List
This feature display events according to the dates and times of each event. It allows user to delete events that they canceled.
#### Light and Dark mode
Light and Dark mode allows users to choose their viewing experience. If users are in a bright environment, users can use Light mode. Whereas users who prefer to view the website in a darker environment, may prefer a darker viewing experience. User can just toggle between the modes. Light mode is default.
#### Mobile-friendly
This website is able to be used on mobile phones.

## Technologies Used
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  * HTML is used to create the structure of the website
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  * CSS is used organize content in the webpage
* [JavaScript](https://www.javascript.com/)
  * JavaScript is used to in this project to make it dynamic.
* [jQuery](https://jquery.com/)
  * jQuery is used in this project to make DOM manipulation easier.
* [Bootstrap](https://getbootstrap.com/)
  * Bootstrap is used to simplify the creation of a responsive website
* [Chart.js](https://www.chartjs.org/)
  * Chart.js helps in creating charts on the websites
* Adobe XD
* Adobe Illustrator 2021
* Validation
  * [W3C_Markup_Validation_Service](https://validator.w3.org/)
  * [W3C_CSS_Validation_Service](https://jigsaw.w3.org/css-validator/)
  * [JSHint](https://jshint.com/)
### APIs (Data.gov.sg)
* [Air_Temperature](https://data.gov.sg/dataset/realtime-weather-readings?resource_id=17494bed-23e9-4b3b-ae89-232f87987163)
* [Relative_Humidity](https://data.gov.sg/dataset/realtime-weather-readings?resource_id=17494bed-23e9-4b3b-ae89-232f87987163)
* [Wind_Speed](https://data.gov.sg/dataset/realtime-weather-readings?resource_id=16035f22-37b4-4a5c-b024-ca2381f11b48)
* [2-Hour-Weather-Forecast](https://data.gov.sg/dataset/weather-forecast?resource_id=571ef5fb-ed31-48b2-85c9-61677de42ca9)
* [24-Hour=Weather-Forecast](https://data.gov.sg/dataset/weather-forecast?resource_id=9a8bd97e-0e38-46b7-bc39-9a2cb4a53a62)
* [4-Day-Weather-Forecast](https://data.gov.sg/dataset/weather-forecast?resource_id=4df6d890-f23e-47f0-add1-fd6d580447d1)

## Automated Test
For HTML:
* [W3C_Markup_Validation_Service](https://validator.w3.org/)
For CSS:
* [W3C_CSS_Validation_Service](https://jigsaw.w3.org/css-validator/)
For best practices with JS:
* [JSHint](https://jshint.com/)
## Manual Testing
### Index.html
#### Landing Page
* See landing page with all charts hidden, and under 24 Hour Weather forecast section, there are only 3 timings. Details under timing are hidden.
* Pass
#### Click to expand hidden items
* Upon clicking, respective hidden items should appear. The 3 timings under 24 hour weather forecast will appear at the same time if any of it are click when screen width > 576px
* Pass
#### Search Feature (Screen Width>576px)
* When typing respective location, location that is within the 47 areas and matches the sequence of character typed will appear under Current Weather.
* Pass
#### Select Feature (Screen Width <= 576px)
* Select Feature should have all 47 options inside. Upon clicking the location selected will show under current weather with respective weather.
* Pass
### Schedule.html
#### Screen Width(>576px)
##### Landing Page
* Landing page should be loaded up with all input loaded. Form should not be hidden.
* Pass
#### Screen WIdth(<576px)
##### Landing Page
* Landing page, form should be hidden and can be expanded when schedule is press.
* Pass
#### Event List
* Event List should be empty if there is no local storage regarding stored events.
* Pass

* Event List should not be empty if there are events stored in local storage
* Pass

* Event details are hidden when created. Details of the weather are shown when event is click.
* Pass
#### Filling in the Form
##### Event Name
* Event name must not be empty. If event name is empty, below the form will append "error"
* Pass
##### Event Time
* Event end time must be later than event start time. If event end time is ealier than or equal to start time, below the form will append error
* Pass

### Issues faced
#### APIs Error 500/ response received but required data missing
From 2nd of January 2021 to 5th January 2021, there was internal server error relating to the above APIs used in this project. This result in error 500 or data that is requested returns with key and the values are empty objects. To not hinder the website process, I decided to hardcode the JSON file response to deal with this issue. In a case of error or a case where the data needed from the API is unable to be process, the java script will process the hardcoded JSON file instead.

## Credits
* For APIs used in the project are from data.gov.sg
* For [Technology](https://github.com/S10205010/IDAssignment2#technologies-used) used are all in Technology Section
To better use Javascript, CSS, HTML:
* [w3schools](https://www.w3schools.com/)
* [MDN Web Docs](https://developer.mozilla.org/en-US/)
* [jQuery](https://jquery.com/)
Others
* stackoverflow