exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: (str, amount) => {
    let ansewr = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1] && count < amount) {
        ansewr += str[i];
        count++;
      }
      if (str[i] !== str[i + 1]){
        ansewr += str[i];
        count = 1;
      }
    }
    return ansewr;
  },

  wordWrap: (str, cols) => {
    const arr = str.split(' ');
    let answer = arr[0];
    let count = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
      if (count + arr[i].length <= cols) {
        answer += ` ${arr[i]}`;
        count += arr[i].length;
      } else {
        answer += `\n${arr[i]}`;
        count = arr[i].length;
      }
    }
    return answer;
  },

  // eslint-disable-next-line newline-per-chained-call
  reverseString: (str) => str.split('').reverse().join('')
};
