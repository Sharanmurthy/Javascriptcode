// Array methods

//sort & reverse

let week1 = ["Tue","Thu","Wed","Tue","Sat","Mon"]

let Alphabets = ["A","S","B","D","Z","K"]
var a = Alphabets.sort()
console.log(a);
console.log(a.reverse());

// map 

//filter

// reduce

let r1 = [1,2,3,4,5,6,7,8]
    let i = r1.length
    if (r1[i]>3) {
        const result = r1.reduce((c,d)=>{
        return (c+d) 
        }     
)
console.log( result)
    }

let r2 = [1,2,3,4,5,6,7,8]
for (let i = 3; i < r2.length; i++) {
 
     if (r2[i]>3) {
        const result = r2.reduce((i,r2)=>
        (i+r2) 
        )  

console.log("find",result);

}  else
{
    console.log("aaa");
    
}
}

let array = [1,2,3,4,5,6,7,8]

var result = array.reduce((acc,val) =>{
    if (val > 3) {
        
      return acc+val

       // console.log("if confition pass",result);
        
    }else{
        //console.log("if failed");
        return
      
    } 
} 
)
console.log("valuue",result);



let aa = [1, 2, 3, 4, 5, 6];

const sum = aa.reduce((acc, val) => {
    if (val > 3) {
        return acc + val;
    } else {
        return acc;
    }
});
console.log("Sum of values greater than 3:", sum);
   
