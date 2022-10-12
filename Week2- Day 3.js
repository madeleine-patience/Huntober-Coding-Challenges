let myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']

function movesAs () {
    let threeOrMore= myArr.filter(items=>items.length>3)
     
    for(let i=0; i<threeOrMore.length;i++){
        myArr =myArr.filter(items=>items!==threeOrMore[i])

    }
    
    let containsAs= threeOrMore.filter(items=>items.includes("a"))
    containsAs
 
    for(let i=0; i<myArr.length;i++){
        myArr=myArr.filter(items=>items!==containsAs[i])

    }
    for(let i=0; i<myArr.length ;i++){
        threeOrMore=threeOrMore.filter(items=>items!==containsAs[i])

    }
    let combine= containsAs.concat(myArr)
    return combine.concat(threeOrMore)
}

console.log(movesAs(myArr))