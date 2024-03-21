const  getRandomNumber= (min, max) =>Math.floor(Math.random() * (max - min) + min) 

const getRandomHexChar= ()=>String.fromCharCode(getRandomNumber(64,123))

const getRandomString=(length) =>{
var str = "";
for(let i=0; i<length; i++){   
  str += getRandomHexChar(); 
 }
return str 
}

const getRandomUUID=() =>{
const arr=[8,4,4,4,12];
const final=[];
for(let i=0; i<arr.length; i++){   
  final.push(getRandomString(arr[i])); 
 }
  return final.join("-") 
}

console.log(getRandomNumber(0,10))
console.log(getRandomHexChar())
console.log(getRandomString(10))
console.log( getRandomUUID())
