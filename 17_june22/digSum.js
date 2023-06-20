const digSum = function(num){
    let sum  = 0
    while(num>0){
        let dig = num%10;
        sum= sum * 10 + dig;
        num = Math.floor(num/10)
    }
    return sum
}

console.log(digSum(370))