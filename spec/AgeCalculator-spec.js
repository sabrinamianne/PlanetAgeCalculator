var AgeCalculator = require ('./../src/AgeCalculator.js').AgeCalculatorModule;

describe ('AgeCalculator', function(){

  it ('should check the age of the user depend to his birthday', function(){
    var userBirthday = new AgeCalculator(1988, 10, 26);
    expect(userBirthday.GetAge()).toEqual(30);
  });

  it ('should check the age of the user on Mercury', function(){
    var userBirthday = new AgeCalculator(1988, 10, 26);
    expect(userBirthday.GetMercuryAge()).toEqual(125);
  });

  it ('should check the years that the user has left on Mercury', function(){
    var userBirthday = new AgeCalculator(1988, 10, 26);
    expect(userBirthday.GetEsperancyMercury(80)).toEqual('The age esperancy on Mercury is 333 years.You have 208 left to live on Mercury! :)');
  });


});
