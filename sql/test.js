// var addTwoNumbers = function(l1, l2) {
 

    
// }
// console.log(addTwoNumbers([2,4,3], [5,6,4]));
   
// class ListNode {
//   constructor(data) {
//       this.data = data
//       this.next = null                
//   }
// }

// class LinkedList {
//   constructor(head = null) {
//       this.head = head
//   }
// getFirst() {
//   return this.head;
// }
// }

// let node1 = new ListNode(2)
// let node2 = new ListNode(5)
// node1.next = node2

// let list = new LinkedList(node1)

// console.log(list.head.data)

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

}

// function ListNode(val, data) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }

class LinkedList {
  constructor(head = null) {
      this.head = head
  }
  getFirst() {
    return this.head;
  }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let list = new LinkedList(node1)

console.log(list.getFirst())