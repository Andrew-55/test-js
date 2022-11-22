exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: (num, bit) => Number(num.toString(2).at(-bit)),

  base10: (str) => parseInt(str, 2),

  convertToBinary: (num) => {
    let answer = num.toString(2);
    while (answer.length < 8){
      answer = '0' + answer;
    }
    return answer;
  },

  multiply: (a, b) => {
    const degree = a.toString().length > b.toString().length ? a.toString().length : b.toString().length;
    const power = Math.pow(10, degree);
    return a * power * (b * power) / Math.pow(power, 2);
  }
};
