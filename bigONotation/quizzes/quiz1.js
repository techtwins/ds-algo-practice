// Determine the time complexity for the following functions

// Question 1
function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}
logUpTo(10);
// Answer: O(n)

// Question 2
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
logAtMost10(20);
