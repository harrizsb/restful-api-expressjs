const reverse = (character) => {
  return (
    [...character]
      .reduce((acc, val) => {
        return [val, ...acc];
      }, [])
      .join("") || ""
  );
};

const fibonacci = (n) => {
  if (n > 0) {
    const res = [...Array(n + 1)].reduce(
      (acc, _, index) => {
        if (index >= 2) {
          return [...acc, acc[index - 2] + acc[index - 1]];
        } else {
          return acc;
        }
      },
      [0, 1]
    );

    return res.join(" ");
  } else {
    return false;
  }
};

const combination = (n, r) => {
  const factorial = (i) => {
    const [, ...tmp] = [...Array(i + 1).keys()];
    return tmp.reduce((acc, val) => {
      return (acc *= val);
    }, 1);
  };

  if (n > r) {
    const res = factorial(n) / (factorial(r) * factorial(n - r));
    return res;
  } else {
    return false;
  }
};

module.exports = {
  reverse,
  fibonacci,
  combination,
};
