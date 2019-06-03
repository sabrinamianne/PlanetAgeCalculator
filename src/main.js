import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var AgeCalculator = require ('./AgeCalculator.js').ageCalculatorModule;

$(document).ready(function() {
  $("#btn").click(function() {

    var fullDate = $('#mydate').val();
    var splitDate = fullDate.split("-");
    var year = parseInt(splitDate[0]);
    var month = parseInt(splitDate[1]);
    var day = parseInt(splitDate[2]);
    var userBirthday = new AgeCalculator(year, month, day);
    $("#fulldate").text(fullDate);
    $("#userAge").text(userBirthday.GetAge());
    $("#result").show();

  });
});
