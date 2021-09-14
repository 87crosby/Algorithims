// intersectSortedArray
// given two inputs of sorted arrays
// return the intersection of the two arrays: repeated sections in order/what do they have in common, returns the least amount of repeated digits; [1,4,4,4,4,6,6,6] and [1,3,3,4,4,6] returns [1,4,4,6]

const intersectSortedArray = (arr1, arr2) => {
    // check the shorter array: less numbers to check
    if (arr2.length < arr1.length) {
        [arr1, arr2] = [arr2, arr1];
    }

    // counter for checking the second array
    let arr2Counter = 0;

    //blank array for output
    let output = [];

    // for loop to run thru the shorter array
    for (let i = 0; i < arr1.length; i++) {

        // while loop to increase the second array counter if the first array values are greater
        while (arr1[i] > arr2[arr2Counter] && arr2Counter < arr2.length) {
            arr2Counter++;
        }

        // log to check which values are comparing
        console.log(`comparing arr1 pos ${i} value ${arr1[i]} to arr2 pos ${arr2Counter} value ${arr2[arr2Counter]}`)

        // if the values are the same, add to the output and increase the second array counter
        if (arr1[i] == arr2[arr2Counter]) {
            console.log("pushing");
            output.push(arr1[i]);
            arr2Counter++;
        }
    }
    return output;
}
console.log(intersectSortedArray([1, 3, 3, 4, 4, 6], [1, 4, 4, 4, 4, 6, 6, 6]))
console.log(intersectSortedArray([1,2,3,3,4,4,6], [2,3,4,4,6]))
console.log(intersectSortedArray([1,1,3,3,3,4,9], [1,2,3,6,8,9,9]))
console.log(intersectSortedArray([1, 4, 4, 4, 4, 6, 6, 6], [1, 3, 3, 4, 4, 6]))