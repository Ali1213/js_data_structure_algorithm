

const bubbleSort = function (arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};

const selectionSort = function (arr) {
  let len = arr.length,
    temp;
  for (let i = 0; i < len; i++) {
    temp = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[temp]) {
        temp = j;
      }
    }
    if (i !== temp) {
      [arr[i], arr[temp]] = [arr[temp], arr[i]];
    }
  }
  return arr;
};

const insertSort = function (arr) {
  let len = arr.length, temp, j;
  for (let i = 1; i < len; i++) {
    j = i;
    temp = arr[i];
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j-1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
};


module.exports = {
  bubbleSort,
  selectionSort,
  insertSort
};