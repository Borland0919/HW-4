//getDigitsSum(number)
console.log(getDigitsSum(25624372));
function getDigitsSum(number){
   if(number < 0)
   number = -number;

   number = Math.trunc(number);
   let res = 0;
   while(number){
     res = res + number % 10;
     number = number / 10;
     number = Math.trunc(number);
   }
   return res;
}

//computeExpression(expressionStr)
console.log(computeExpression(9*25/12-(25+48)));
function computeExpression(expressionString){
  return console.log(eval(expressionString));
}

//printAnanas()
console.log(printAnanas());
function printAnanas(){
    let a = "A" + "A"/"A" + "A" + "S";
    let res = a.toLowerCase();
    return res;
}

//reverse(number)
console.log(reverse(12345));
function reverse(number) {
    number = Math.trunc(number);
    let numberReverse = '';
    if (number < 0) {
        number = - number;
        numberReverse = '-';
    }
    while (number) {
        let res = number % 10;
        numberReverse = numberReverse + res.toString();;
        number = number / 10;
        number = Math.trunc(number);
    }
    return numberReverse;
}
