let str = "madam";

   let bag = "";

for(let i=str.length-1 ; i>=0 ; i--){
    bag = str[i]+bag;
  }
if(bag==str){
console.log("It is a Palindrome");
}else{
console.log("It is not a Palindrome");
}