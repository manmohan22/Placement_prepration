const pushArr = (arr, val)=>{
    let len = arr.length
    arr[len] = val
    return arr
}

const popArr = (arr)=>{
    let len = []
    for(let i=0; i<arr.length-1;i++ ){
        len.push(arr[i])
    }
    return len
}

let arr = [10,60,20,40,80]
console.log(`orignal array ${arr}`)
console.log(pushArr(arr, 5))
console.log(`orignal array ${arr}`)
console.log(popArr(arr))

