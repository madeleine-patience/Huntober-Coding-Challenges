

// Today you'll need to create a function that swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.


// Do me a favor and try to solve it a couple of different ways to see which you preferred and why.

function swapAlphabet (string){
    string=string.split('')
    string=string.map(items=>items===items.toUpperCase()?items.toLowerCase():items.toUpperCase())
    
 let alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 let littleAlphabet=alphabet.toLowerCase()
 let reverseAlphabet= alphabet.split('').reverse().join('')
 let littleReverseAlphabet=reverseAlphabet.toLowerCase()

 
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
console.log(swapAlphabet("abCDef!!!   HI"))
