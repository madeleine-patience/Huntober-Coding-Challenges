
let myArray = ['abc', 'xyz', 1, 2, 'Hey!']

const swappingArrsLeft= (arr,swap)=>{

    let indexPostion= arr.findIndex(item=>item==swap)
    if(indexPostion<1){return arr}
    arr[indexPostion]=arr[indexPostion-1]
    arr[indexPostion-1]=swap

    return arr
}

console.log(swappingArrsLeft(myArray,"xyz"))

const swappingArrsRight= (arr,swap)=>{
    arr
    let indexPostion= arr.findIndex(item=>item==swap)
    indexPostion
    if(indexPostion>arr.length-1){return arr}

    arr[indexPostion]=arr[indexPostion+1]
    arr[indexPostion+1]=swap
    
return arr
}

console.log(swappingArrsRight(myArray, "xyz"))