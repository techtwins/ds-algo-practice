/* write a function that calculates the sum of all numbers 
  from 1 up to and inlcuding some number (n)
*/
const { performance } = require("perf_hooks");

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Elapsed time: ${(t2 - t1) / 1000} seconds.`);
