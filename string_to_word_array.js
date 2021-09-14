// take an input of a string and return an aray with each element being each word in the string
// work for edge cases with variable spaces between words/extra spaces

const stringToWordArray = string => {
    let output = [];
    for (let i = 0; i < string.length; i++) {
        console.log(`looking at ${string[i]}`)
        
        if (string[i] != " "){
            let word = "";
            while(string[i] != " "){
                console.log(`adding ${string[i]} to ${word}`)
                word += string[i];
                i++;
                if (i == string.length){break;}
            }
            console.log(`pushing ${word}`)
            output.push(word);
        }
    }
    return output;
}

console.log(stringToWordArray("    apple bottom     jeans, boots with the fur."));