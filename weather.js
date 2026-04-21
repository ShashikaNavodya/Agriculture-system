// Simple offline weather database (no API needed)
const weatherDB = {
  colombo: { temp: 31, condition: "Sunny" },
  kandy: { temp: 26, condition: "Cloudy" },
  galle: { temp: 30, condition: "Humid" },
  jaffna: { temp: 33, condition: "Hot" },
  default: { temp: 28, condition: "Partly Cloudy" }
};

function getWeather() {
  let city = document.getElementById("city").value.toLowerCase().trim();

  let data = weatherDB[city] || weatherDB.default;

  document.getElementById("weatherResult").innerHTML =
    " City: " + city.toUpperCase() + "<br>" +
    " Temperature: " + data.temp + "°C<br>" +
    " Condition: " + data.condition;
}