/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/* 
Intuition
  .Split the list into the odd indexes
  .Split the list into the even indexes
  .Point next of the last element of odd list to the head of event list
Steps
  1.Initialize
    .odd = head; First element of odd list
    .even= head->next; First element of even list
    .temp = even
  2.while odd->next is not null
    .odd->next = odd->next->next
    .even->next = event->next->next
  3.Append event list to odd list
    .odd->next = temp
  4.Return head
Edge cases
  .List has 1 element
  .List is empty
Complexity
  .Time: O(n)
  .Space: O(1)
*/

var oddEvenList = function(head) {
    if(!head) return null;
    if(!head.next) return head;

    let odd = head;
    let even = head.next;
    let temp = even;

    while(odd.next && even.next) {
      odd.next = odd.next.next;
      even.next = even.next.next;
      odd = odd.next;
      even = even.next;
    }
    odd.next = temp;
    return head;
};
