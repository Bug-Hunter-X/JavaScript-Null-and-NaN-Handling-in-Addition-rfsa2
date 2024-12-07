function foo(a, b) {
  // Check for null or undefined values
  a = a === null || a === undefined ? 0 : a;
  b = b === null || b === undefined ? 0 : b;

  // Check for NaN
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle NaN explicitly
  }

  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(NaN, 5)); // Output: NaN
console.log(foo(5, NaN)); // Output: NaN