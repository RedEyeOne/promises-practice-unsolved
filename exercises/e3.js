/**
 * PROMISES ARE ALWAYS ASYNCHRONOUS
 * Please, make sure to read the "03-Always-asynchronous.md" file in exercises-info folder before you start!
 */

import { shouldUseFlatConfig } from "eslint/use-at-your-own-risk";

/**
 * @task
 * * Create function that follows the steps:
 * * Has a name 'getPromise'
 * * Takes an argument of any type
 * * If the argument is a whole number
 * * * Returns a promise constructor that resolves with a number value passed as the argument
 * * else returns 0;
 * * getPromise(num) function must be exported
 * Example: export const getPromise(num) => return <Your code of promise>
 */
export const getPromise = (num) => {
  // Your code goes here...
  if (Number.isInteger(num)) {
    return new Promise((resolve) => {
      resolve(num);
    });
  } else return 0;
};

/**
 * @task
 * Create a function that follows the steps:
 * * Has a name of 'updateSumValue'
 * * Takes no arguments
 * * Has a local variable with name of 'sum' and value of 2
 * * resolves the getPromise function with an argument of 120, then adds the promise value to the sum variable
 * * Synchronously adds 8 to the sum variable
 * * Returns the sum value
 * * if you have solved it successfully, the updateSumValue() function will return the value of 10;
 */
export const updateSumValue = () => {
  // Your code goes here...
  let sum = 2;
  getPromise(120).then((value) => {
    sum += value;
  });
  sum += 8;
  console.log(sum);
  return sum;
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
