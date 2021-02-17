// This is our API key. Add your own API key between the ""

var apiKey = "&appid=24875e6cac4fb38c4b7d718765abc64f";

// Here I create a variable to hold which city the user searches for

var cityArray=[]

var localStorage = localStorage.getItem("cities")
// Create a function to show info when search is entered

$("#searchBtn").click(function(){
    // preventDefault();
    city= $("#search")
    .val()
    .trim();
    console.log(city)

    if (city){
        cityArray.push(city);
        localStorage.setItem("cities", JSON.stringify(cityArray))
    }
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          // preventDefault();
      // console.log(queryURL);
      console.log(response)
      $("#city").html("<h3>" + response.name + " Weather Details</h3>");
      $("#wind").text("Wind Speed: " + response.wind.speed);
      $("#humidity").text("Humidity: " + response.main.humidity);
      $("#description").text("Description: " + response.weather[0].description);
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
        $("#tempF").text("Temperature (F) " + tempF.toFixed(2));
      $("#city2").html("<h3>" + response.name + " Weather Details</h3>");
      $("#wind2").text("Wind Speed: " + response.wind.speed);
      $("#humidity2").text("Humidity: " + response.main.humidity);
      $("#description2").text("Description: " + response.weather[0].description);
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
        $("#tempF2").text("Temperature (F) " + tempF.toFixed(2));

});
});
// We then created an AJAX call
// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//     // preventDefault();
// // console.log(queryURL);
// console.log(response)
//   // Create CODE HERE to Log the queryURL
//   // Create CODE HERE to log the resulting object
//   // Create CODE HERE to calculate the temperature (converted from Kelvin)
//   // Create CODE HERE to transfer content to HTML
//   // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
//   // Create CODE HERE to dump the temperature content into HTML



