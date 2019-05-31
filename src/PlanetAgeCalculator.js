function AgeCalculator (year)
{
  this.year = year;

}

AgeCalculator.prototype.getAge = function() {
  let currentDate = new Date ().getFullYear();
  let ageUser = currentDate - this.year;
  return ageUser;
}
