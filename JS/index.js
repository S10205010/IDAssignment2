$(document).ready(function(){
    fetch("http://api.ipapi.com/check?access_key=fcc0cefb939e2977b8aa4f6143767571&format=1")
    .then(response => response.json())
    .then(function(data){
        data = JSON.stringify(data);
        let obj = JSON.parse(data);
        let lat = obj.latitude;
        let long = obj.longtitude;
        
    })
    .catch(function(error){
        console.log(error);
    })
})