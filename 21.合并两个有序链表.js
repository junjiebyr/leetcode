/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function(l1, l2) {
    let res = l3 = new ListNode(0);
    while(l1 && l2) {
        if (l1.val < l2.val) {
            l3.next = new ListNode(l1.val);
            l3 = l3.next, l1 = l1.next;
        } else {
            l3.next = new ListNode(l2.val);
            l3 = l3.next, l2 = l2.next;
        }
    }
    if (l1 || l2) {
        let tmp = l1 ? l1 : l2;
        while(tmp) {
            l3.next = new ListNode(tmp.val);
            tmp = tmp.next, l3 = l3.next;
        }
    }
    return res.next;
};

