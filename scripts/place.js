var tempInCelcius = 27;
var windSpeed = 5.4;

temperature = parseFloat(tempInCelcius * 9/5) + 32;

if(temperature > 50 && windSpeed > 4.8){
    var windChill =
    35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16;
}else{
    windChill = "N/A";
}

document.getElementById("wind-chill").innerHTML = `Windchill: ${Math.round(windChill)}°C`;



