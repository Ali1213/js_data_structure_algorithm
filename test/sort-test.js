const sort = require('../sort');
const should = require('should');


describe('test/sort-test.js',function(){
  let arr;
  beforeEach(function(){
    arr = [9,8,7,6,5,4,3,2,1];
  });

  it('should sort when bubblesort',function(){
    sort.bubbleSort(arr).should.deepEqual([1,2,3,4,5,6,7,8,9]);
  });

  it('should sort when selectionSort',function(){
    sort.selectionSort(arr).should.deepEqual([1,2,3,4,5,6,7,8,9]);
  });

  it('should sort when insertSort',function(){
    sort.insertSort(arr).should.deepEqual([1,2,3,4,5,6,7,8,9]);
  });

});