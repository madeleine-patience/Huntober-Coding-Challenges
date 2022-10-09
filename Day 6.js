

function removeCharacters(string,index) {
string=string.split('')
let stringLength=[]

for (let i=1; i<string.length; i++){
    stringLength.push(i)

}
let correctedString=[]

stringLength
for(let i=0; i<string.length; i++){
    if(stringLength[i]%index!==0){
        correctedString.push(string[i])

    }

}
return correctedString.join('')
}



console.log( removeCharacters("Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"

,4))

