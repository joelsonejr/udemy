`use strict`

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

//Calculating the tip value
function calcTip(bills){
    for (let bill = 0; bill < bills.length; bill++) {
        let billValue = bills[bill];
        let tip =  billValue * 0.2;

        if (billValue >= 50 && billValue <= 300) {
            tip = billValue * 0.15;
        } 
        
        tips.push(tip);
        totals.push(billValue + tip);
    }
}

//Calculating the average of all the bills (tips included).
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let average = sum / arr.length;

    console.log(`Average = ${average}`);
}


calcTip(bills);
calcAverage(totals);


