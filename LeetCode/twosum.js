/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (!nums || !nums.length || target === undefined) return -1;
  var dictionary = {};
  for (var i = 0; i < nums.length; i++) {
    var otherHalf = target - nums[i];
    console.log(otherHalf);
    if (dictionary[otherHalf] !== undefined) {
      return [dictionary[otherHalf], i];
    } else {
      dictionary[nums[i]] = i;
    }
  }
  return -1;
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
