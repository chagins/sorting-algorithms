module.exports = function BubbleSort(arr) {
  const localArr = [...arr];

  for(let i = 0; i < localArr.length - 1; i++) {
    for(let j = 0; j < localArr.length - 1 - i; j++) {
      if(localArr[j] > localArr[j+1]) {
        const temp = localArr[j];
        localArr[j] = localArr[j+1];
        localArr[j+1] = temp;
      }
    }
  }

  return localArr;
};
