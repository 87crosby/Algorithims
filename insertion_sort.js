const insertionSort = (arr)=> {
    for(var i = 1; i < arr.length; i++){
        let j = i
        while(arr[j]< arr[j-1]){
            [arr[j], arr[j-1]]=[arr[j-1], arr[j]]
            j--
        }
    }
    return arr
    }


console.log(insertionSort([4,7,1,2,5,0,9,6])) 