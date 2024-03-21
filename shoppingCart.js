const rates = {
  Carrot: 10,
  Apple: 200,
  Guava: 50,
};

const discounts = {
  // values are in percentages.
  Apple: 10,
};

const taxes = {
  // values are in percentages.
  Carrot: 5,
  Guava: 10,
};

const purchases = [
{
  item: 'Carrot',
  units: 20,
},
{
  item: 'Apple',
  units: 2,
},
{
  item: 'Guava',
  units: 1,
}
];

const getDiscountPercent = (productName) => (discounts[productName]||0)/100;


const getTaxPercent = (productName) => (taxes[productName]||0)/100;

const getUnitPrice = (itemName) =>{
     const discountAmount=rates[itemName]*getDiscountPercent(itemName);
     const taxAmount=rates[itemName]*getTaxPercent(itemName);
  
     return rates[itemName]-discountAmount+taxAmount;     
  };
  
const getLineItemPrice = (lineItem) =>{
  const unitPrice=getUnitPrice(lineItem.item);
  
  return unitPrice *lineItem.units;
};

const getSum = () => {
  const lineItemPrice= purchases.map(getLineItemPrice);
  console.log(lineItemPrice);
  const totalPrice=lineItemPrice.reduce((a,c)=>a+c);
  return totalPrice;
};

const main = () => console.log(getSum());

main();