const quadreticEqution = (a,b,c) =>{
    let result = b*b -4*a*c;
    if (result === 0.0){
        let root  = -b/(2*a)
        console.log(root,root)
    }else if(result>0){
        let root1 = (-b+Math.sqrt(b*b-4*a*c))/(2*a)
        let root2 = (-b-Math.sqrt(b*b-4*a*c))/(2*a)
        console.log(root1, root2)
    }else{
        console.log("no real root")
    }

}

quadreticEqution(1,5,1)