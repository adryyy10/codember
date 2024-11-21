
/**
 * 1 - two consecutive numbers must be ordered ASC
 * 2 - It can't be a string after a number 
 */
function isPatternNumber(currentNumber, previousNumber) {
  if (typeof Number(currentNumber) != 'NaN') {
    if (previousNumber > currentNumber || typeof Number(previousNumber) == 'NaN') {
      return false;
    }
  }
  return true;
}
/**
 * string must come in alphabetical order
 */
function isPatternString(currentString, previousString) {
    return !(typeof Number(currentString) == 'NaN' && previousString > currentString);
}

function findPossibleAccessedData(data) {
  const dataSplitted = data.split("\r\n");
  let trueCount = dataSplitted.length; 
  let falseCount = 0;
  for (const attempt of dataSplitted) {
    const attemptAsArray = attempt.split('');
    for (let index = 1; index < attemptAsArray.length; index++) {
      let patternNumber = isPatternNumber(attemptAsArray[index], attemptAsArray[index-1])
      let patternString = isPatternString(attemptAsArray[index], attemptAsArray[index-1])
      if (!patternNumber || !patternString) {
        ++falseCount;
        --trueCount;
        break;
      }
    }
  }
  return [trueCount, falseCount];
}

function logAi() {
  // Read log.txt
  fetch('./log.txt')
  .then(response => response.text())
  .then((data) => {
    const responseData = this.findPossibleAccessedData(data);
    console.log(responseData);
    return responseData;
  })
}

console.log(logAi()); // 299, 198