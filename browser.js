var w = window.innerWidth 
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById("Window");
x.innerHTML += "Navigator appname is "+ navigator.appName+ " with the codename " +
			navigator.appCodeName+ ", version number " + navigator.appVersion + ". <br>";
x.innerHTML += "width: " + w + ", height: " + h + ". <br>";
if(navigator.cookieEnabled){
	x.innerHTML += "Your cookies are enabled. <br>";
}
else{
	x.innerHTML += "Your cookies are not enabled <br>";
}

document.getElementById("Location").innerHTML +=
"Page location is " + window.location.href +"<br>";

document.getElementById("Location").innerHTML +=
"Page path is " + window.location.pathname+"<br>";

var y = document.getElementById("Geolocation");
if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(showPosition);
	
}
else{
	y.innerHTML += "Geolocation unavaliable at this time. <br>";
}
function showPosition(position) {
  y.innerHTML += "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 
}
