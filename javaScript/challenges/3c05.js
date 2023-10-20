
const calcAverage = (score01, score02, score03) => (score01 + score02 + score03) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(85, 54, 41);

function checkWinner(avgDolphins, avgKoalas){
    
    const dolphinsWin = avgDolphins >= (2 * avgKoalas);
    const koalasWin = avgKoalas >= (2 * avgDolphins);

    if (dolphinsWin) {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas}) `);
    } else if (koalasWin){
        console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
    } else {
        console.log(`No team wins ...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);


