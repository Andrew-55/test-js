exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: (fn, arr) => fn(...arr),

  // eslint-disable-next-line prefer-reflect
  speak: (fn, obj) => fn.apply(obj),

  functionFunction: (str) => (strTwo) => `${str}, ${strTwo}`,

  makeClosures: (arr, fn) => arr.map((elem) => () => fn(elem)),

  partial: (fn, str1, str2) => fn.bind(fn, str1, str2),

  useArguments: (...args) => args.reduce((a, b) => a + b),

  callIt: (fn, ...args) => fn(...args),

  partialUsingArguments: (fn, ...args) => fn.bind(fn, ...args),

  curryIt: (fn) => {
    const curried = (args) => {
      const accumulator = (a) => curried([...args, a]);

      if (args.length >= fn.length) {
        return fn(...args);
      }
      return accumulator;
    };
    return curried([]);
  }
};
