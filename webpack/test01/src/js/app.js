import additionCalculator from './modules/addition-calculator';
import taxCalculator from './modules/tax-calculator';

// 2つのアイテムの価格を合算し、消費税込みの価格を出力をするエントリーポイント。
const ITEM1_PRICE = 400;
const ITEM2_PRICE = 600;
const TAX = 1.08;

let totalPrice = additionCalculator(ITEM1_PRICE, ITEM2_PRICE);
let priceIncludeTax = taxCalculator(totalPrice, TAX);

console.log(priceIncludeTax);
console.log(ITEM1_PRICE);
