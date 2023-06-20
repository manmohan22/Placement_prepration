/**
 * function will take a value and it will check 3 condition?
 * 
 * number should be even 
 * number also a plindrom
 * number also divisble by 5
 * then we return great otherwise try again
 */

const checkNumber = function(num){
    if(isPlindrom(num) && num/4 && num%2==0){
        return "Great"
    }else{
        return "Try Again"
    }
}
const isPlindrom = function(N){
    let copy = N;
    let temp = 0;
    while(copy<0){
        temp = temp*10+(copy%10)
        copy = Math.floor(copy/10)
    }
    return(temp === N)

}

console.log(checkNumber(181))



















