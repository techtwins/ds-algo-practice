// O(n)
function logAtLeast5(n) {
  // prints numbers up to n but at minimum print up to 5 starting from 1
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(10);
