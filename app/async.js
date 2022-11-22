exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  },

  manipulateRemoteData: async function (url) {
    const response = await fetch(url);
    const data = await response.json();
    const arr = await (data.people);
    return arr.map((elem) => elem.name).sort();
  }
};
