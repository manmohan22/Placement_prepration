const isPrime = function (num){
    let flag = true;
    for(let i=2; i<num; i++){
        if(num%i===0){
            flag = false
            break
        }
    }
    return flag 
   
}


// isPrime(11)
// isPrime(17)
// console.log(isPrime(9))




