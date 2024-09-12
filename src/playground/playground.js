// Import any algorithmic dependencies you need for your playground code here.
import LinkedListPractice from '../data-structures/linked-list/LinkedListPractice';

export default class Playground {
  // Write your playground code inside the playground() function.
  // Test your code from __tests__/playground.test.js
  // Launch playground tests by running: npm test -- 'playground'
  static linkedListInsertHead() {
    const list = new LinkedListPractice();
    list.insert(1, 0);
    list.insert(2, 0);
    list.insert(3, 0);
    return [list.traverse(), list.head.value, list.tail.value];
  }

  static linkedListInsertTail() {
    const list = new LinkedListPractice();
    list.insert(1, 0);
    list.insert(2, 1);
    list.insert(3, 2);
    return [list.traverse(), list.head.value, list.tail.value];
  }

  static linkedListInsertRandom() {
    const list = new LinkedListPractice();
    list.insert(1, 0);
    list.insert(5, 1);
    list.insert(2, 1);
    list.insert(4, 2);
    list.insert(3, 2);
    return [list.traverse(), list.head.value, list.tail.value];
  }

  static linkedListTraverse() {
    const list = new LinkedListPractice();
    list.insert(1, 0);
    list.insert(2, 0);
    list.insert(3, 0);
    return list.traverse();
  }

  static linkedListAccess(n) {
    const list = new LinkedListPractice();
    list.insert(1, 0);
    list.insert(2, 0);
    list.insert(3, 0);
    return list.access(n).value;
  }

  static linkedListDeleteHead() {
    // prepare list
    const list = new LinkedListPractice();
    list.insert(4, 0);
    list.insert(3, 0);
    list.insert(2, 0);
    list.insert(1, 0);

    // perform delete at head
    list.delete(0);
    return [list.traverse(), list.head.value, list.tail.value];
  }

  static linkedListDeleteTail() {
    // prepare list
    const list = new LinkedListPractice();
    list.insert(4, 0);
    list.insert(3, 0);
    list.insert(2, 0);
    list.insert(1, 0);

    // perform delete at head
    list.delete(3);
    return [list.traverse(), list.head.value, list.tail.value];
  }

  static linkedListDeleteRandom() {
    // prepare list
    const list = new LinkedListPractice();
    list.insert(4, 0);
    list.insert(3, 0);
    list.insert(2, 0);
    list.insert(1, 0);

    // perform delete at head
    list.delete(2);
    return [list.traverse(), list.head.value, list.tail.value];
  }

  static linkedListReverse() {
    // prepare list
    const list = new LinkedListPractice();
    list.insert(4, 0);
    list.insert(3, 0);
    list.insert(2, 0);
    list.insert(1, 0);

    // perform reverse
    list.reverse();
    return [list.traverse(), list.head.value, list.tail.value];
  }
}
