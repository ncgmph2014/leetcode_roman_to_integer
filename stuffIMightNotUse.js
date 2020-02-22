//   let firstI = 0;
//   let firstV = 0;
//   let firstX = 0;
//   let firstL = 0;
//   let firstC = 0;
//   let firstD = 0;
//   let firstM = 0;
//   console.log(s.charAt(0));
//   //finding the first of its kind
//   //i'm not evaluating 0 because that gets confusing if it doesn't exist
//   for (let i = s.length - 1; i > 0; i--) {
//     if (s.charAt(i) === "I") {
//       firstI = i+1;
//     }
//     if (s.charAt(i) === "V") {
//       firstV = i+1;
//     }
//     if (s.charAt(i) === "X") {
//       firstX = i+1;
//     }
//     if (s.charAt(i) === "L") {
//       firstL = i+1;
//     }
//     if (s.charAt(i) === "C") {
//       firstC = i+1;
//     }
//     if (s.charAt(i) === "D") {
//       firstD = i;
//     }
//     if (s.charAt(i) === "M") {
//       firstM = i;
//     }
//   }
//   console.log(firstI + " is the placement of first I in " + s);
//   console.log(firstV + " is the first V");
//   console.log(firstX + " is the first X");
//   console.log(firstL);
//   console.log(firstC);
//   console.log(firstD);
//   console.log(firstM);
//   let lastI = 0;
//   let lastV = 0;
//   let lastX = 0;
//   let lastL = 0;
//   let lastC = 0;
//   let lastD = 0;
//   let lastM = 0;
//   for (let i = 0; i < s.length; i++) {}

//i feel like what i have now is not the most efficient

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
