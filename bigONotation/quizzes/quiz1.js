// Determine the time complexity for the following functions

// Question 1
function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}
logUpTo(10);
// Answer: O(n)

// ----------------- //

// Question 2
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
logAtMost10(20);
// Answer: O(1)

// ----------------- //

// Question 3
function logAtLeast10(n) {
  for (var i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
logAtLeast10(20);
// Answer: O(n)

// ----------------- //

// Question 4
function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}
console.log(onlyElementsAtEvenIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Answer: O(n)

// ----------------- //

// Question 5
function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
console.log(subtotals([1, 2, 3, 4, 5]));
// Answer: O(n^2)
