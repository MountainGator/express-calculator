const findMean = (nums) => {
    return ([...nums].reduce((acc, next) => acc + next) / input.length)
}

const findMedian = (nums) => {
    nums = nums.sort((x, y) => x - y);

    const middle = Math.floor(input.length / 2)
    
    if([...nums].length % 2 === 0) {
        return ([...nums][middle] + [...input][middle - 1]) / 2;
    } else
    return [...nums][middle];
}

function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
  }

const findMode = (nums) => {
    let freqCounter = createFrequencyCounter(...nums);

  let count = 0;
  let mostFrequent;

  for (let key in freqCounter) {
    if (freqCounter[key] > count) {
      mostFrequent = key;
      count = freqCounter[key];
    }
  }

  return +mostFrequent;
}

const validateInput = (input) => {
    const isNumber = (item) => item.typeOf() === Number;
    return [...input].every(isNumber) ? true : false;
}

module.exports = {
    findMean: findMean,
    findMedian: findMedian,
    findMode: findMode,
    validateInput: validateInput
}