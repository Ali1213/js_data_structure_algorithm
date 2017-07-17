

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
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
};

const mergeSort = function (arr) {
  let len = arr.length;
  if (len === 1) {
    return arr;
  }

  let mid = Math.floor(len / 2),
    lArr = arr.slice(0, mid),
    rArr = arr.slice(mid, len);

  return merge(mergeSort(lArr), mergeSort(rArr));

};

const merge = function (left, right) {
  let i = 0, j = 0, result = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  while (i < left.length) {
    result.push(left[i++]);
  }
  while (j < right.length) {
    result.push(right[j++]);
  }
  return result;
};

const quick = function (arr, left, right) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right);

    if (left < index - 1) {
      quick(arr, left, index - 1);
    }

    if (index < right) {
      quick(arr, index, right);
    }
  }
};

const partition = function (arr, left, right) {
  let point = arr[Math.floor((right + left) / 2)],
    i = left,
    j = right;

  while (i <= j) {

    while (arr[i] < point) {
      i++;
    }

    while (arr[j] > point) {
      j--;
    }

    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return i;
};

const quickSort = function (arr) {
  quick(arr, 0, arr.length - 1);
  return arr;
};




module.exports = {
  bubbleSort,
  selectionSort,
  insertSort,
  quickSort,
  mergeSort
};