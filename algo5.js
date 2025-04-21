//! Linked list: OOP paradigm!

// define a list node with a class:
class ListNode  {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// create a linked list and populate it using the class of ListNode:
const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);

// link the list with next property defined in the constructor:
a.next = b;
b.next = c;
c.next = d;

//* a function to traverse and Log the List:
const printList = (head) => {
    // keep the track of the current to argument that is logged and invoked
    let current = head;
    let result = [];

    while (current) {
        result.push(current.val);
        current = current.next;
    }
    
    console.log(result);
    console.log(result.join("->"))
    // return the visial representation of the linked list:
    return result.join("->");
}
// invoke the function with a -> "head" argument and to see how the list is structured:
printList(a)
printList(b)
printList(c)
printList(d)

const headA = printList(a);
console.log("headA linked List: ", headA);

//* function to insert at the end of the list object that was created:
const insertAtTail = (head, val) => {
    const newNode = new ListNode(val);
    if (!head) return newNode;

    let current = head;
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
    return head;
}

// assign a to head var:
let head = a;
head = insertAtTail(head, 5);
printList(head);
const headB = printList(head);
console.log("headB insterted at the end:  ", headB);

//* delete the node by value, linked list do not have index, but you can target the value of the linked list:
const deleteNode = (head, val) => { 
    // if head does not exist return null, head must exist in order to proceed with the function:
    if (!head) return null;

    if (head.val === val) {
        return head.next;
    } 
    
    let current = head;
    while (current.next && current.next.val !== val) {
        current = current.next;
    }

    if (current.next) {
        current.next = current.next.next;
    }
    return head;
}
// after the deletion of 3 value:
head = deleteNode(head, 3);  
printList(head)

// Search by value:
const searchValue = (head, target) => {
    let current = head;
    while (current) {
        if (current.val === target) return true;
        current = current.val;
    }
    return false;
}

// invoke function to search and/or do not find the value returns a boolean:
console.log(searchValue(head, 3));
console.log(searchValue(head, 1));

//* Optional utility to convert the linked list to an array:
const arrayToLinkedList = (arr) => {
    if (arr.length === 0) return null;

    // head will be the first starting element of the array at index 0:
    const head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

let newList = arrayToLinkedList([10, 20, 30]);
console.log(newList);





