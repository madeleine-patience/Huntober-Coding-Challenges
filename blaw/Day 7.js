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
