let catPuns="The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

// Here are the rules these submissions had to follow:
// Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation)
// The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)
// Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
// Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
// Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
// Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?)

function sortingCatPuns(string){

    string=string.split(",").map(items=>items.split('')).filter(items=>!items.length%5==0)
    let lowerCaseCount= string.map(items=>items.filter((char) => char.match(/[a-z]/))).map(items=>items.length)
    let emptyArr=[]
    for(let i=0;i<string.length; i++){
        if(lowerCaseCount[i]%2==0){
            emptyArr.push(string[i])
        }
    }
    
return emptyArr.map(items=>items.join(''))

}


let evenLowerCase= sortingCatPuns(catPuns)
//function 2 - filtering out space on either side of the title as well as items including an S


function catPunSubmissions (string){
return string.map(items=>items.split('')).filter(items=>items[0]!==' ').map(items=>items.reverse()).filter(items=>items!==' ').map(items=>items.reverse().join('')).filter(items=>!items.includes("S"))

}

let noSpaces = catPunSubmissions(evenLowerCase)



// Function to filter out only items that have TWO capital letters
function twoCapitalLetters (string) {
string=string.map(items=>items.split(''))
let capitalsOnly=string.map(items=>items.filter((char) => char.match(/[A-Z]/)))
let doubleCaps=[]
for(let i=0; i<string.length;i++){
    if(capitalsOnly[i].length==2){
        doubleCaps.push(string[i])

    }
}
return doubleCaps.map(items=>items.join(''))

}


let doubleCapitalsOnly= twoCapitalLetters(noSpaces)

// The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)

function getCharCodes (string){
string=string.map(items=>items.split(''))
let charCodeSum=[]
for(let i =0 ; i<string.length; i++){
    charCodeSum.push(string[i][0].charCodeAt()+string[i][string[i].length-1].charCodeAt())
}
charCodeSum
    let oddCharCodes=[]

    for(let i=0; i<charCodeSum.length;i++){
        if(charCodeSum[i]%2!==0){
            oddCharCodes.push(string[i])
        }
    }
return oddCharCodes.map(items=>items.join(''))

}

let charCodes= getCharCodes(doubleCapitalsOnly)



// Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')

function mayNotBeE (string){
    string=string.map(items=>items.split(''))
    let characterLengths= string.map(items=>items.length)
    console.log(string[1])
    console.log(string[1].length)
    characterLengths
    let emptyArr=[]
    for(let i=0; i<string.length; i++){
        if(string[i].length%2==0){
            emptyArr.push(string[i][string[i].length/2])

        }

        else if(string[i].length%2!==0){
            emptyArr.push(string[i][(string[i].length+1)/2])


        }
      


    }
    emptyArr
    let noEs=[]
    for(let i=0; i<string.length; i++){
        if(emptyArr[i]!== 'e'){
            noEs.push(string[i])
        }

    }
    return noEs.map(items=>items.join(''))

}

let noEsPlease= mayNotBeE(charCodes)
noEsPlease

function finalFunction(string){
string=string.map(items=>items.toLowerCase())
return string.filter(items=>!items.includes("bone")).filter(items=>!items.includes('dog')).filter(items=>!items.includes("bark"))


}

console.log (finalFunction(noEsPlease))