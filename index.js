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
  //for the last one, we still need 1900 so 1000 + (1000-100)
  // so M + CM
  console.log(" For " + s + " the first M is at index " + firstM);
  console.log(" the last M is at index " + lastM);
  // console.log("///////////////////");
  console.log(" the first D is at " + firstD);
  console.log(" the last D is at " + lastD);
  // console.log("//////////////////////");
  console.log(" the first C is at " + firstC);
  console.log(" the last C is at " + lastC);
  // console.log("//////////////////");
  console.log(" the first L is at " + firstL);
  console.log(" the last L is at " + lastL);
  console.log("//////");
  console.log("//////");

  //creating condition where I can add everything easily
  //if no I's come before X or V
  if (firstI > firstX && firstI > firstV) {
    //all V's are in the right place
    //No X's come before L or C

    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === "I") {
        sum++;
      }
      if (s.charAt(i) === "V") {
        sum += 5;
      }
      if (s.charAt(i) === "X") {
        sum += 10;
      }
    }
  }
  if (firstI === -1) {
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === "V") {
        sum += 5;
      }
      if (s.charAt(i) === "X") {
        sum += 10;
      }
    }
  }

  // if I does come before an X or a V
  if (firstI !== -1) {
    if (firstI < firstV) {
      if (firstV === firstI + 1) {
        sum += 4;
      }
    } else if (firstI < firstX) {
      if (firstX === firstI + 1) sum += 9;
    }
  }
  //X does not come before L or C
  //if there is no X but it is more than 10, i need to account for that too
  if (firstX === -1) {
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === "L") {
        sum += 50;
      }
      //i have to account for different cases. I may change my method entirely
      //does not work for CD
      if (s.charAt(i) === "C") {
        sum += 100;
      }
    }
  }
  //if there is an X

  if (firstX !== -1) {
    if (firstX > firstL && firstX > firstC) {
      for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "L") {
          sum += 50;
        }

        //this is wrong somehow
        // if (s.charAt(i) === "C") {
        //   sum += 100;
        // }
      }
    }
    //X  comes before L or C

    if (firstX < firstL) {
      sum += 40;
    } else if (firstX < firstC || firstX < lastC) {
      sum += 90;
    }
  }
  if (firstC !== -1) {
    console.log("this works");
    if (firstC < firstD) {
      sum += 400;
    } else if (firstC < firstM || firstC < lastM) {
      sum + 900;
    }
  }

  return sum;
};

// console.log(romanToInt("III") + " should be 3");
// console.log(romanToInt("IV") + " should be 4");
// console.log(romanToInt("IX") + " should be 9");
console.log(romanToInt("LVIII") + " should be 58");
console.log(romanToInt("MCMXCIV") + " should be 1994");
console.log(romanToInt("CD") + " should be 400");
console.log(romanToInt("XIX") + "should be 19");
// console.log(romanToInt("XV") + " should be 15");

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
