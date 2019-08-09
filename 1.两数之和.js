/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sumMap = {}, len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] in sumMap) {
            return [sumMap[nums[i]], i];
        } else {
            sumMap[target - nums[i]] = i;
        }
    }
    return false;
};

