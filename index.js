/**
 * @param {string} s
 * @return {number}
 *
 */

console.log("The html and js are connected");
var romanToInt = function(s) {
  ///i need a function that tests whether
  //I comes before V or X
  //X  comes before L or C
  //C comes before D or M
  //s.search("I") does the same thing i did before (searches for the first occurance) but more elegantly and if it's not there it will give us -1 which I need
  //   console.log(s.search("I") + " for " + s);
  //   // s.lastIndexOf("letter") does that I was doing before (finds the last occurance of the letter I am looking for) but without the hassle
  //   console.log(s.lastIndexOf("I"));
  let sum = 0;
  let firstI = s.search("I"); //because I will forget what it's doing if I don't label it
  let firstV = s.search("V");
  let firstX = s.search("X");
  let firstL = s.search("L");
  let firstC = s.search("C");
  let firstD = s.search("D");
  let firstM = s.search("M");
  let lastI = s.lastIndexOf("I");
  let lastV = s.lastIndexOf("V");
  let lastX = s.lastIndexOf("X");
  let lastL = s.lastIndexOf("L");
  let lastC = s.lastIndexOf("C");
  let lastD = s.lastIndexOf("D");
  let lastM = s.lastIndexOf("M");
  //creating condition where I can add everything easily
  //All "I"s are in a convient place
  if (firstI > firstX && firstI > firstV) {
    console.log(s);
  }

  if (firstI !== -1) {
    if (firstI < firstV) {
      if (firstV === firstI + 1) {
        sum += 4;
      }
    } else if (firstI < firstX) {
      sum += 9;
    }
  }
  //   console.log(sum);
};

romanToInt("III");
romanToInt("IV");
romanToInt("IX");
romanToInt("LVIII");
romanToInt("MCMXCIV");
romanToInt("XV");

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
