module.exports = function BubbleSort(arr) {
  let localArr = [...arr];
  let isSorted = true;
  for (let i = 0; i < localArr.length - 1; i++) {
    isSorted = true;
    for (let j = 0; j < localArr.length - i - 1; j++) {
      if (localArr[j] > localArr[j + 1]) {
        const temp = localArr[j];
        localArr[j] = localArr[j + 1];
        localArr[j + 1] = temp;
        isSorted = false;
      }
    }
    if (isSorted) return localArr;
  }
};
