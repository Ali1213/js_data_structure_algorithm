const LinkedList = require('../LinkedList');
const should = require('should');

describe('/test/LinkedList-test.js', function () {

  let list,
    listFull;
  beforeEach(function () {
    list = new LinkedList();
    listFull = new LinkedList();
    listFull.append('first');
    listFull.append('second');
    listFull.append('third');
  });

  it('should add the head element to linkedList if linkedList.length === 0 when append()', function () {
    let element = '111';
    list.append(element);
    should.equal(list.head.element, element);
  });

  it('should add the head element to linkedList if linkedList.length === 0 when append()', function () {
    list.append('first');
    let element = 'tail';
    list.append(element);
    should.equal(list.head.next.element, element);
  });

  it('should insert one element to linkedList when insert()', function () {
    list.append('first');
    list.append('third');
    list.insert(1, 'second');
    should.equal(list.head.next.element, 'second');
    should.equal(list.head.next.next.element, 'third');
  });

  it('should remove the head if the element === head.element when remove()', function () {
    listFull.remove('first');
    should.equal(listFull.head.element, 'second');
  });

  it('should remove the element if the element !== head.element when remove()', function () {
    listFull.remove('second');
    should.equal(listFull.head.element, 'first');
    should.equal(listFull.head.next.element, 'third');
    should.equal(listFull.head.next.next, null);
  });

  it('should return index when indexOf()', function () {
    listFull.indexOf('first').should.equal(0);
    listFull.indexOf('second').should.equal(1);
    listFull.indexOf('four').should.equal(-1);
  });

  it('should remove at position when removeAt()', function () {
    listFull.removeAt(0);
    should.equal(listFull.head.element, 'second');
    should.equal(listFull.head.next.element, 'third');
    should.equal(listFull.head.next.next, null);
    listFull.removeAt(1);
    should.equal(listFull.head.element, 'second');
    should.equal(listFull.head.next, null);
  });

  it('should return true if the linkedList is empty and return false if the linkedList is not empty When isEmpty()', function () {
    list.isEmpty().should.equal(true);
    listFull.isEmpty().should.equal(false);
  });

  it('should return size when size()', function () {
    list.size().should.equal(0);
    listFull.size().should.equal(3);
  });

  it('should return element value when toString()',function(){
    list.toString().should.equal('');
    listFull.toString().should.equal('firstsecondthird');
  });

});