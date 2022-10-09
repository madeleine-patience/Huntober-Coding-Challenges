//Day 1 //
const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

const decode = (message) => {
    const arr = ['O', 'I', 'Z', 'E', 'h', 'S', 'G', 'L', 'B', 'q'];
    return message.split('').map((items) => (Number(items) || items ==='0') ? arr[items] :
        arr.includes(items) ? arr.indexOf(items) :
        items)
        .join('');
}
 let dayOne= decode(encryptedMsg)
 dayOne

 // Day 3 //

function createSpace(message){
    let secretCode= ["S","p","a","c","e"]
    for (let i =0; i<message.length; i++){
        message= message.split('').map(items=> items===secretCode[i] ? ' ':items).join('')
    }
    return message
    }
    
let dayThree = createSpace(dayOne) 
dayThree
// Day 4 // 
function reverseIt(message){
    return message.split('').reverse('').join('')
 
 
 }

 let day4= reverseIt(dayThree)
 day4

 // Day 6



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
let daySix= removeCharacters(day4,3)    
daySix


//Day 7 //

function swapAlphabet (string){
    string=string.split('')
    string=string.map(items=>items===items.toUpperCase()?items.toLowerCase():items.toUpperCase())
    
 let alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 let littleAlphabet=alphabet.toLowerCase()
 let reverseAlphabet= alphabet.split('').reverse().join('')
 let littleReverseAlphabet=reverseAlphabet.toLowerCase()
 alphabet
 reverseAlphabet

 let correctedString = []
 for(let i=0; i<string.length;i++){
     if(littleAlphabet.includes(string[i])){
        correctedString.push(littleReverseAlphabet[littleAlphabet.indexOf(string[i])])
    }
    else if(littleReverseAlphabet.includes(string[i])){
        correctedString.push(littleAlphabet[littleReverseAlphabet.indexOf(string[i])])
    }
    else if(alphabet.includes(string[i])){
        correctedString.push(reverseAlphabet[alphabet.indexOf(string[i])])
    }
    else if(reverseAlphabet.includes(string[i])){
        correctedString.push(alphabet[reverseAlphabet.indexOf(string[i])])
    }

    else {
        correctedString.push(string[i])
    }

 }
 
return correctedString.join('')

}
console.log(swapAlphabet(daySix))