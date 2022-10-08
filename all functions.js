const decode = (message) => {
    const arr = ['O', 'I', 'Z', 'E', 'h', 'S', 'G', 'L', 'B', 'q'];
    return message.split('').map((items) => (Number(items) || items ==='0') ? arr[items] :
        arr.includes(items) ? arr.indexOf(items) :
        items)
        .join('');
}



function catAttack(string){
    let catArr= string.split(/(c)/).slice(1).join('')
    let removeEek= catArr.replaceAll("Eek!",'').split('').reverse().join('')
    let finalSplit= removeEek.split('v')
    return finalSplit
    }



function createSpace(message){
        let secretCode= ["s","p","a","c","e"]
        for (let i =0; i<message.length; i++){
            message= message.split('').map(items=> items===secretCode[i] ? ' ':items).join('')
        }
        return message
        }




function reverseIt(message){
   return message.split('').reverse('').join('')


}