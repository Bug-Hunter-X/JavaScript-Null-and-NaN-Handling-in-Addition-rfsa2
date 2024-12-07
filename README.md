# JavaScript Null and NaN Handling in Addition

This repository demonstrates a common error in JavaScript related to handling null values and NaN (Not a Number) when performing addition. The provided code showcases how these edge cases can lead to unexpected results. The solution proposes a strategy to address these issues and ensure robustness.

## Bug Description

The original JavaScript code attempts to add two numbers. However, if either input is null or NaN, it produces unexpected results which in this case is 0 for null and NaN for NaN.

## Solution

The solution includes improved error handling to explicitly check for null or NaN values, providing more predictable outputs and preventing potential errors in the program.