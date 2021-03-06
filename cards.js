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
//console.table(deck);
let hand = dealHand();
//console.table(hand);

let hand2 = dealHand2();
//console.table(hand2);


// players, rules, win-lose
let player1 = {
    name: "Auden",
    hand: dealHand(),
 };
console.log(player1)

 let player2 = {
    name: "Computer",
    hand: dealHand2(),
 }; 
console.log(player2)


let sortByRank = function(hand) {
    return hand.sort(function(a, b) { return b.rank - a.rank });
  }
  sortByRank(hand);

let highestCard = hand[0];
