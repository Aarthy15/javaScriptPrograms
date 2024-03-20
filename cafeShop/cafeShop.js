const csvTojson=require('csvtojson');

const getTotal =((product)=>{
   const total= (Number(product.Coffee) + Number(product.tea) + Number(product.biscate) +
   Number(product.cake) + Number(product.juice) ) * 12;

   return  total
});

const getTotalCost =((cost)=>{
   const totalExpenses= Number(cost.ElecticBill) + Number(cost.GasBill) +Number(cost.Employeesalery) +Number(cost.Incredienst) + 
   Number(cost.WaterBill) +Number(cost.ShopRent) +  Number(cost.WifiBill);

   return totalExpenses;
})

const getProfitLevel=(revenue)=>(300000 < revenue) ? "HighProfit" : "SmallProfit";

const  addFields=(cafeProductPrice,cafeShop)=> cafeProductPrice.map((cost)=>{
   const {Year}=cost;
   const totalCost= getTotalCost(cost);
   const product = cafeShop.find(({ year }) => year === Year);
   const total= getTotal(product);
   const revenue= total - totalCost;
   const profitLevel=getProfitLevel(revenue);
        
   return{
     Year,
     totalCost,
     total,
     revenue,
     profitLevel
  }
});

 const main= async() =>{
  const cafeProductPrice = await csvTojson().fromFile('/home/arsr/dev/javaScriptPrograms/cafeShop/cafeProductPrice.csv');
  const cafeShop = await csvTojson().fromFile('/home/arsr/dev/javaScriptPrograms/cafeShop/cafeShop.csv');
  const profitTable = await csvTojson().fromFile('/home/arsr/dev/javaScriptPrograms/cafeShop/profitTable.csv');
  const result=  addFields(cafeProductPrice,cafeShop);
  console.log(result);
} 

main();