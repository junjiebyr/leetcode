/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(0), flag = 0;
    let res = l3, sum = 0;
    while(l1 || l2) {
        let tmp1 = l1 !== null ? l1.val : 0;
        let tmp2 = l2 !== null ? l2.val : 0;
        sum = tmp1 + tmp2 + flag;
        flag = Math.floor(sum / 10);
        l3.next = new ListNode(sum % 10);
        l3 = l3.next;
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    if(flag > 0) {
        l3.next = new ListNode(flag);
    }
    return res.next;
};


