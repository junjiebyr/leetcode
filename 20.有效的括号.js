/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // map做一个映射方便查询
    let stack = [], map = {
        ')':'(',
        '}':'{',
        ']':'['
    };

    // 判断i是'{[('中的话就进栈  不是的话则判断栈顶元素选择进栈还是出栈
    for (let i of s) {
        if (i === '(' || i === '{' || i === '[') {
            stack.push(i);
        } else {
            if (stack[stack.length - 1] === map[i]) {
                stack.pop();
            } else {
                stack.push(i);
            }
        }
    }
    return stack.length === 0 ? true :false;
};

