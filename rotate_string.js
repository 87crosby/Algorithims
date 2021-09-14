// rotating a string to see if it is a rotation of another
// create a new string rotated by number chars
// if number > string.length, modulo string.length

const rotateString = (string, number) => {
    // blank string for output
    let output = "";
    // rotating more than the number of letters in teh string doesn't matter, so use modulo to get the remainder
    let rotations = number % string.length;
    // loop to grab letters from teh back of the word and move to the front based on teh number of rotations
    for (let i = 1; i <= rotations; i++) {
        output = string[string.length - i] + output;
    }
    // loop to add the remainder of the word
    for (let i = 0; i < string.length - rotations; i++) {
        output += string[i];
    }
    // return the output string
    return output;
}

console.log(rotateString("basketball", 3)); // allbasketb
console.log(rotateString("Hello", 2)); // loHel
console.log(rotateString("okay", 7)); // kayo