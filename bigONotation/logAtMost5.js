// O(1)
function logAtMost5(n) {
  // prints numbers up to n but at minimum print up to 5 starting from 1
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(4);
