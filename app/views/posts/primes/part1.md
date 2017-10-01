Sacks spiral is a special type of Ulam spiral, which is a graphical depiction of the set of prime numbers. Each non-negative real number n has polar coordinates where theta is the angle measured in rotations, not radians or degrees. One rotation equals 360 degrees. Numbers are plotted according to the following formulas:

r = n ^ <sup> 0.5 </sup>

&#952; = n ^ <sup> 0.5 </sup>

This is my first exercise with webworkers. An array from 1 to 5,000,000 is created and split into 8 chunks of 625,000 which are checked with the following function:

```
const isPrime = (c) => {
  for (let n = 2; n <= Math.floor(Math.sqrt(c)); n++) {
    if (c % n === 0) return false;
  }
  return true;
};
```

If a number is prime, it's returned to the react component below and rendered on the canvas. On my laptop I can check the first 5,000,000 numbers for primes and render them to a canvas in about 3.25 seconds. I also wrote an SVG implementation, but for the same number of primes it would take nearly 6 seconds to compute and render. I left the function in Prime.js if you would like to see it. Please see the visualization below.
