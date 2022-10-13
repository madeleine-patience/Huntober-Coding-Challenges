// So it turns out that some of the information I stored ever-so-safely in arrays just isn't looking right. I'm not going to be happy until it feels right, you know what I mean? Could you help me rearrange things a bit?

// I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.

// Some things to note:

// If the given value is on the edge of the array and can't move in that direction, don't move it.
// The array passed in should be mutated by this function. Scandalous, I know.
// Example:

myArray = ['abc', 'xyz', 1, 2, 'Hey!']

// call move left function with 'xyz' and myArray as arguments
console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// call move right function this time, with 2 and myArray as arguments
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

// call move right function again, same arguments
// Note that 2 is already as far right as it can go
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change
// Got it? Great! I can't wait to get moving things around.

myArray
function swappingArrsLeft(arr,item){
    let indexNumber= myArray.indexOf(item)
    if (indexNumber=="0"){return myArray}
    let myArr= myArray[indexNumber]=myArray[indexNumber-1]
    let finalArr= myArray[indexNumber-1]= item
return myArray
}
function swappingArrsRight(arr,item){
    let indexNumber= myArray.indexOf(item)
    if (indexNumber==myArray.length-1){return myArray}
    let myArr= myArray[indexNumber]=myArray[indexNumber+1]
    let finalArr= myArray[indexNumber+1]= item
    return myArray
    }
console.log(swappingArrsRight(myArray,2))