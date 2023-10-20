`use strict`

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

//Calculating the tip value
function calcTip(billValue){
    let tip =  billValue * 0.2;

    if (billValue >= 50 && billValue <= 300) {
        tip = billValue * 0.15;
    } 
    return tip;
}


//  TODO: Modificar o argumento da função para um array, e fazer a iteração do 
// mesmo.

/*
Use the calcTip function we wrote before (included in the starter code) to
calculate tips and total values (bill + tip) for every bill value in the bills 
array. Use a for loop to perform the 10 calculations!
*/