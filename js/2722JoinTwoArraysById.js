// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects
// in each of the two inputs arrays will contain an id field that has an integer value.
//
// joinedArray is an array formed by merging arr1 and arr2 based on their id key.
// The length of joinedArray should be the length of unique values of id. The
// returned array should be sorted in ascending order based on the id key.
//
// If a given id exists in one array but not the other, the single object with
// that id should be included in the result array without modification.
//
// If two objects share an id, their properties should be merged into a single object:
//
// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
//
//
// Example 1:
//
// Input:
// arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ],
// arr2 = [
//     {"id": 3, "x": 5}
// ]
// Output:
// [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9},
//     {"id": 3, "x": 5}
// ]
// Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.
// Example 2:
//
// Input:
// arr1 = [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6}
// ],
// arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// Output:
// [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// Explanation: The two objects with id=1 and id=3 are included in the result
// array without modifiction. The two objects with id=2 are merged together. The
// keys from arr2 override the values in arr1.
// Example 3:
//
// Input:
// arr1 = [
//     {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
// ]
// arr2 = [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3]}
// ]
// Output: [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
// ]
// Explanation: The two objects with id=1 are merged together. For the keys "b"
// and "v" the values from arr2 are used. Since the key "y" only exists in arr1,
// that value is taken form arr1.
//
//
// Constraints:
//
// arr1 and arr2 are valid JSON arrays
// Each object in arr1 and arr2 has a unique integer id key
// 2 <= JSON.stringify(arr1).length <= 106
// 2 <= JSON.stringify(arr2).length <= 106

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  // Sort both arrays based on their ids.
  arr1.sort((a, b) => a["id"] - b["id"]);
  arr2.sort((a, b) => a["id"] - b["id"]);

  let a = 0;
  let b = 0;
  let ret = new Array();
  let done = false;
  while (!done) {
    let elementA = arr1[a];
    let elementB = arr2[b];
    let id1 = elementA.id;
    let id2 = elementB.id;
    if (id1 === id2) {
      let x = Object.assign({}, elementA, elementB);
      ret.push(x);
      a++;
      b++;
    } else if (id1 < id2) {
      ret.push(elementA);
      a++;
    } else {
      ret.push(elementB);
      b++;
    }

    if (a == arr1.length) {
      ret.push(...arr2.slice(b));
      break;
    }

    if (b == arr2.length) {
      ret.push(...arr1.slice(a));
      break;
    }
  }
  return ret;
};

console.log("Example 1");
let arr1 = [
  { id: 1, x: 1 },
  { id: 2, x: 9 },
];
let arr2 = [{ id: 3, x: 5 }];
let result = join(arr1, arr2);
console.log(result);

console.log("Example 2");
arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];
result = join(arr1, arr2);
console.log(result);

console.log("Example 3");
arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
result = join(arr1, arr2);
console.log(result);
