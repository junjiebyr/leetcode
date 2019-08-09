/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ''
    } else if (strs.length === 1){
        return strs[0];
    }
    let tempStr = strs[0], prefix = 0;
    while(true) {
        for(let i = 1; i < strs.length; i++) {
            if (prefix == strs[i].length || tempStr[prefix] !== strs[i][prefix]) {
                return tempStr.slice(0, prefix);
            }
        }
        prefix++;
    }
    
};

