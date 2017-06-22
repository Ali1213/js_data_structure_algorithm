
const length = Symbol('linkedList length');

class LinkedList {
  constructor() {
    this.head = null;
    this[length] = 0;
  }

  append(element) {
    let node = this.Node(element);
    let current;
    if (Object.is(this.head, null)) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this[length]++;
  }

  insert(position, element) {
    let node = this.Node(element),
      index = 0,
      prev,
      current = this.head;
    while (index < position) {
      prev = current;
      current = current.next;
      index++;
    }
    prev.next = node;
    node.next = current;
    this[length]++;
  }

  remove(element) {
    let prev,
      current = this.head;

    if (element === current.element) {
      this.head = current.next;
      return;
    }

    while (current.next) {
      prev = current;
      current = current.next;

      if (current.element === element) {
        prev.next = current.next;
        return;
      }
    }
  }

  indexOf(element) {
    let index = 0,
      current = this.head;

    if (element === current.element) {
      return index;
    }

    while (current.next) {
      current = current.next;
      index++;
      if (current.element === element) {
        return index;
      }
    }

    return -1;
  }

  removeAt(position) {
    let index = 0,
      prev,
      current = this.head;
    if (position === 0) {
      this.head = current.next;
    }

    while (index < position) {
      prev = current;
      current = current.next;
      index++;
    }
    prev.next = current.next;
    this[length]--;
  }

  isEmpty() {
    return this[length] === 0;
  }

  size() {
    return this[length];
  }

  toString() {
    let current = this.head,
      string = '';

    while (current) {
      string += current.element;
      current = current.next;
    }
    return string;
  }

  static Node(element) {
    let next = null;
    return {
      element,
      next
    };
  }
}

module.exports = LinkedList;