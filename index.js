// Your code here

function mapToNegativize( arr ) {
    let newArr = []
    for( let i=0; i<arr.length; i++ ){
        newArr.push(arr[i] * (-1))
    }
    return newArr
}

function mapToNoChange( arr ) {
    return arr
}

function mapToDouble( arr ) {
    let newArr = []
    for( let i=0; i<arr.length; i++ ){
        newArr.push(arr[i] * 2)
    }
    return newArr
}

function mapToSquare( arr ) {
    let newArr = []
    for( let i=0; i<arr.length; i++ ){
        newArr.push(arr[i] ** 2)
    }
    return newArr
}

function reduceToTotal( arr, start=0 ) {
    let result = 0
    for( let i=0; i<arr.length; i++ ){
        result += arr[i]
    }
    return result + start
}

function reduceToAllTrue( arr ) {
    let count = 0
    for( let i=0; i<arr.length; i++ ){
        if (!!arr[i]){
            count++
        }
    }
    if (count === arr.length){
        return true
    } else {
        return false
    }
}

function reduceToAnyTrue( arr ) {
    let count = 0
    for( let i=0; i<arr.length; i++ ){
        if (!!arr[i]){
            count++
        }
    }
    if (count >= 1){
        return true
    } else {
        return false
    }
}