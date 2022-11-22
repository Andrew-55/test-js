exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: (arr, item) => arr.indexOf(item),

  sum: (arr) => arr.reduce((a, b) => a + b),

  remove: (arr, item) => arr.filter((elem) => elem !== item),

  removeWithoutCopy: (arr, item) => {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append: (arr, item) => {
    arr.push(item);
    return arr;
  },

  truncate: (arr) => {
    arr.pop();
    return arr;
  },

  prepend: (arr, item) => {
    arr.unshift(item);
    return arr;
  },

  curtail: (arr, item) => {
    arr.shift(item);
    return arr;
  },

  concat: (arr1, arr2) => [...arr1, ...arr2],

  insert: (arr, item, index) => {
    arr.splice(index, 0, item);
    return arr;
  },

  count: (arr, item) => arr.filter((elem) => elem === item).length,

  duplicates: (arr) => {
    const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
    return Array.from(new Set(duplicates));
  },

  square: (arr) => arr.map((elem) => Math.pow(elem, 2)),

  findAllOccurrences: (arr, target) => {
    const arrResult = [];
    arr.forEach((elem, index) => {
      if (elem === target) {
        arrResult.push(index);
      }
    });
    return arrResult;
  }
};
