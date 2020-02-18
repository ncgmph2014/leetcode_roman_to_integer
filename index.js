/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  ///i need a function that tests whether
  //I comes before V or X
  //X  comes before L or C
  //C comes before D or M
  //this will not work for the last case
  let firstI = 0;
  let firstV = 0;
  let firstX = 0;
  let firstL = 0;
  let firstC = 0;
  let firstD = 0;
  let firstM = 0;
  for (let i = s.length - 1; s >= 0; i--) {}
};

romanToInt("III");
romanToInt("IV");
romanToInt("IX");
romanToInt("LVIII");
romanToInt("MCMXCIV");

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
