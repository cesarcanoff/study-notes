// ESTRUTURAS CONDICIONAIS
var player_1 = 0, player_2 = 0, placar;

if (player_1 > 0) {
  console.log('Player 1 make a point!');
} else if (player_2 > 0) {
  console.log('Player 2 make a point!');
} else {
  console.log('No Points');
}

player_1 > 0 && player_2 > 0 ? console.log('Both have points') : console.log('All with zero');