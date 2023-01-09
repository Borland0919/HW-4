const ar1 = [20,-10,333,1000,552,7,-7];

// Task-1

function evenOddSortArray(ar1){
  const res = ar1.sort(function(e1,e2){
    if(e1 < 0){
      e1=-e1;
    }
    return e1%2 - e2%2;
  })
  return res;
}

console.log(`Fucntion Even Odd Sort Array = ${evenOddSortArray(ar1)}`);

//Task 2

function oddEvenSort(ar1){
  const res = ar1.sort(function(e1,e2){
    if(e1<0){
      e1 = -e1;
    }
    return e2%2 - e1%2;
  })
  return res;
}

console.log(`Function Odd Even Sort Array = ${oddEvenSort(ar1)}`);

//Task 3

function evenAscOddDesc(ar1){
  const res = ar1.sort(function(e1,e2){
    let res1;
    if (e1 % 2 == 0 && e2 % 2 != 0) {         //const ar1 = [20,-10,333,1000,552,7,-7];
      res1 = -1;                              
    } else if (e1 % 2 == 0 && e2 % 2 == 0) {  //const ar1 = [20,-10,1000,552,333,7,-7];
     res1 = e1 - e2;
    } else if (e1 % 2 !=0 && e2 % 2 !=0) {   
     res1 = e2 - e1;
    }
    return res1;
  })
  return res;
}

console.log(`Even Asc Odd Desc = ${evenAscOddDesc(ar1)}`);

// Task-4 

function getMin(ar1){
  const res = ar1.reduce(function(e1,e2){
    if(e1 < e2){
      return e1;
    }
    return e2;
  })
  return res;
}

console.log(`Min = ${getMin(ar1)}`)

//Task-5 

function getMax(ar1){
  const res = ar1.reduce(function(e1,e2){
    if(e1 > e2){
      return e1;
    }
    return e2;
  })
  return res;
}

console.log(`Max in array = ${getMax(ar1)}`);

// Task-6

function getAverage(ar1){
  const total = ar1.reduce(function(e1,cur){
    return e1 + cur;
  })
  return total / ar1.length;
}

console.log(`Average value of elements in array ${ar1} = ${getAverage(ar1)}`);

//Task-7

function getMinMaxAverage(ar1){
  let min = ar1[0];
  let max = ar1[0];
  let sum = 0;
  return ar1.reduce(function(res,cur,index){  
    sum += cur;
    min = min > cur ? cur : min;
    max = max < cur ? cur : max;
    if(index === ar1.length-1){
      res.push(min,max,sum/ar1.length)
    }
    return res;
  },[]);
}

console.log(`Get Min Max Average in array = ${getMinMaxAverage(ar1)}`);
// Сортировка будет менять элементы местами только в том случае,если оно будет выдавать положительный результат