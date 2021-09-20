//given an integer, convert to the binary
//https://www.rapidtables.com/convert/number/decimal-to-binary.html
const decimalToBinaryCondensed= (num)=>{
    // blank output
    result="";
    // while the valuse we are manipulating is greater than 0
    while (num >= 0){
        // push the binary digit to the front of the output (num - 2 * Math.floor(num / 2) will give the binary of 0 or 1)
        result = (num - 2 * Math.floor(num / 2)) + result
        // break if we are at 0
        if (num == 0){break};
        // update the value we are manipulating
        num = Math.floor(num / 2);
    }
    // convert the output to an integer just in case
    return parseInt(result);
}


// console.log(decimalToBinary(13));
// console.log(decimalToBinary(174));
// console.log(decimalToBinary(2));
// console.log(decimalToBinary(1));
// console.log(decimalToBinary(0));