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

function fixString(input){
input=input.split('')
return input.map(items=> items ==="0"?"O": items === "1"?"I": items=== "2"?"Z": items === "3"? "E": items=== "4"? "h": items==="5"?"S": items === "6"?"G": items ==="7"? "L": items === "8"?"B":items==="9"?"q":items).join('')

}

console.log(fixString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))


const decode = (message) => {
    const arr = ['O', 'I', 'Z', 'E', 'h', 'S', 'G', 'L', 'B', 'q'];
    return message.split('').map((items) => (Number(items) || items ==='0') ? arr[items] :
        arr.includes(items) ? arr.indexOf(items) :
        items)
        .join('');
}

console.log( decode( "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))
