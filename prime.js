let n=13;
let count=0;

for(let i=1 ; i<=n ; i++){
    if(n%i==0){
     count++;
  }
}

if(count<=2){
console.log("It is a Prime Number");
}else{
console.log("It is not a Prime Number");
}