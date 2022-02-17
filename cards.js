let buildDeck = function () {
    let deck = [];
    for (let rank = 2; rank < 15; rank++) {
        deck.push( createCard("Hearts", rank));
        deck.push( createCard("Spades", rank));
        deck.push( createCard("Clubs", rank));
        deck.push( createCard("Diamonds", rank));
    }
    return deck;

};
let createCard = function (suit, rank) {
    let name = getRankName(rank);
    let color = getSuitColor(suit);

    let card = {
        rank: rank,
        suit: suit,
        name: name,
        color: color,
    }
    return card;
};
let getSuitColor = function (suit) {
    if (suit === "Clubs" || suit === "Spades") {
        return "black";
        } else {
            return "red"
        }
};
let getRankName = function (rank) {
    switch (rank) {
        case 11:
            return "Jack";
        case 12:
            return "Queen";
        case 13:
            return "King";
        case 14:
            return "Ace";
        default:
            return rank.toString();
    }
};
let dealCard = function () {let index = Math.floor( Math.random() * deck.length);
    let card = deck.splice(index, 1) [0];
    return card;};
let dealHand = function () {
    return [dealCard(), dealCard(), dealCard(), dealCard(), dealCard()];
};
let dealCard2 = function () {let index = Math.floor( Math.random() * deck.length);
    let card = deck.splice(index, 1) [0];
    return card;};
let dealHand2 = function () {
    return [dealCard(), dealCard(), dealCard(), dealCard(), dealCard()];
};

let deck = buildDeck();
console.table(deck);

let hand = dealHand();
console.table(hand);

let hand2 = dealHand2();
console.table(hand2);












//figure out how to get the stuff in the terminal here
//use card-game.js for the actual website (https://r.search.yahoo.com/_ylt=AwrC5rJLLgViDlEAhRD8w8QF;_ylu=c2VjA2NkLWF0dHIEc2xrA3NvdXJjZQR2dGlkAwRydXJsA2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9djhhNjNvWHhuYzQ-/RV=2/RE=1644535499/RO=10/RU=https%3a%2f%2fwww.youtube.com%2fwatch%3fv%3dv8a63oXxnc4/RK=2/RS=8xAZseyKlRI76o_KLT03znSr6Dw-)

//for the win-lose situation, figure out how to create a thing that identifies which card has the higher number, then you could probably use the userinput thing from rps.js
//first, figure out how to call one card from both players hands