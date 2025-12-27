const getCardValue = require("./3-get-card-value");

//Case 1: Handle Ace (A):
test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });
// Case 2: Handle Number Cards (2-10):
test("should return 8 for 8 of Hearts", () => {
  const eightOfHearts = getCardValue("8♥");
  expect(eightOfHearts).toEqual(8);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return J for jack of Spades",() => {
    const JackOfSpades = getCardValue("J♠");
    expect(JackOfSpades).toEqual(10);
});
test("should return Q for Queen of Diamonds", () => {
  const queenofDiamonds = getCardValue("Q♦");
  expect(queenofDiamonds).toEqual(10);
});
test("should return K for King of Spades", () => {
  const kingOfSpades = getCardValue("K♠");
  expect(kingOfSpades).toEqual(10);
});
// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card rank", () => {
  expect(() => {
    getCardValue("F♠");
  }).toThrow("Invalid card rank");
});
