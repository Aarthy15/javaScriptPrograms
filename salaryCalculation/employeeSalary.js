const employee = [
  {
      "employeeid": 1,
      "name": "raju",
      "age": 34,
      "hiredate": "9/14/2018",
      "basic": 18000,
      "allowance": 15000,
      
  },
  {
      "employeeid": 2,
      "name": "vinu",
      "age": 29,
      "hiredate": "3/12/2018",
      "basic": 20000,
      "allowance": 8000,
     
  },
  {
      "employeeid": 3,
      "name": "neena",
      "age": 30,
      "hiredate": "8/8/2000",
      "basic": 30000,
      "allowance": 9000,
    
  },
  {
      "employeeid": 4,
      "name": "subha",
      "age": 25,
      "hiredate": "1/9/2017",
      "basic": 25000,
      "allowance": 9000
     
  },
  {
      "employeeid": 5,
      "name": "susma",
      "age": 32,
      "hiredate": "8/26/2021",
      "basic": 40000,
      "allowance": 7000
      
  },
  {
      "employeeid": 6,
      "name": "rani",
      "age": 27,
      "hiredate": "12/13/2021",
      "basic": 33000,
      "allowance": 5600,
     
  },
  {
      "employeeid": 7,
      "name": "vani",
      "age": 24,
      "hiredate": "9/8/2018",
      "basic": 35000,
      "allowance": 4200,
      
  },
  {
      "employeeid": 8,
      "name": "prem",
      "age": 29,
      "hiredate": "8/9/2018",
      "basic": 30000,
      "allowance": 2800,
      
  },
  {
      "employeeid": 9,
      "name": "bala",
      "age": 30,
      "hiredate": "10/29/2021",
      "basic": 43000,
      "allowance": 7400,
      
  },
  {
      "employeeid": 10,
      "name": "suresh",
      "age": 32,
      "hiredate": "9/14/2018",
      "basic": 38523,
      "allowance": 5000

      
  },
  {
      "employeeid": 11,
      "name": "tina",
      "age": 33,
      "hiredate": "7/26/2021",
      "basic": 40119,
      "allowance": 6400,
     
  },
  {
      "employeeid": 12,
      "name": "anitha",
      "age": 31,
      "hiredate": "11/1/2000",
      "basic": 41714,
      "allowance": 8000,
     
  },
  {
      "employeeid": 13,
      "name": "radha",
      "age": 27,
      "hiredate": "12/8/2010",
      "basic": 43309,
      "allowance": 5000,
      
  },
  {
      "employeeid": 14,
      "name": "gowtham",
      "age": 29,
      "hiredate": "4/9/2018",
      "basic": 36000,
      "allowance": 6000
    //   "monthlysalary": 42000,
    //   "Annualsalary": 504000,
    //   "bonus": 10,
    //   "bonusAmount": 4200
       
  }
];

const getMonthlySalary=(emp)=>emp.basic+emp.allowance;

const getAnnualSalary=(emp)=> getMonthlySalary(emp)* 12;

const getBonus=(emp)=>{
 return (getMonthlySalary(emp)>25000 &&  getMonthlySalary(emp)<=35000) ? 5
 :(getMonthlySalary(emp)>35000 &&  getMonthlySalary(emp)<=45000) ? 10
 :(getMonthlySalary(emp)>=45000)? 15
 :0
};

const getBonusAmount=(emp)=>getMonthlySalary(emp)*getBonus(emp)/100;

const getCalculateSalary=()=> employee.map((emp)=>
({
...emp,
"monthlySalary":getMonthlySalary(emp),
"annualsalary":getAnnualSalary(emp),
"bonus":getBonus(emp),
"bonusAmount":getBonusAmount(emp)

}));
const main=()=>{
const calculateSalary= getCalculateSalary();

return calculateSalary;
}
console.log(main());

