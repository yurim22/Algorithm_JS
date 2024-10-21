/**
 * https://leetcode.com/problems/increasing-triplet-subsequence/description/?envType=study-plan-v2&envId=leetcode-75
 *
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k].
 * If no such indices exists, return false.
 *
 * 
 * Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let prev1 = Infinity;
  let prev2 = Infinity;

  let answer = false;

  for (let i = 0; i < nums.length; i++) {
    if (prev2 < nums[i] && prev2 > prev1) {
      answer = true;
      break;
    }

    if (prev1 < nums[i]) prev2 = nums[i];
    else prev1 = nums[i];
  }

  return answer;
};
