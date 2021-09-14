// union sorted array
// take 2 arrays as inputs
// make sure all numbers from both arrays are in the result (greater # of repetitions)

const unionSort = (arr1, arr2, runner1 = 0, runner2 = 0, output = []) => {

    // return teh output if we are at the end of both arrays
    if (runner1 >= arr1.length && runner2 >= arr2.length) {
        return output;
    }

    //if the values are equal, push to output and increase both runners
    else if (arr1[runner1] == arr2[runner2]) {
        output.push(arr1[runner1]);
        return unionSort(arr1, arr2, runner1 + 1, runner2 + 1, output);
    }

    // if teh first number is smaller OR if we have finished going through the second list, push the first value and increase teh runner
    else if ((arr1[runner1] < arr2[runner2])||(runner2==arr2.length)) {
        output.push(arr1[runner1]);
        return unionSort(arr1, arr2, runner1 + 1, runner2, output);
    }

    // if teh second number is smaller OR if we have finished going through the first list, push the second value and increase teh runner
    else if ((arr1[runner1] > arr2[runner2])||(runner1==arr1.length)){
        output.push(arr2[runner2]);
        return unionSort(arr1, arr2, runner1, runner2 + 1, output);
    }

}

console.log(unionSort([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 7])); // union is [1,2,2,2,6,6,7,7]
console.log(unionSort([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 7, 9])); // union is [1,2,2,2,6,6,7,7,9]
console.log(unionSort([1, 2, 2, 2, 7, 7, 14], [2, 2, 6, 6, 7, 7])); // union is [1,2,2,2,6,6,7,7,14]