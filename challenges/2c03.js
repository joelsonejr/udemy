const scoreDolphin01 = 96;
const scoreDolphin02 = 108;
const scoreDolphin03 = 89;

const scoreKoalas01 = 88;
const scoreKoalas02 = 91;
const scoreKoalas03 =  110;

const scoreDolphins = (scoreDolphin01 + scoreDolphin02 + scoreKoalas03) / 3;
const scoreKoalas = (scoreKoalas01 + scoreKoalas02 + scoreKoalas03) / 3;

const scoreComparison = scoreDolphins - scoreKoalas;

if (scoreComparison > 0) {
  console.log(`Dolphins win the trophy`);
} else if (scoreComparison < 0) {
  console.log(`Koalas wind the trophy`);
} else {
  console.log(`Both win the trophy`);
}