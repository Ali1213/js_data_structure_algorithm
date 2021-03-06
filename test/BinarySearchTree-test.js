const should = require('should');
const BinarySearchTree = require('../BinarySearchTree');

describe('test/BinarySearchTree-test.js', function () {

  let tree;

  const createTree = function () {
    let tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);
    tree.insert(5);
    tree.insert(3);
    tree.insert(9);
    tree.insert(8);
    tree.insert(10);
    tree.insert(13);
    tree.insert(12);
    tree.insert(14);
    tree.insert(20);
    tree.insert(18);
    tree.insert(25);
    tree.insert(6);
    return tree;
  };

  beforeEach(function () {
    tree = createTree();
  });

  it('should insert the key when insert()', function () {
    tree = new BinarySearchTree();
    tree.insert(11);
    tree.root.key.should.equal(11);
    should.equal(tree.root.left, null);
    should.equal(tree.root.right, null);

    tree.insert(7);
    tree.root.left.key.should.equal(7);

    tree.insert(15);
    tree.root.right.key.should.equal(15);

    tree.insert(3);
    tree.root.left.left.key.should.equal(3);

    tree.insert(13);
    tree.root.right.left.key.should.equal(13);
  });

  it('should return true if node exist and return false if node is not exist when search()', function () {
    tree.search(12).should.equal(true);
    tree.search(33).should.equal(false);
  });

  it('should traverse the node in order when inOrderTraverse()', function () {
    let keyArr = [];
    let cb = function (key) {
      keyArr.push(key);
    };
    tree.inOrderTraverse(cb);

    keyArr.should.deepEqual([3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]);
  });

  it('should traverse the node in order when preOrderTraverse()', function () {
    let keyArr = [];
    let cb = function (key) {
      keyArr.push(key);
    };
    tree.preOrderTraverse(cb);

    keyArr.should.deepEqual([11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]);
  });

  it('should traverse the node in order when postOrderTraverse()', function () {
    let keyArr = [];
    let cb = function (key) {
      keyArr.push(key);
    };
    tree.postOrderTraverse(cb);

    keyArr.should.deepEqual([3, 6, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11]);
  });

  it('should get the min value in tree when min()', function () {
    should.equal(tree.min(), 3);
    should.equal(new BinarySearchTree().min(), null);
  });

  it('should get the max value in tree when max()', function () {
    should.equal(tree.max(), 25);
    should.equal(new BinarySearchTree().max(), null);
  });

  it('should remove the key when remove()', function () {
    tree.remove(6);
    let keyArr = [];
    let cb = function (key) {
      keyArr.push(key);
    };
    tree.preOrderTraverse(cb);
    keyArr.should.deepEqual([11, 7, 5, 3, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]);

    tree.remove(5);
    keyArr = [];
    tree.preOrderTraverse(cb);
    keyArr.should.deepEqual([11, 7, 3, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]);


    tree.remove(15);
    keyArr = [];
    tree.preOrderTraverse(cb);
    keyArr.should.deepEqual([11, 7, 3, 9, 8, 10, 18, 13, 12, 14, 20, 25]);

    tree.remove(8);
    tree.remove(9);
    keyArr = [];
    tree.preOrderTraverse(cb);
    keyArr.should.deepEqual([11, 7, 3, 10, 18, 13, 12, 14, 20, 25]);


  });

});