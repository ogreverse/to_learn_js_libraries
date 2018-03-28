/**
 * 引数priceとtaxを乗算して返す
 * @param price
 * @param tax
 * @return {number}
 */
export default function taxCalculator(price ,tax) {
    return Math.round(price * tax);
}