var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
  $('#weatherLocation').click(function () {
    var city = $('#location').val();
    $('#location').val(""); //clears the location input field
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function (response) {
      // console.log(response)
      var temp = Math.round(response.main.temp * 9 / 5 - 459.67);
      //response is an object delivered by the API get request, main is a property (and also an object), temp is a property of main - see console with console log(response) above
      $('.showWeather').text("The temp in " + response.name + " is " + temp + "°F");
    }).fail(function (error) {                //response.name will return what the API has found rather than just regurgitating what you type into the search field, like the example from Epicodus
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
