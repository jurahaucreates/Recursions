hello


//factorial:

function factorial(n) {
  if( n=== 0); return 1;
  return(n) * factorial(n-1)
}

//integers in a range in an array

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}
