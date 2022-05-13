var output = document.getElementById("output");
function getlocation() {
       if(navigator.geolocation){
           navigator.geolocation.getCurrentPosition(displayPosition);
       }
      else
       {
          alert("Your browser does not support Geolocation API.");
       }
}
function displayPosition(position){
       var output = "<br>Your current location details<br>" + "Latitude: " + position.coords.latitude + "<br>" + "Longitude: " + position.coords.longitude;

       document.getElementById("output").innerHTML = output;

       var mapurl = "https://www.google.com/maps/@" + position.coords.lalatitude + "," + position.coords.longitude + ",14z";

       document.getElementById("mapurl").innerHTML = "<a href='" + mapurl +"' target='_new'> Click here to see your location on the map.</a>";

}