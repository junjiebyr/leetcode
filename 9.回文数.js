/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 判断x是不是负数  直接干掉
    if (x < 0) {
        return false;
    }
    let strX = x + '';
    let idx1 = 0, idx2 = strX.length - 1;
    while(idx1 < idx2) {
        if (strX[idx1] !== strX[idx2]) return false;
        idx1++;
        idx2--;
    }
    return true;
};

