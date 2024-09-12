import LinkedListNode from './LinkedListNode';

export default class LinkedListPractice {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // traverse
  // input: none
  // output: array of values in order
  traverse() {
    if (!this.head) return [];
    const res = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      res.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return res;
  }

  // access at index n
  // input: index to access
  // output: LinkedListNode accessed
  access(index) {
    if (!this.head) return 0;

    let currentNode = this.head;
    let i;
    for (i = 0; i <= index; i += 1) {
      // if at index, break
      if (index === i) {
        break;
      }
      currentNode = currentNode.next;
    }

    // return node
    return currentNode;
  }

  // insert at index n
  // input: value to insert, index
  // output: LinkedListNode inserted
  insert(value, index) {
    // create new node
    const newNode = new LinkedListNode(value);

    let previousNode = null;
    let currentNode = this.head;
    // traverse list until index reached
    for (let i = 0; i <= index; i += 1) {
      if (index === i) {
        // change .next pointer of previous node
        if (previousNode) {
          previousNode.next = newNode;
        } else {
          // if newNode is at head, change head pointer
          this.head = newNode;
        }
        // change .next pointer of newNode to next node
        newNode.next = currentNode;

        // if newNode is at tail, change tail pointer
        if (!currentNode) {
          this.tail = newNode;
        }
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    // return newNode
    return newNode;
  }

  // delete at index n
  // input: index to delete at
  // output: deleted node
  delete(index) {
    if (!this.head) return null;
    let previousNode = null;
    let currentNode = this.head;
    // traverse list until n
    for (let i = 0; i < index; i += 1) {
      // return if out of bounds
      if (!currentNode) {
        return null;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    // delete currentNode
    // if not deleting at head, change previousNode.next
    // if deleting at head, change head pointer
    if (previousNode) {
      previousNode.next = currentNode.next;
    } else {
      // change head pointer
      this.head = currentNode.next;
    }
    // if deleting at tail, change tail node to previousNode
    if (!currentNode.next) {
      this.tail = previousNode;
    }
    // return deletedNode
    return currentNode;
  }

  // reverse
  // input: none
  // output: none
  reverse() {
    if (!this.head) return;
    let previousNode = null;
    let currentNode = this.head;

    // traverse through list
    // at each node, change currentNode.next to previousNode
    while (currentNode) {
      const temp = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = temp;
    }

    // swap head and tail pointers
    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
}
