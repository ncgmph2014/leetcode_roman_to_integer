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

  //All the weird cases
  //for 4 and 9
  if (firstI !== -1) {
    if (
      firstV - firstI === 1 ||
      firstV - lastI === 1 ||
      lastV - firstI === 1 ||
      lastV - lastI === 1
    ) {
      sum += 4;
    } else if (
      firstX - firstI === 1 ||
      firstX - lastI === 1 ||
      lastX - firstI === 1 ||
      lastX - lastI === 1
    ) {
      sum += 9;
    }
  }

  //for 40 and 90
  if (firstX !== -1) {
    if (
      firstL - firstX === 1 ||
      firstL - lastX === 1 ||
      lastL - firstX === 1 ||
      lastL - lastX === 1
    ) {
      sum += 40;
    } else if (
      firstC - firstX === 1 ||
      firstC - lastX === 1 ||
      lastC - firstX === 1 ||
      lastC - lastX === 1
    ) {
      sum += 90;
    }
  }

  if (firstC !== -1) {
    if (
      firstD - firstC === 1 ||
      firstD - lastC === 1 ||
      lastD - lastC === 1 ||
      lastD - firstC === 1
    ) {
      sum += 400;
    } else if (
      firstM - firstC === 1 ||
      firstM - lastC === 1 ||
      lastM - lastC === 1 ||
      lastM - firstC === 1
    ) {
      sum += 900;
    }
  }
  //for 400 and 900

  //creating condition where I can add everything easily
  //if no I's come before X or V

  return sum;
};

// console.log(romanToInt("III") + " should be 3");
console.log(romanToInt("IV") + " should be 4");
console.log(romanToInt("IX") + " should be 9");
// console.log(romanToInt("LVIII") + " should be 58");
console.log(romanToInt("MCMXCIV") + " should be 1994");
console.log(romanToInt("CD") + " should be 400");
console.log(romanToInt("XIX") + " should be 19");
// console.log(romanToInt("XLIV") + " should be 44");
console.log(romanToInt("CDXLIV") + " should be 444");
console.log(romanToInt("XV") + " should be 15");
console.log(romanToInt("M") + " should be 1000");

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
