function getRandomNumber(min,max){
  min = Math.trunc(min);
  max = Math.trunc(max);

  return min + Math.trunc(Math.random() * (max * min + 1));
}
const arHtml = [0, 1, 0, 1, 1, 0,];

function getHtmlUl(ar){
  const html = [];
  html.push('<ul class="list-class">');
  let strClass = "";
  for(let i = 0; i < ar.length ; i++){
    html.push('<li class="item class">');
    if(ar[i] == 0){
       strClass = "white";
      }
    else {
       strClass = "black";
      }
   html.push(`<div class="${strClass}"></div></li>`);
  }
  html.push('</ul>');
  let res = html.join("");
  return res;
}

let resHtml = getHtmlUl(arHtml);
console.log(resHtml);

const matrix = [[1,2][3,4][5,6]];

function transpMax(matrix){
  const matrixNew = [];
  let rows = matrix[0].length;
  let columns = matrix.length;

  for(let j = 0; j < rows; j++)
  {
    matrixNew.push([])
    for(let i = 0;i < columns;i++){
      matrixNew[j].push(matrix[i][j]);
    }
  }

  return matrixNew;
}

console.log(transpMax(matrix));