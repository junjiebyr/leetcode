/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let strx = x + '', flag = 1;
    if (strx[0] === '-') {
        strx = strx.slice(1);
        flag = -1;
    }
    let reverseStr = '';
    for(let i = strx.length - 1; i >=0; i--) {
        reverseStr += strx[i];
    }
    if (reverseStr[0] === '0' && reverseStr.length > 1) {
        reverseStr = reverseStr.slice(1);
    }
    res = parseInt(reverseStr);
    if(reverseStr > Math.pow(2, 31) - 1) {
        return 0;
    }
    return res*flag;
};

