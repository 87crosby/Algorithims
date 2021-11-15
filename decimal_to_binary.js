const dec2binary = (num) => {
    let binary = ''

    for(let i = Math.floor(Math.log2(num)); i >= 0; i--){
        if(num >= Math.pow(2, i)){
            num -= Math.pow(2, i)
            binary += '1'
        } else {
            binary +='0'
        }
        if(i%4 === 0){
            binary += ' '
        }
    }
    return binary
}

dec2binary(58)
