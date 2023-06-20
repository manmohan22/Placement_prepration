const recursion1 = (num)=>{
    if(num<10) return num
    let sum = num%10
    return sum + recursion1(Math.floor(num/10)) 
    
}
// let num = 1237// 13
// console.log(sum)
// console.log(num)
console.log(recursion1(1237))