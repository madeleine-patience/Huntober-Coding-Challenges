
function createSpace(message){
let secretCode= ["S","p","a","c","e"]
for (let i =0; i<message.length; i++){
    message= message.split('').map(items=> items===secretCode[i] ? ' ':items).join('')
}
return message
}

console.log(createSpace('e!!1gv)tSllt8cvbdeDHEdVw!OOt1#Aa.2MDuLWYpP^VVjDch1SOiv#ylhgmQfs'))
