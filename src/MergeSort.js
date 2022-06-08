module.exports = 

function MergeSort(arr) {
  
  function sort(arr) {
    const localArr = [...arr];
    
    if(localArr.length === 1) {
      return localArr;
    }

    const middle = Math.floor(localArr.length / 2);
    const leftArr = localArr.slice(0, middle);
    const rightArr = localArr.slice(middle);
    const resultArr = merge(sort(leftArr), sort(rightArr));
    return resultArr;
  }

  function merge(arr1, arr2) {
    const resultArr = [];
    let indexArr1 = 0;
    let indexArr2 = 0;

    while(indexArr1 < arr1.length && indexArr2 < arr2.length) {
      if(arr1[indexArr1] < arr2[indexArr2]) {
        resultArr.push(arr1[indexArr1]);
        indexArr1++;
      } else {
        resultArr.push(arr2[indexArr2]);
        indexArr2++;
      }
    }
    return [...resultArr, ...arr1.slice(indexArr1), ...arr2.slice(indexArr2)];
  }

  return sort(arr);
};
