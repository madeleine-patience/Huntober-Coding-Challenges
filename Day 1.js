
function fizzBuzz (number){
    let num = []
for (let i=1; i<number; i++){
    num.push(i)
}
    let answer= []
for ( let i=0 ; i< number; i++){
    //
    if (num[i]%3==0 && num[i]%5==0){
        answer.push("Fizz Buzz")
    }
    else if(num[i]%3==0){
        answer.push("Fizz")
    }
    else if(num[i]%5==0){
        answer.push("Buzz")
    }
    else{
        answer.push(num[i])

    }

}
return answer
}


console.log(fizzBuzz(27))