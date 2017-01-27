'use strict'
//This first function takes in an array of numbers
//and returns an array of only odds

let f1Array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

(function produceOdds(array){
  let odds = f1Array.toString().match(/\d{0,}[13579]\,|\d{0,}[13579]$/g);
  odds = odds.toString().split(',,')
  return odds
}(f1Array));


//The next function takes in a number n and builds
//pascal's triangle with n rows

let n = 7;
//I realize this will not be performant at large number n
//but was asked to not look anything up and did not remember
//equation for binomial coefficient
(function createPascalsTriangle(rows){
  let triangle = [[1]];
  for(let n = 0; n < rows-1; n++){
    let row = [];
    for(let i = 0; i < triangle[n].length+1; i++){
      if(!triangle[n][i-1] || !triangle[n][i]){
        row.push(1);
      }
      else{
        row.push(triangle[n][i-1]+ triangle[n][i])
      }
    }
    triangle.push(row);
  }
  return triangle
}(n));
