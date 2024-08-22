'use strict';
const gameEvents = new Map([
  [17, 'Goal'],
  [36, 'Substitution'],
  [47, 'Goal'],
  [61, 'Substitution'],
  [64, 'YellowCard'],
  [69, 'RedCard'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'Goal'],
  [80, 'Goal'],
  [92, 'YellowCard'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
gameEvents;

//3
console.log(
  `An event happend, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(
  `An event happend, on average, every ${time / gameEvents.size} minutes`
);

//4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
