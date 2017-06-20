const arr = Symbol('private array');
class Stack {
  constructor(...args){
    this[arr] = args;
  }
  push(...args){
    this[arr].push(...args);
  }
  pop(){
    return this[arr].pop();
  }
  peek(){
    return this[arr][this[arr].length - 1];
  }
  isEmpty(){
    return this[arr].length === 0;
  }
  clear(){
    this[arr] = [];
  }
  size(){
    return this[arr].length;
  }
  get(){
    return [...this[arr]];
  }
}

// var a = new Stack(111);
/*eslint no-console: "error"*/


module.exports = Stack;