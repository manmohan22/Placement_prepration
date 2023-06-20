const allPrimeNum = function(N){
    for(let i=1; i<N;i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}

const isPrime = function(num){
    let flag = true
    if(num === 1) return false
    for(let i=2; i<num; i++){
        if(num%i===0){
            flag = false
            
        }
    }
    return flag
}

allPrimeNum(12)