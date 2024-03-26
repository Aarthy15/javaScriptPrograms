const pattern=(n) =>{
  if(n==0){
    return;
  }
  else{
    let star="" ;
    for(let i=0;i<n;i++){
      star = star+" *" ;
    }
    pattern(n-1);
    console.log(star);
  }
}
pattern(5);


//Star
const  arrayLength= 5;
const  star= ' *';
const array= Array(arrayLength).fill(star);

const starPyramid=array.map((element,index)=> console.log( element.repeat(index+1)))

/*alphabets

const value=" ";
const array1= Array(arrayLength).fill(value);
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//const alphabetPyramid =array1.map((element,index)=>console.log(alphabets.slice(0,index)));
const alphabetPyramid1= console.log(alphabets.substring(0,index));*/


const value = " ";
const array1 = Array(arrayLength).fill(value);
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let index = 1; index <= arrayLength; index++) {
  const alphabetPyramid1 = console.log(alphabets.substring(0, index));
}


