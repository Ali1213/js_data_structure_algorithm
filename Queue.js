const arr = Symbol('private array');

class Queue {
  constructor(...args){
    this[arr] = args;
  }
  enqueue(...args){
    this[arr].push(...args);
  }
  dequeue(){
    return this[arr].shift();
  }
  front(){
    return this[arr][0];
  }
  isEmpty(){
    return this[arr].length === 0;
  }
  size(){
    return this[arr].length;
  }
  get(){
    return [...this[arr]];
  }
}
module.exports = Queue;