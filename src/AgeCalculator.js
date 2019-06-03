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
   return "Our application works for people who have at least 1 year old, sorry...";
    }
  }
  else
  {
    return "Please, enter a good birthday date!"
  }
  return userAge;
}


exports.ageCalculatorModule = AgeCalculator;
