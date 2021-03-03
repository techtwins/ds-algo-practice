// Determine the space complexity for the following functions

// Question 1
function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}
logUpTo(5);
// Answer: O(1)

// ----------------- //

// Question 2
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
logAtMost10(8);
// Answer: O(1)
