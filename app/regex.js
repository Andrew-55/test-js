exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: (str) => (/\d/).test(str),

  containsRepeatingLetter: (str) => (/([a-z])\w*\1/i).test(str),

  endsWithVowel: (str) => (/[aeiou]$/i).test(str),

  // eslint-disable-next-line no-confusing-arrow
  captureThreeNumbers: (str) => (/\d{3}/gi).test(str) ? str.replace(/[a-z]*(\d{3})\w*/gi, '$1') : false,

  matchesPattern: (str) => (/^\d{3}\-\d{3}\-\d{4}$/).test(str),

  isUSD: (str) => (/^\$\d{1,3}(,\d{3})*?(\.\d{2})?$/).test(str)
};
