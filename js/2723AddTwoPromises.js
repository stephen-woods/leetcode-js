// Given two promises promise1 and promise2, return a new promise. promise1 and
// promise2 will both resolve with a number. The returned promise should resolve
// with the sum of the two numbers.
//
//
// Example 1:
//
// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5
// respectively. The returned promise should resolve with a value of 2 + 5 = 7.
// The time the returned promise resolves is not judged for this problem.
//
// Example 2:
//
// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12
// respectively. The returned promise should resolve with a value of 10 + -12 = -2.
//
//
// Constraints:
//
// promise1 and promise2 are promises that resolve with a number

/**
 * Solution with await
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const [x, y] = await Promise.all([promise1, promise2]);
  return x + y;
};

/**
 * Solution without await
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromisesWithoutAwait = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then(([x, y]) => x + y);
};

/**
 * Solution without await, and without destructuring (even faster)
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromisesWithoutDestructuring = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then((x) => x[0] + x[1]);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

console.log("Example 1");
let promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
let promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));
addTwoPromises(promise1, promise2).then(console.log);

console.log("Example 2");
promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 50));
promise2 = new Promise((resolve) => setTimeout(() => resolve(-12), 30));
addTwoPromises(promise1, promise2).then(console.log);
