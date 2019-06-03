import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var AgeCalculator = require ('./AgeCalculator.js').ageCalculatorModule;

$(document).ready(function() {
  $("#btn").click(function() {

    let fullDate = $('#mydate').val();
    let ageEsperancy = $('#myesperancy').val();
    let splitDate = fullDate.split("-");
    let year = parseInt(splitDate[0]);
    let month = parseInt(splitDate[1]);
    let day = parseInt(splitDate[2]);
    let userBirthday = new AgeCalculator(year, month, day);
    $("#fulldate").text(fullDate);
    $("#userAge").text(userBirthday.GetAge());
    $("#ageMercury").text(userBirthday.GetMercureAge());
    $("#ageVenus").text(userBirthday.GetVenusAge());
    $("#ageMars").text(userBirthday.GetMarsAge());
    $("#ageJupiter").text(userBirthday.GetJupiterAge());
    $("#yearsEsperancyMercury").text(userBirthday.GetEsperancyMercury(ageEsperancy));
    $("#yearssEsperancyVenus").text(userBirthday.GetEsperancyVenus(ageEsperancy));
    $("#yearsEsperancyMars").text(userBirthday.GetEsperancyMars(ageEsperancy));
    $("#yearsEsperancyJupiter").text(userBirthday.GetEsperancyJupiter(ageEsperancy));
    $("#result").show();

  });
});
