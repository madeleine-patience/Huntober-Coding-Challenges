// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'

// P - parameters will be a string
// R - return the translated string
// E - example : 
// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// // implement fix function -> 
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."
// P

// function fixString(input){
// input=input.split('')
// return input.map(items=> items ==="0"?"O": items === "1"?"I": items=== "2"?"Z": items === "3"? "E": items=== "4"? "h": items==="5"?"S": items === "6"?"G": items ==="7"? "L": items === "8"?"B":items==="9"?"q":items).join('')

// }

// console.log(fixString("e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"))


// const decode = (message) => {
//     const arr = ['O', 'I', 'Z', 'E', 'h', 'S', 'G', 'L', 'B', 'q'];
//     return message.split('').map((items) => (Number(items) || items ==='0') ? arr[items] :
//         arr.includes(items) ? arr.indexOf(items) :
//         items)
//         .join('');
// }

// console.log( decode( "e!!Igv)tSlltBcvbdeDHEdVw!OOtI#Aa.ZMDuLWYpP^VVjDchISOiv#ylhgmQfs."))
// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'

// const decode = (message) => {
//     const arr = ['O', 'I', 'Z', 'E', 'h', 'S', 'G', 'L', 'B', 'q'];
//     return message.split('').map((items) => (Number(items) || items ==='0') ? arr[items] :
//         arr.includes(items) ? arr.indexOf(items) :
//         items)
//         .join('');
// }


function fixString (string) {
    const code = "OIZEhSGLBq".split('')
    const codeReverse= "0123456789".split('')
    for ( let i=0 ; i< string.length; i++){

        if(string.includes(codeReverse[i])){
           string= string.replaceAll(codeReverse[i],code[i])
        }
        else if (string.includes(code[i])){
           string= string.replaceAll(code[i],codeReverse[i])}
        }
        return string
        }


console.log(fixString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))
console.log(fixString("e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"))