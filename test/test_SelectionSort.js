const assert = require("assert");
const shuffled_arrays = require('../utils/shuffled_arrays.js');
const shuffledArrs = shuffled_arrays.shuffledArrs;
const orderedArr = shuffled_arrays.orderedArr;

//sorting function
const SelectionSort = require('../src/SelectionSort.js');

describe(`${SelectionSort.name}`, () => {
  for(let i = 0; i < shuffledArrs.length; i++){
    it("Should return 'ordered array with numbers from 1 to 100'", () => {
      const testArr = SelectionSort(shuffledArrs[i]);
      assert.deepEqual(testArr, orderedArr);
    })
  }
})