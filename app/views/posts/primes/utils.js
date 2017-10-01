const isPrime = (c) => {
  for (let n = 2; n <= Math.floor(Math.sqrt(c)); n++) {
    if (c % n === 0) return false;
  }
  return true;
};

export default isPrime;
