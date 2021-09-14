// using recursion, we need to pass along the arrays, the runners keeping track of which index we are looking at in each array, and the output. We can establish defaults for the runners and output so we don't have to establish them inside the code block of the function
const intersectRecursive = (arr1, arr2, arr1Runner = 0, arr2Runner = 0, output = []) => {

    // escape clause, we are done if we get through one of the lists
    if ((arr1.length == arr1Runner) || (arr2.length == arr2Runner)){
        return output;
    }

    // if the compared values are equal, push to output and call again increasing both runners
    else if (arr1[arr1Runner] == arr2[arr2Runner]) {
        output.push(arr1[arr1Runner]);
        return intersectRecursive(arr1, arr2, arr1Runner + 1, arr2Runner + 1, output);
    }

    // else if the first array value is greater, call again increasing the second runner
    else if (arr1[arr1Runner] > arr2[arr2Runner]){
        return intersectRecursive(arr1, arr2, arr1Runner, arr2Runner + 1, output);
    }

    // else the second array value is greater, so call again increasing the firstrunner
    else {
        return intersectRecursive(arr1, arr2, arr1Runner + 1, arr2Runner, output);
    }
    
}

console.log(intersectRecursive([1, 3, 3, 4, 4, 6], [1, 4, 4, 4, 4, 6, 6, 6]));
console.log(intersectRecursive([1,2,3,3,4,4,6], [2,3,4,4,6]));
console.log(intersectRecursive([1,1,3,3,3,4,9], [1,2,3,6,8,9,9]));
console.log(intersectRecursive([1, 4, 4, 4, 4, 6, 6, 6], [1, 3, 3, 4, 4, 6]));
console.log(intersectRecursive([1, 3, 4, 4, 4, 4, 6, 6, 6], [1, 3, 3, 4, 4, 6]));