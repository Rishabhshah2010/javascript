var myArr = [1,2,3,4];
for (let i = 0; i < 1; i++) {
   //myArr.push(1);
   
   var sum = myArr.reduce((total , amount) => total + amount+ 10,0);
}
console.log("The sum is " + sum);
