/**
Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.

 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */



var merge = function(nums1, m, nums2, n) {
  var endIndex = m + n - 1;
  var curr1 = m -1;
  var curr2 = n - 1;
  for (var i = 0; i < m + n; i++) {
    if (curr2 < 0) return;
    if (nums1[curr1] > nums2[curr2]) {
      nums1[endIndex] = nums1[curr1];
      curr1--;
    } else {
      nums1[endIndex] = nums2[curr2];
      curr2--;
    }
    endIndex--;
  }
};


var a = [1, 5, 13, 14];
var b = [2, 3, 4, 19];
merge(a, 4, b, 4);