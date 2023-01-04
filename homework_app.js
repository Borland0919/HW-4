//Task - 1
let str1 = "apple";
let str2 = "puppy";
function colorString(str1,str2){
  const arStr1 = Array.from(str1);
  const arStr2 = Array.from(str2);
  let arResult = [];
  
  if(arStr1.length === arStr2.length){
    arResult = arStr2.map(function(number,index){
      const arMoment = arStr1.filter(function(number){
        if(number == arStr2[index])
        return number;
      })
        let colorElement = "";
        if(number === arStr1[index]){
          colorElement = "green";
        }
        else if(arMoment[0] == arStr2[index]){
          colorElement = "yellow";
        }
        else
           colorElement = "red";

    return colorElement; 
  }) 
  }
  else
  console.log(-1);

  return arResult;
}
console.log(colorString("pappy","apple"));

//Task - 1 (Option B)

let str3 = "apple";
let str4 = "puppy";
function colorString1(str3,str4){
  const arStr3 = Array.from(str3);
  const arStr4 = Array.from(str4);
  let arResult = [];
  
  if(arStr3.length === arStr4.length){
    arResult = arStr4.map(function(number,index){
      if(arStr3.indexOf(number) === -1){
        return "red";
      }
      else if (arStr3.indexOf(number) != index && arStr3.indexOf(number) > 0){
        return "yellow";
      }
      if(number === arStr3[index]){
        return "green";
      }
    })
    return arResult;
  }
}

console.log(colorString1("pippy","apple"));

//Task - 2
function getNumbersWithDigitsAmount(digitsAmount,array){
   let numbersOfDigits = digitsAmount;
   const res = array.filter(function (number){
       if (number < 0) {
         number = -number;
        }
       number = String(number);
       if(numbersOfDigits === number.length){
        return Number(number);
       }
    })
    return res;
}
console.log(getNumbersWithDigitsAmount(2,[123,34,1,5678,12,98,95,-54,-142]));