function getCardValue(card) {
  const rank = card.slice(0, -1); // get rank
  const number = Number(rank); // convert to number

  if (rank === "A") return 11;
  if (!isNaN(number) && number >= 2 && number <= 10) return number;
  if (rank === "J" || rank === "Q" || rank === "K") return 10;
  throw new Error("Invalid card rank");
}
module.exports = getCardValue;
