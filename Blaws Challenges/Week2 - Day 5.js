const shuffle=(myArray)=>{
let size=myArray.length
let arr= myArray.join().split(',')
let length= myArray.join().split(',').length
let indexAssignments=[]

while(indexAssignments.length<9){ 
    let nums= Math.floor(Math.random()*9)
    if(indexAssignments.indexOf(nums)===-1){indexAssignments.push(nums)}
}
let scrambledArr=[]
for(let i=0; i<length;i++){
scrambledArr.push(arr[indexAssignments[i]])


}
scrambledArr

let chunkedArr=[]
for (let i=0; i<scrambledArr.length; i+=size){
    const chunk = scrambledArr.slice(i,i+size)
    chunkedArr.push(chunk)

}

return chunkedArr


}


console.log(shuffle(myArray))
