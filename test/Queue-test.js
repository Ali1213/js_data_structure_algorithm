const Queue = require('../Queue');
const should = require('should');

describe('test/Queue-test.js', function () {
  let arr;
  beforeEach(function () {
    arr = new Queue(1, 2, 3, 4, 5);
  });

  it('shoule equal [1,2,3] when new Queue(1,2,3)', function () {
    let arr = new Queue(1, 2, 3);
    arr.get().should.deepEqual([1, 2, 3]);
  });

  it('should return [1,2,3,4,5] when get()', function () {
    arr.get().should.deepEqual([1, 2, 3, 4, 5]);
  });

  it('should get empty queue when new Queue()', function () {
    let arr = new Queue();
    arr.get().should.deepEqual([]);
  });

  it('should add element to queue tail when enqueue()', function () {
    arr.enqueue(1);
    arr.get().should.deepEqual([1, 2, 3, 4, 5, 1]);
  });

  it('should add elements to queue tail when enqueue()', function () {
    arr.enqueue(1, 2);
    arr.get().should.deepEqual([1, 2, 3, 4, 5, 1, 2]);
  });

  it('should remove first element from the queue when dequeue()', function () {
    arr.dequeue();
    arr.get().should.deepEqual([2, 3, 4, 5]);
  });

  it('should return first element when dequeue()', function () {
    arr.dequeue().should.equal(1);
  });

  it('should return first element in queue when front()', function () {
    arr.front().should.equal(1);
  });

  it('should not change the queue when front()', function () {
    arr.front();
    arr.get().should.deepEqual([1, 2, 3, 4, 5]);
  });

  it('should return true if queue is empty when isEmpty()', function () {
    let arr = new Queue();
    arr.isEmpty().should.equal(true);
  });

  it('should return false if queue is not empty when isEmpty()', function () {
    arr.isEmpty().should.equal(false);
  });

  it('should return queue size when size()', function () {
    should.equal(arr.size(), 5);
  });

});