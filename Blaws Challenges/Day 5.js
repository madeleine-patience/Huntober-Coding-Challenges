let catPuns="The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"
// Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation)
// The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)
// Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
// Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
// Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
// Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?)
// Meowter Call Saul
//The Pawnight Show
function removeEmptySpace(string){
    string=string.split(',').filter(items=>!items.includes("S"))
    string=string.map(items=>items).map(items=>items.split(''))
    let noSpaces= string.filter(items=>items[0] !== ' ').filter(items=>items[items.length-1]!==' ')
    
    noSpaces
    // The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)
    
    let charCodeSum=[]
    for(let i=0; i<noSpaces.length; i++){
        charCodeSum.push(noSpaces[i][0].charCodeAt()+noSpaces[i][noSpaces[i].length-1].charCodeAt())
    }
    
    let oddChar =[]
    for(let i=0; i<charCodeSum.length; i++){
        if(charCodeSum[i]%2!==0){
            oddChar.push(noSpaces[i])
        }
    }
    
// Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
    let punLengths= oddChar.map(items=>items.length)

    let middleLetter= []
    for(let i=0; i<oddChar.length;i++){
        if(oddChar[i].length%2==0){
            // this is correct
            middleLetter.push(oddChar[i][(oddChar[i].length)/2])
        }
        
        else{
            middleLetter.push(oddChar[i][(oddChar[i].length+1)/2])
        }
        }
    let oddCharCodesRemoved= []
    for(let i=0; i<oddChar.length;i++){
        if(middleLetter[i]!=="e" ){
            oddCharCodesRemoved.push(oddChar[i])
        }
        }
      

// Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
    let lowerCaseCount= oddCharCodesRemoved.map(items=>items.filter((char) => char.match(/[a-z]/g))).map(items=>items.length)
    lowerCaseCount
    let evenLowerCase=[]
    for(let i=0;i<lowerCaseCount.length; i++){
            if(lowerCaseCount[i]%2==0){
                evenLowerCase.push(oddCharCodesRemoved[i])
            }
        }

// Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)

        
        let capitalsOnly=evenLowerCase.map(items=>items.filter((char) => char.match(/[A-Z]/g)))

        let doubleCaps=[]
        for(let i=0; i<evenLowerCase.length;i++){
            if(capitalsOnly[i].length>=2){
                doubleCaps.push(evenLowerCase[i])
        
            }
        }
        let finalArray= doubleCaps.map(items=>items.join('').toLowerCase())
        // Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped)
        let fin= finalArray.filter(items=>!items.includes("bark")).filter(items=>!items.includes("dog")).filter(items=>!items.includes("bone")).filter(items=>items.length%5!==0)

return fin
     
}



console.log(removeEmptySpace(catPuns))

