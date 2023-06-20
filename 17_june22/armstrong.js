const isArmstrong = function(num){
    let copy= num;
    let sum = 0
    while(copy>0){
        let dig = copy%10; 
        sum += dig**3
        copy= Math.floor(copy/10)
    }
    return(sum == num)
}
console.log(isArmstrong(370))