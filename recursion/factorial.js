function fact(num){
  if(num==0){
    return 1;
  }
  else{
    return num * fact(num-1);
  }
}

let num=5;
let result= fact(num);

console.log(result);

//nested 

function fun(num){
  if(num>100){
    return num-10;
  }
  else{
    return fun(fun(num+11));
  }
}
console.log(fun(95));


//task Problem

const data = [{
  cost: 10,
  name: 'buildHouse',
  tasks: [
      {
          cost: 5,
          name: 'purchase material',
          tasks: [
              {
                  cost: 10,
                  name: 'purchase cement',
              },
              {
                  cost: 15,
                  name: 'purchase steel',
              },
          ],
      },
      {              
          cost:0,
          name: 'invite people',
      },
  ]
}];

const getData=(data)=>{
let totalCost=0;
for(let i=0;i<data.length;i++){
  totalCost+=data[i].cost;
  if(data[i].tasks){
    totalCost+=getData(data[i].tasks);
  }
}

return totalCost;
}

const total= getData(data); 
console.log( "Cost:"+total);