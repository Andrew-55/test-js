exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: (data, dirName) => {
    const arr = [];
    let count = 0;
    const go = (obj) => {
      const resultGo = [];
      obj.files.forEach((elem) => {
        if (elem.dir === dirName || !dirName) {
          count++;
        }
        if (typeof elem === 'object' && count > 0 ) {
          resultGo.push(...go(elem));
        }
        if (typeof elem !== 'object' && count > 0) {
          resultGo.push(elem);
        }
      });
      count = 0;
      return resultGo;
    };
    arr.push(...go(data, dirName));
    return arr;
  },

  permute: (arr) => {
    const result = [];

    const backtrack = (i, arrs) => {
      if (i === arrs.length) {
        result.push(arrs.slice());
        return;
      }
      for (let j = i; j < arrs.length; j++ ) {
        [arrs[i], arrs[j]] = [arrs[j], arrs[i]];
        backtrack( i + 1, arrs);
        [arrs[i], arrs[j]] = [arrs[j], arrs[i]];
      }
    };
    backtrack(0, arr);
    return result;
  },

  fibonacci: (n) => {
    const fn = (a) => {
      if (a <= 1) {
        return a;
      }
      return fn(a - 1) + fn(a - 2);
    };
    return fn(n);
  },

  validParentheses: (n) => {
    const arr = [];

    const getStr = ( num, counterOpen, counterClose, str ) => {
      if (counterOpen + counterClose === 2 * num) {
        arr.push(str);
        return;
      }
      if (counterOpen < num) {
        getStr(num, counterOpen + 1, counterClose, str + '(');
      }
      if (counterOpen > counterClose) {
        getStr(num, counterOpen, counterClose + 1, str + ')');
      }
    };
    getStr(n, 0, 0, '');
    return arr;
  }
};
