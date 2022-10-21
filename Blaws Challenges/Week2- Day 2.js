

const swappingArrsLeft= (arr,swap)=>{

    let indexPostion= arr.findIndex(item=>item==swap)
    if(indexPostion<1){return arr}
    arr[indexPostion]=arr[indexPostion-1]
    arr[indexPostion-1]=swap

}


const swappingArrsRight= (arr,swap)=>{

    let indexPostion= arr.findIndex(item=>item==swap)
    if(indexPostion=arr.length-1){return arr}
    arr[indexPostion]=arr[indexPostion+1]
    arr[indexPostion+1]=swap
return arr
}

myArray = ['abc', 'xyz', 1, 2, 'Hey!']
console.log(swappingArrsRight(myArray, "Hey!"))