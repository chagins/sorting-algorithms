module.exports = function InsertionSort(arr){
  let localArr = [...arr];
  let i, j ,key;
  for(i = 1; i < localArr.length; i++){
    key = localArr[i];
    j = i - 1;
    while(j >= 0 && localArr[j] > key){
      localArr[j+1] = localArr[j];
      j--;
    }
    localArr[j+1] = key;
  };

  return localArr;
}