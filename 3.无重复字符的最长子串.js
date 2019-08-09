/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let idx = 0, max = 0;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            let tmp = map.get(s[i]);
            if (tmp >= idx) {
                idx = tmp + 1;
            }
        }
        map.set(s[i], i);
        max = Math.max(max, i - idx + 1)
    }
    return max;
};

