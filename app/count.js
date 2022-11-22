exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: (start, end) => {
    this.cancel = () => {
      // eslint-disable-next-line no-use-before-define
      clearInterval(timerId);
    };

    let current = start;
    const go = () => {
      // eslint-disable-next-line no-console
      console.log(current);
      if (current === end) {
        // eslint-disable-next-line no-use-before-define
        clearInterval(timerId);
      }
      current++;
    };

    go();
    const timerId = setInterval(go, 100);
    return this;
  }
};
