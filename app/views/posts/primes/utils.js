const isPrime = (c) => {
  for (let n = 2; n <= Math.floor(Math.sqrt(c)); n++) {
    if (c % n === 0) return false;
  }
  return true;
};
/*
const dict = {
  2: [2],
  3: [3],
  4: [2],
  5: [5],
  6: [2, 3],
  7: [7],
  8: [2],
};

const primeFactors = (c) => {

}; */

export { isPrime };
