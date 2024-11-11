// Implement the RandomizedSet class:
//
// - RandomizedSet() Initializes the RandomizedSet object.
// - bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// - bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// - int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
//
// You must implement the functions of the class such that each function works in average O(1) time complexity.
//
//
//
// Example 1:
//
// Input
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output
// [null, true, false, true, 2, true, false, 2]
//
// Explanation
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); // 2 was already in the set, so return false.
// randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
//
//
// Constraints:
//
// -231 <= val <= 231 - 1
// At most 2 * 105 calls will be made to insert, remove, and getRandom.
// There will be at least one element in the data structure when getRandom is called.

var RandomizedSet = function () {
  this.storage = [];
  this.index = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.index.has(val)) return false;

  this.index.set(val, this.storage.length);
  this.storage.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  // The tricky part here is that we want to avoid having to update the entire
  // index when we remove an item from storage. The getRandom function requires
  // that the storage array contain only items in the set, so we can't just
  // remove the value from the index and leave the deleted value in the storage
  // array.
  //
  // To avoid this, if there is more than one item in storage, we can move the
  // last item in the storage array into the vacated slot and update the index
  // mapping for it accordingly.

  if (this.storage.length === 0) return false;

  let i = this.index.get(val);
  if (i === undefined) return false;

  this.index.delete(val);
  const last = this.storage.pop();
  if (val !== last) {
    this.storage[i] = last;
  }
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const r = Math.floor(Math.random() * this.storage.length);
  return this.storage[r];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1)); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log(randomizedSet.remove(2)); // Returns false as 2 does not exist in the set.
console.log(randomizedSet.insert(2)); // Inserts 2 to the set, returns true. Set now contains [1,2].
console.log(randomizedSet.getRandom()); // getRandom() should return either 1 or 2 randomly.
console.log(randomizedSet.remove(1)); // Removes 1 from the set, returns true. Set now contains [2].
console.log(randomizedSet.insert(2)); // 2 was already in the set, so return false.
console.log(randomizedSet.getRandom()); // Since 2 is the only number in the set, getRandom() will always return 2.
