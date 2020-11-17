export default function calculateWinner(player1, player2) {
  return (3 + player1 - player2) % 3;
}
