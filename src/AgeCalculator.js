function AgeCalculator (year, month, day)
{
  this.year = year;
  this.month = month;
  this.day = day;
}

AgeCalculator.prototype.GetAge = function() {
  let currentYear = new Date().getFullYear();
  let currentMonth= new Date().getMonth() + 1;
  let currentDay= new Date().getDate();
  let userAge= 0;
  if (currentYear > this.year)
  {
    if (currentMonth === this.month)
    {
      if (currentDay >= this.day)
      {
        userAge = (currentYear - this.year);
      }
      else
      {
        userAge = (currentYear - this.year) - 1;
      }
    }
    if ( currentMonth < this.month)
    {
      userAge = (currentYear - this.year) - 1;
    }
    if ( currentMonth > this.month)
    {
      userAge = (currentYear - this.year);
    }
    if (userAge < 1 || currentYear< this.year)
    {
   return "0 years old! Our application works for people who have at least 1 year old, sorry...";
    }
  }
  else
  {
    return "Please, enter a good birthday date!"
  }
  return userAge;
}

AgeCalculator.prototype.GetMercuryAge = function ()
{
  let userBirthday = new AgeCalculator(this.year, this.month, this.day);
  let userAge = userBirthday.GetAge();
  let userMercureAge = parseInt(userAge/0.24);
  return userMercureAge;
}

AgeCalculator.prototype.GetVenusAge = function ()
{
  let userBirthday = new AgeCalculator(this.year, this.month, this.day);
  let userAge = userBirthday.GetAge();
  let userVenusAge = parseInt(userAge/0.62);
  return userVenusAge;
}

AgeCalculator.prototype.GetMarsAge = function ()
{
  let userBirthday = new AgeCalculator(this.year, this.month, this.day);
  let userAge = userBirthday.GetAge();
  let userMarsAge = parseInt(userAge/1.88);
  return userMarsAge;
}

AgeCalculator.prototype.GetJupiterAge = function ()
{
  let userBirthday = new AgeCalculator(this.year, this.month, this.day);
  let userAge = userBirthday.GetAge();
  let userJupiterAge = parseInt(userAge/11.86);
  return userJupiterAge;
}

AgeCalculator.prototype.GetEsperancyMercury  = function (esperancyAge)
{
  let ageEsperancy = parseInt(esperancyAge/0.24);
  let yearsLeft = ageEsperancy - this.GetMercuryAge();
  if (yearsLeft===0)
  {
    return "The age esperancy on Mwercury is "+ ageEsperancy + " years."+" Unfortunately, compare to your average life expectancy you have no more time to live on Mercury because you have 0 Years left to live !  :(";
  }
  if (yearsLeft < 0)
  {
    return "The age esperancy on Mercury is "+ ageEsperancy + " years." +"You surpassed the average life expectancy, you have lived " + Math.abs(yearsLeft) + " years "+" past the life expectancy.";
  }
  else
    {
      return "The age esperancy on Mercury is "+ ageEsperancy + " years." + "You have " + yearsLeft + " left to live on Mercury! :)"
    }
  }

AgeCalculator.prototype.GetEsperancyVenus  = function (esperancyAge)
{
  let ageEsperancy = parseInt(esperancyAge/0.62);
  let yearsLeft = ageEsperancy - this.GetVenusAge();
  if (yearsLeft===0)
  {
    return "The age esperancy on Venus is "+ ageEsperancy + " years."+" Unfortunately, compare to your average life expectancy you have no more time to live on Venus because you have 0 Years left to live !  :(";
  }
  if (yearsLeft < 0)
  {
    return "The age esperancy on Venus is "+ ageEsperancy + " years." +"You surpassed the average life expectancy, you have lived " + Math.abs(yearsLeft) + " years "+" past the life expectancy.";
  }
  else
    {
      return "The age esperancy on Venus is "+ ageEsperancy + " years." + "You have " + yearsLeft + " left to live on Venus! :)"
    }
  }

AgeCalculator.prototype.GetEsperancyMars  = function (esperancyAge)
{
  let ageEsperancy = parseInt(esperancyAge/1.88);
  let yearsLeft = ageEsperancy - this.GetMarsAge();
  if (yearsLeft===0)
  {
    return "The age esperancy on Mars is "+ ageEsperancy + " years."+" Unfortunately, compare to your average life expectancy you have no more time to live on Mars because you have 0 Years left to live !  :(";
  }
  if (yearsLeft < 0)
  {
    return "The age esperancy on Mars is "+ ageEsperancy + " years." +"You surpassed the average life expectancy, you have lived " + Math.abs(yearsLeft) + " years "+" past the life expectancy.";
  }
  else
    {
      return "The age esperancy on Mars is "+ ageEsperancy + " years." + "You have " + yearsLeft + " left to live on Mars! :)"
    }
  }

AgeCalculator.prototype.GetEsperancyJupiter = function (esperancyAge)
{
  let ageEsperancy = parseInt(esperancyAge/11.86);
  let yearsLeft = ageEsperancy - this.GetJupiterAge();
  if (yearsLeft===0)
  {
    return "The age esperancy on Jupiter is "+ ageEsperancy + " years."+" Unfortunately, compare to your average life expectancy you have no more time to live on Jupiter because you have 0 Years left to live on Jupiter !  :(";
  }
  if (yearsLeft < 0)
  {
    return "The age esperancy on Jupiter is "+ ageEsperancy + " years." +"You surpassed the average life expectancy, you have lived " + Math.abs(yearsLeft) + " years "+" past the life expectancy.";
  }
  else
    {
      return "The age esperancy on Jupiter is "+ ageEsperancy + " years." + "You have " + yearsLeft + " left to live on Jupiter ! :)"
    }
  }




exports.ageCalculatorModule = AgeCalculator;
