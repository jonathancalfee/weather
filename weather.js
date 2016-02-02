$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<h1> Today's Weather Is: </h1>" + "The temperature is " +data.currently.temperature +" degrees";
    markup=markup + " and the current weather is " +data.currently.summary + ".";
    markup=markup + "<h1> Upcoming Weather Is: </h1>" + "Tomorrow the weather will be " +data.daily.data[1].summary;
    markup=markup + "The day after will be " +data.daily.data[2].summary;
    markup=markup + " 3 days from today the weather will be " +data.daily.data[3].summary;
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
