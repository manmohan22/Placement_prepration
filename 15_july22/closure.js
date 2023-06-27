function sum(a,b){
    let c=a+b;
    return function(){
        console.log(c)
    }
}
let print = sum(2,3)
print()