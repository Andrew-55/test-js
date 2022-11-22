exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: (fn, obj) => {
    obj.fn = fn;
    return obj.fn();
  },

  alterObjects: (constructor, greeting) => {
    constructor.prototype.greeting = greeting;
    return constructor;
  },

  iterate: (obj) => {
    const arr = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(`${key}: ${obj[key]}`);
      }
    }
    return arr;
  }
};
