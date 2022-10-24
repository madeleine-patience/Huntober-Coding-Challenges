const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]
// input is arrays
// output will be true/false
// if the array is equal size. Each inner array will contain the same elements


const checkEquality=(arr1,arr2)=>{
//check array size
let lengthSize= arr1.length===arr2.length

// check contents are equal

let arr1Contents= arr1.map(items=>items.join('')).join('')
let arr2Contents= arr2.map(items=>items.join('')).join('')
return lengthSize==true && arr1Contents===arr2Contents? true: false

}

console.log(checkEquality(arr1,arr2))

const assert = require('assert');
describe("Blaws Challenges", () => {
    it("Test 1", () => { assert.deepEqual(checkEquality(arr1,arr2),true )});
    it("Test 2", () => { assert.deepEqual(checkEquality([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]) });
    it("Test 3", () => { assert.deepEqual(checkEquality([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]) });
});