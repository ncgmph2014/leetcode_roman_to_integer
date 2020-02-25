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
  let includes9 = null;
  let includes40 = null;
  let includes90 = null;
  let includes400 = null;
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
      includes9 = "yes";
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
      includes40 = "yes";
    } else if (
      firstC - firstX === 1 ||
      firstC - lastX === 1 ||
      lastC - firstX === 1 ||
      lastC - lastX === 1
    ) {
      sum += 90;
    }
  }

  //for 400 and 900
  if (firstC !== -1) {
    if (
      firstD - firstC === 1 ||
      firstD - lastC === 1 ||
      lastD - lastC === 1 ||
      lastD - firstC === 1
    ) {
      sum += 400;
      includes400 = true;
    } else if (
      firstM - firstC === 1 ||
      firstM - lastC === 1 ||
      lastM - lastC === 1 ||
      lastM - firstC === 1
    ) {
      sum += 900;
    }
  }
  // console.log(
  //   "for " +
  //     s +
  //     ", the first m is at " +
  //     firstM +
  //     ", the first d is at " +
  //     firstD +
  //     ", the first c is at " +
  //     firstC +
  //     ", the first L is at " +
  //     firstL +
  //     ", the first X is at " +
  //     firstX +
  //     ", the first V is at " +
  //     firstV +
  //     ", the first is I at " +
  //     firstI +
  //     ", the last m is at " +
  //     lastM +
  //     ", the last d is at " +
  //     lastD +
  //     ", the last C is at " +
  //     lastC +
  //     ", the last L is at " +
  //     lastL +
  //     ", the last X is at " +
  //     lastX +
  //     ", the last V is at " +
  //     lastV +
  //     ", and the last is I at " +
  //     lastI
  // );

  //to add 1
  //if I is after X or V
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "I" && i > lastX && i > lastV) {
      sum++;
    }
    //to add 5 (V) not 4 (IV)
    //two cases
    if (firstV < firstI || firstI === -1) {
      if (s.charAt(i) === "V") {
        sum += 5;
      }
    }
  }
  //to add 10 X and not 9 IX
  if (firstI === -1) {
    for (let i = lastC; i < s.length; i++) {
      //works for 15 and 444 but not 19
      if (s.charAt(i) === "X" && includes40 === null) {
        sum += 10;
      }
    }
  } else if (firstI !== -1) {
    for (let i = lastC; i < firstI; i++) {
      //works for 15 and 444 but not 19
      if (s.charAt(i) === "X" && includes40 === null) {
        sum += 10;
      }
    }
  }

  //to add 50(L) and not 40 XL;
  //works for 58
  //may want to add examples to see if it works
  //158
  //add 80
  if (firstX === -1) {
    for (let i = lastC; i < s.length; i++) {
      //works for 15 and 444 but not 19
      if (s.charAt(i) === "L" && includes40 === null) {
        sum += 50;
      }
    }
  } else if (firstX !== -1) {
    for (let i = lastC; i < firstX; i++) {
      //works for 15 and 444 but not 19
      if (s.charAt(i) === "L" && includes40 === null) {
        sum += 50;
      }
    }
  }

  //to add 100 C not 90 XC
  // if (firstX === -1) {
  //   for (let i = lastM; i < s.length; i++) {
  //     //works for 15 and 444 but not 19
  //     if (s.charAt(i) === "C" && includes400 === null) {
  //       sum += 100;
  //     }
  //   }
  // } else if (firstX !== -1) {
  //   for (let i = lastM; i < firstI; i++) {
  //     //works for 15 and 444 but not 19
  //     if (s.charAt(i) === "C" && includes400 === null) {
  //       sum += 100;
  //     }
  //   }
  // }
  // console.log(includes40);
  // console.log(firstX + " this is the first X");
  // console.log(firstV + " this is first V");
  // console.log(firstI + " is the first I");

  //to add 100
  //to add 500
  //to add 1000
  //creating condition where I can add everything easily
  //if no I's come before X or V

  return sum;
};

// console.log(romanToInt("III") + " should be 3");
// console.log(romanToInt("IV") + " should be 4");
// console.log(romanToInt("IX") + " should be 9");
console.log(romanToInt("LVIII") + " should be 58");
console.log(romanToInt("MCMXCIV") + " should be 1994");
console.log(romanToInt("CD") + " should be 400");
console.log(romanToInt("XIX") + " should be 19");
console.log(romanToInt("XLIV") + " should be 44");
console.log(romanToInt("CDXLIV") + " should be 444");
console.log(romanToInt("CLVII") + " should be 157");
console.log(romanToInt("LXX") + " should be 70");
// console.log(romanToInt("XV") + " should be 15");
// console.log(romanToInt("M") + " should be 1000");
// console.log(romanToInt("XVII") + " should be 17");

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
