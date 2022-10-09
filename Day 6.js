

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

const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

console.log( removeCharacters(encryptedMsg,3))

