//given a string as an input, return a new string that only contain the unique characters from the original string by removing the duplicates. Keep the last instances of the duplicates in the resulting output 
const dedupeString = string => {

    // new string for output sinmce strings are immutable
    let output = "";
// for loop to loop through the string, starting at the end
    for (let i = string.length - 1; i >= 0; i--) {
        // check if the character is not already in the output
        if (!output.includes(string[i])) {
            // if not, add it to the output
            output = string[i] + output;
        }
    }
    return output;
}

console.log(dedupeString("Snaps Crackles Pops!")); // "SnCrackle Pops!"