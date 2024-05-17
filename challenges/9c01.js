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

/* //My Solution

// 1.
const [player1, player2] = [...game.players];

// 2.

const team1 = {
  name: game.team1,
  gk: '',
  fieldPlayers: [],
};

const team2 = {
  name: game.team2,
  gk: '',
  fieldPlayers: [],
};

[team1.gk, ...team1.fieldPlayers] = player1;
[team2.gk, ...team2.fieldPlayers] = player2;

// 3.
const allPlayers = [...player1, ...player2];

//4.
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const [firstOdd, drawOdd, ...secondOdd] = { ...game.odds };
console.log(firstOdd);
console.log(drawOdd);
console.log(secondOdd);

console.log({ ...game.odds });

const printGoals = function () {
  console.log;
}; */

//Solution

//1
const [players1, players2] = [...game.players];

//2
const [gk, ...fieldPlayers] = players1;

//3
const allPlayer = [...players1, ...players2];

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisisc'];

//5
const {
  odds: { team1, x: draw, team2 },
} = game;

//6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

//7
team1 < team2 && console.log(`Teams 1 is more likely to win.`);
team1 > team2 && console.log(`Teams 2 is more likely to win.`);
