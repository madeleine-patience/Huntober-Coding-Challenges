// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet



// Input is going to be a string. Input will always have content.
// Output is going a single word from the URL. The main content of the website. Returned as a string.
 

function domainName (string){
    string=string.replace("http://",'').replace("www.",'').replace(".com",' ').replace("https://",'').split('/')
    return string[0]
}

console.log( domainName("http://github.com/carbonfive/raygun"))
console.log( domainName("http://www.zombie-bites.com"))
console.log( domainName("https://www.cnet.com"))