const assert = require("assert");
const shuffled_arrays = require('../test/shuffled_arrays.js');
const shuffledArrs = shuffled_arrays.shuffledArrs;
const orderedArr = shuffled_arrays.orderedArr;

//sorting function
const InsertionSort = require('../src/InsertionSort.js');

describe(`${InsertionSort.name}`, () => {
  for(let i = 0; i < shuffledArrs.length; i++){
    it("Should return 'ordered array with numbers from 1 to 100'", () => {
      const testArr = InsertionSort(shuffledArrs[i]);
      assert.deepEqual(testArr, orderedArr);
    })
  }
})