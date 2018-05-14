function rantaPaRanta() {
  //slutvarde = startvarde * (1 + (ranta % / 100) ) * years)

  var a = prompt("Your start value?");
  var b = prompt("Expected return %");
  var c = prompt("Years to save money?");
  

  var startValue = Number(a);
  var interest = Number(b);
  var years = Number(c);
  var endValue = startValue * (1 + (interest / 100) * years);

  alert("Your end value after " + years + " years of saving money is " + endValue + " kr");
}

function rantaPaRantaExt() {

  var a = prompt("Your accounts start value");
  var b = prompt("Expected interest return per period in %");
  var c = prompt("Years to save money");
  var d = prompt("Period - usually 12 months");
  var e = prompt("Monthly savings in sek");

  var startValue = Number(a);
  var interest = Number(b);
  var years = Number(c);
  var period = Number(d);
  var monthlySaving = Number(e)
  var endValue = parseInt(startValue * Math.pow((1+(interest/period)*(1/100)), (period*years)) + ((monthlySaving * 12)/period) * 
  (Math.pow((1+((interest/period)*(1/100))), (period*years)) -1)* ( period/(interest *(1/100)) ));

  alert("You have saved " + endValue + " kr after " + years + " years of saving " + monthlySaving + 
    " kr each month with " + interest + " % interest" );

}