
let a = [1,2,3,4,5]
for(i = 0 ; i>a.length;i++)
    {
    console.log(i);
    
}

let b = [1,2,3,4,5,6,7,8,9,10]
let sum = 0 
for (let i = 0; i < b.length; i++) {
  
;
if (b[i]%2 != 0) {

    sum = sum + b[i]
    
}
    //const test = b[i];
    // sum = test+i
    // console.log(sum);
   //sum = sum + b[i] 
    
}
console.log("sum of even numbers", sum)

function namesplit() {
 
let j = "Sharan"

for (let i = 0; i < j.length; j--) {
  console.log(j[i]);
  
    
}

let c = j.split('')

console.log(c.length);

console.log(c);

let y = c.reverse()

console.log(y);


}

namesplit()


let j = "Sharan"
let m = ''
for (let i = j.length-1; i >=0; i--) {
    
//   console.log(j[i]);
  m += j[i]

}

console.log(m);

//string splitting :

const namee = "Sharan M"
for (let i = 0; i < namee.length; i++) {
  console.log(namee[i]);
    let a = namee[i]
}
//String revers:
const n2 = "Sharan M"
console.log("");
let a2 = "";  
for (let i = n2.length -1 ; i >= 0; i--) {
   a2 = a2+n2[i]
}
console.log(a2);


// odd or even number

let eo = [1,2,3,4,5,6,7,8,9,10,12,14,15]
let sum1 = 0
let main = () =>{
  for (let i = 0; i < eo.length; i++) {
    if (eo[i]%2 === 0) {
      console.log(eo[i],"is even number");    
    }else{
      console.log(eo[i],"is odd number");
    }   
  }
}
main()

// fibonaci series:

let n = 10;
let x = 0; let y = 1;
console.log("fibbonaci series");
 for (let i = 0; i < n; i++) {
  console.log(x);
  let nxt = x+y;
  x = y;
  y = nxt; 
 }

//Function calling 
let a1 = (a,b) =>{
  console.log(`Addition is ${a+b}`);
  b1(a,b)
}
let b1 = (a,b) => {
  console.log("subtraction",a-b);
  c1(a,b)  
}
let c1 = (a,b) => {
  console.log("multiplication",a*b);
  d1(a,b)
}
 let d1 = (a,b) => {
  console.log("division"+a/b);
 }

 a1(2,3)

 // Nan (Data type) :

 let m5 = () => {

   let c = 'a'/5
    console.log(typeof c);
    console.log();
    
    
 }

 m5();

 // Return 

 let a11 = (a, b) => {
  const addition = a + b;
  const subtraction = b11(a, b);
  const multiplication = c11(a, b);
  const division = d11(a, b);

  return {
    addition,
    subtraction,
    multiplication,
    division
  };
};

let b11 = (a, b) => {
  return a - b;
};

let c11 = (a, b) => {
  return a * b;
};

let d11 = (a, b) => {
  return a / b;
};

const results = a11(2, 3);
console.log("Results:", results);