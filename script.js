// This is our API key. Add your own API key between the ""

var apiKey = "&appid=24875e6cac4fb38c4b7d718765abc64f";

// Here I create a variable to hold which city the user searches for

var cityArray = []

var localStorage = localStorage.getItem("cities")

var moment = moment().format("dddd, MMMM Do YYYY")
console.log(moment);
$(".date").text(moment);

// Create a function to show info when search is entered for current day

$("#searchBtn").click(function () {
    // preventDefault();
    city = $("#search")
        .val()
        .trim();
    console.log(city)

    if (city) {
        cityArray.push(city);
        localStorage.setItem("cities", JSON.stringify(cityArray))
        // for (let i = 0; i < cityArray.length; i++) {
        //     $("#city2").append(cityArray[i])            
        // }

    }
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // preventDefault();
        // console.log(queryURL);
        console.log(response)
        $("#city").html("<h3>" + response.name + " Weather Details</h3>");
        $("#wind").text("Wind Speed: " + response.wind.speed);
        $("#humidity").text("Humidity: " + response.main.humidity);
        $("#description").text("Description: " + response.weather[0].description);
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
        $("#tempF").text("Temperature (F): " + tempF.toFixed(2));

    });

});
$("#forecastSearchBtn").click(function () {
    // preventDefault();
    city = $("#search")
        .val()
        .trim();
    console.log(city)

    // if (city) {
    //     cityArray.push(city);
    //     localStorage.setItem("cities", JSON.stringify(cityArray))
    //     // for (let i = 0; i < cityArray.length; i++) {
    //     //     $("#city2").append(cityArray[i])            
    //     // }

    // }
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // preventDefault();
        // console.log(queryURL);
        console.log(response)
        // $("#city").html("<h3>" + response.name + " Weather Details</h3>");
        // $("#wind").text("Wind Speed: " + response.wind.speed);
        // $("#humidity").text("Humidity: " + response.main.humidity);
        // $("#description").text("Description: " + response.weather[0].description);
        // var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
        // $("#tempF").text("Temperature (F): " + tempF.toFixed(2));

        // var forecast = "";
        // $("#city").html("<h3>" + response.name + " Weather Details</h3>");
        // var forecastDate = response.list[i].dt_txt
        // var forecastWind= $("#forecastWind").text("Wind Speed: " + response.list[i].wind.speed);
        // var forecastHumidity= $("#forecastHumidity").text("Humidity: " + response.list[i].main.humidity);
        // var forecastDescription= $("#forecastDescription").text("Description: " + response.list[i].weather[0].description);
        // var forecastTempF = (response.list[i].main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
        // $("#tempF").text("Temperature (F): " + tempF.toFixed(2));
        for (let i = 0; i < response.list.length; i ++) {
            // forecast += `
            response.list[i].dt_txt
            $("#forecastWind").text("Wind Speed: " + response.list[i].wind.speed);
            $("#forecastHumidity").text("Humidity: " + response.list[i].main.humidity);
            $("#forecastDescription").text("Description: " + response.list[i].weather[0].description);
            var forecastTemp = (response.list[i].main.temp - 273.15) * 1.80 + 32;
            $("#forecastTemp").text("Temperature (F): " + forecastTemp.toFixed(2));
        }
        // $("#forecast").html(forecast)
    });

    
});

