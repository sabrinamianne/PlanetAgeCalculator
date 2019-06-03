import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "./image.jpeg";

var AgeCalculator = require ('./AgeCalculator.js').AgeCalculatorModule;

$(document).ready(function() {
  $("#btn").click(function() {
    // const myImage = new Image();
    // myImage.src = Image;
    let fullDate = $('#mydate').val();
    let ageEsperancy = $('#myesperancy').val();
    let splitDate = fullDate.split("-");
    let year = parseInt(splitDate[0]);
    let month = parseInt(splitDate[1]);
    let day = parseInt(splitDate[2]);
    let userBirthday = new AgeCalculator(year, month, day);

    $("#image").append("<img src=" + Image + ">");
    $("#fulldate").text(fullDate);
    $("#userAge").text(userBirthday.GetAge());
    $("#ageMercury").text(userBirthday.GetMercuryAge());
    $("#ageVenus").text(userBirthday.GetVenusAge());
    $("#ageMars").text(userBirthday.GetMarsAge());
    $("#ageJupiter").text(userBirthday.GetJupiterAge());
    $("#yearsEsperancyMercury").text(userBirthday.GetEsperancyMercury(ageEsperancy));
    $("#yearsEsperancyVenus").text(userBirthday.GetEsperancyVenus(ageEsperancy));
    $("#yearsEsperancyMars").text(userBirthday.GetEsperancyMars(ageEsperancy));
    $("#yearsEsperancyJupiter").text(userBirthday.GetEsperancyJupiter(ageEsperancy));
    $("#result").show();

  });
});
