exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: (num) => {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
    if (typeof num !== 'number') {
      return false;
    }
    if (!(num % 3) && !(num % 5)) {
      return 'fizzbuzz';
    }
    if (!(num % 3)) {
      return 'fizz';
    }
    if (!(num % 5)) {
      return 'buzz';
    }
    return num;
  }
};
