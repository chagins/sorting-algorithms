module.exports = function selectionSort(arr){
  let localArr = [...arr];
  let i, j, min_id;
  for(i = 0; i < localArr.length - 1; i++){
    min_id = i;
    for(j = i+1; j < localArr.length; j++){
      if(localArr[min_id] > localArr[j]){
        min_id = j;
      }
    }
    const temp = localArr[min_id];
    localArr[min_id] = localArr[i];
    localArr[i] = temp;
  }
  return localArr;
}
