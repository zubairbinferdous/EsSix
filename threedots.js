const age = [10 , 11 , 21 , 20];
const ages = [11 , 26 , 28 , 30];
const ages2 = [ 88 , 70];
// const allName = age.concat(ages).concat(ages2).concat(258);
const allName = [...age,...ages,...ages2, 158];
console.log(allName);

const mani = 110;
const nan = 125;
const bni = 220;

const big = [ 110 , 125 , 220, 11110];
const maxNumber = Math.max(...big);
console.log(maxNumber);
