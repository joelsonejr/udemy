function calcTip(billValue){
    let tip =  billValue * 0.2;

    if (billValue >= 50 && billValue <= 300) {
        tip = billValue * 0.15;
    } 
    return tip;
}

const bills = [125, 555, 44];
const tips = []
const totals = []

for (let i = 0; i < bills.length; i++){
    let tipValue = calcTip(bills[i]);
    tips.push(tipValue);

}
for (let i = 0; i < bills.length; i++){
    let billTotal = bills[i] + tips[i];
    totals.push(billTotal);
}

console.log(bills);
console.log(tips);
console.log(totals);