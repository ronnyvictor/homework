const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]


let count = 0

function countTrues(arr) {
    for(let i=0; i < arr.length; i++){
        if(arr[i] === true){
            count ++
        }
    }
    return count
}

console.log(`We found ${countTrues(testArray)}`)