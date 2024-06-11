'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
console.log();
const players = Object.values(game.scored);
let i = 1;
for (const player of players) {
  console.log(`Goal ${i}: ${player}`);
  i++;
}

//2
console.log();
const odds = Object.values(game.odds);

const calculateOddsAverage = () => {
  let oddsSum = 0;

  for (const odd in odds) {
    oddsSum += odd;
  }

  const average = oddsSum / odds.length;

  return average;
};

console.log(`Odds average = ${calculateOddsAverage()}`);

//3
console.log();
const [teamOneName, teamOneOdds] = [game.team1, game.odds.team1];
const [teamTwoName, teamTwoOdds] = [game.team2, game.odds.team2];
const [oddsDraw] = [game.odds.x];

console.log(`Odd of victory ${teamOneName}: ${teamOneOdds} `);
console.log(`Odd of draw: ${oddsDraw}`);
console.log(`Odd of victory ${teamTwoName}: ${teamTwoOdds} `);

//4 TODO: finish
class Player {
  constructor(name, goals) {
    (this.name = name), (this.goals = goals);
  }
}

let gameScores = {};

const playersList = Object.values(game.scored);

for (let player in playersList) {
  if (!Object.values(gameScores).includes(player)) {
    gameScores += player = new Player(player, 1);
  }
}

console.log();
console.log(gameScores);
console.log(playersList);
