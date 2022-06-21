module.exports = 

function QuickSort(arr) {
  if(arr.length === 0) return [];

    const localArr = [...arr];

    let l = [];
    let r = [];
    let p = localArr[0];

    for(let i = 1; i < localArr.length; i++) {
      if(localArr[i] < p) {
        l.push(localArr[i]);
      } else {
        r.push(localArr[i]);
      }
    }

    return [...QuickSort(l), p, ...QuickSort(r)];

};
