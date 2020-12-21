// This is our API key. Add your own API key between the ""

var apiKey = "&appid=24875e6cac4fb38c4b7d718765abc64f";

// Here I create a variable to hold which city the user searches for

// var city= ""

// Here we are building the URL we need to query the database
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + APIKey;

// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey


// Create a function to show info when search is entered

$("#searchBtn").click(function(){
    // preventDefault();
    city= $("#search")
    .val()
    .trim();
    console.log(city)
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          // preventDefault();
      // console.log(queryURL);
      console.log(response)
    // console.log(city)
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



