module.exports = function getZerosCount(number) {
  let sum = 0;
 while(number >= 5){
   sum+=Math.floor(number / 5);
   Math.floor(number = number / 5);
 }
 return sum;
}
