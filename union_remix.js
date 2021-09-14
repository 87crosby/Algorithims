const unionRemix = (arr1, arr2) => {

    let output = [];
    let runner1 = 0;
    let runner2 = 0;

    while (runner1 < arr1.length || runner2 < arr2.length){

        if (arr1[runner1] == arr2[runner2]) {
            output.push(arr1[runner1]);
            runner1++;
            runner2++;
        }

        else if ((arr1[runner1] < arr2[runner2]) || (runner2 == arr2.length)){
            output.push(arr1[runner1]);
            runner1++;
        }

        else if ((arr1[runner1] > arr2[runner2]) || (runner1 == arr1.length)){
            output.push(arr2[runner2]);
            runner2++;
        }

    }
    return output;
}


console.log(unionRemix([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 7])); // union is [1,2,2,2,6,6,7,7]
console.log(unionRemix([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 7, 9])); // union is [1,2,2,2,6,6,7,7,9]
console.log(unionRemix([1, 2, 2, 2, 7, 7, 14], [2, 2, 6, 6, 7, 7])); // union is [1,2,2,2,6,6,7,7,14]
console.log(unionRemix([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 10])); // union is [1,2,2,2,6,6,7,7, 10]
console.log(unionRemix([1, 2, 2, 2, 7, 7], [2, 2, 6, 6, 7, 7, 7])); // union is [1,2,2,2,6,6,7,7,7]
console.log(unionRemix([1, 2, 2, 2, 7, 7, 7], [2, 2, 6, 6, 7, 7])); // union is [1,2,2,2,6,6,7,7,7]