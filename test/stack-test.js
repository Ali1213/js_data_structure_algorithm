const Stack = require('../Stack');
const should = require('should');

describe('test/stack-test.js', function () {

  let arr;

  beforeEach(function () {
    arr = new Stack(1, 2, 3, 4, 5);
  });

  it('should equal [] when use new Stack()', function () {
    should.deepEqual(new Stack().get(), []);
  });

  it('should equal [1,2,3] when use new Stack(1,2,3)', function () {
    should.deepEqual(new Stack(1, 2, 3).get(), [1, 2, 3]);
  });


  it('should equal [1,2,3,4,5,6] when push(6)', function () {
    arr.push(6);
    should.deepEqual(arr.get(), [1, 2, 3, 4, 5, 6]);
  });

  it('should equal [1,2,3,4,5,6,7] when push(6,7)', function () {
    arr.push(6, 7);
    should.deepEqual(arr.get(), [1, 2, 3, 4, 5, 6, 7]);
  });

  it('should equal [1,2,3,4] when pop()', function () {
    arr.pop();
    should.deepEqual(arr.get(), [1, 2, 3, 4]);
  });

  it('should return the last element (5) when pop()', function () {
    arr.pop().should.equal(5);
  });

  it('should not change the stack [1,2,3,4,5] when peek()', function () {
    arr.peek();
    should.deepEqual(arr.get(), [1, 2, 3, 4, 5]);
  });

  it('should return the last element (5) when peek()', function () {
    arr.peek().should.equal(5);
  });

  it('should return false if stack is not empty when isEmpty()', function () {
    arr.isEmpty().should.equal(false);
  });

  it('should return true if stack is empty when isEmpty()', function () {
    new Stack().isEmpty().should.equal(true);
  });

  it('should equal [] when clear()',function(){
    arr.clear();
    should.deepEqual(arr.get(),[]);
  });

  it('should return stack length (5) when size()',function(){
    arr.size().should.equal(5);
  });

});