function anyOrder(num){
    while(num>0){
        let dig = num%10
        console.log(dig)
        num = Math.floor(num/10)
    }
    
}

anyOrder(1234)