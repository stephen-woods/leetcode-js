// Given an object or array obj, return a compact object.
//
// A compact object is the same as the original object, except with keys
// containing falsy values removed. This operation applies to the object and any
// nested objects. Arrays are considered objects where the indices are keys. A
// value is considered falsy when Boolean(value) returns false.
//
// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
//
//
//
// Example 1:
//
// Input: obj = [null, 0, false, 1]
// Output: [1]
// Explanation: All falsy values have been removed from the array.
// Example 2:
//
// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
// Example 3:
//
// Input: obj = [null, 0, 5, [0], [false, 16]]
// Output: [5, [], [16]]
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
//
//
// Constraints:
//
// obj is a valid JSON object
// 2 <= JSON.stringify(obj).length <= 106

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    let ret = new Array();
    obj.forEach((element) => {
      let candidate = compactObject(element);
      if (Boolean(candidate)) {
        ret.push(candidate);
      }
    });
    return ret;
  }

  if (typeof obj === "object") {
    let ret = {};
    Object.keys(obj).forEach((key) => {
      let value = obj[key];
      let candidate = compactObject(value);
      if (Boolean(candidate)) {
        ret[key] = candidate;
      }
    });
    return ret;
  }

  return obj;
};

function recArray(out, arr) {}

console.log("Example 1");
let obj = [null, 0, false, 1];
let result = compactObject(obj);
console.log(result);

console.log("Example 2");
obj = { a: null, b: [false, 1] };
result = compactObject(obj);
console.log(result);

console.log("Example 3");
obj = [null, 0, 5, [0], [false, 16]];
result = compactObject(obj);
console.log(result);
