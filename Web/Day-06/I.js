

const DECKS = [
    ["Spade", "A"], ["Diamond", "A"],
    ["Spade", "2"], ["Diamond", "2"],
    ["Spade", "3"], ["Diamond", "3"],
    ["Spade", "4"], ["Diamond", "4"],
    ["Spade", "5"], ["Diamond", "5"],
    ["Spade", "6"], ["Diamond", "6"],
    ["Spade", "7"], ["Diamond", "7"],
    ["Spade", "8"], ["Diamond", "8"],
    ["Spade", "9"], ["Diamond", "9"],
    ["Spade", "10"], ["Diamond", "10"],
    ["Spade", "J"], ["Diamond", "J"],
    ["Spade", "Q"], ["Diamond", "Q"],
    ["Spade", "K"], ["Diamond", "K"],
    ["Club", "A"], ["Heart", "A"],
    ["Club", "2"], ["Heart", "2"],
    ["Club", "3"], ["Heart", "3"],
    ["Club", "4"], ["Heart", "4"],
    ["Club", "5"], ["Heart", "5"],
    ["Club", "6"], ["Heart", "6"],
    ["Club", "7"], ["Heart", "7"],
    ["Club", "8"], ["Heart", "8"],
    ["Club", "9"], ["Heart", "9"],
    ["Club", "10"], ["Heart", "10"],
    ["Club", "J"], ["Heart", "J"],
    ["Club", "Q"], ["Heart", "Q"],
    ["Club", "K"], ["Heart", "K"]
]

function pickCard(deck, card) {
    let indexInDeck = deck.findIndex((cardInDeck) => {
        return cardInDeck[0] == card[0] && cardInDeck[1] == card[1]
    });
    return deck.splice(indexInDeck, 1);
}

function calculateOdds(initialCards) {
    const uniqueCards = Array.from(unique(initialCards));
    if (uniqueCards.length == initialCards.length) {
        return {
            "Pair": initialCards.length <= 4 ?
                (uniqueCards.length * 3) / (52 - initialCards.length) : 0,
            "Two Pairs": 0,
            "Three of a kind": 0
        }
    } else if (uniqueCards.length == initialCards.length - 1) {
        if (initialCards.length <= 4) {
            return {
                "Pair": 1,
                "Two Pairs": ((uniqueCards.length - 1) * 3) / (52 - initialCards.length),
                "Three of a kind": 2 / (52 - initialCards.length),
            }
        } else {
            return {
                "Pair": 1,
                "Two Pairs": 0,
                "Three of a kind": 0
            }
        }
    } else if (uniqueCards.length == initialCards.length - 2) {
        let hasThreeOfAKind = uniqueCards.find((uniqueCard) => {
            return occurrence(initialCards, uniqueCard) == 3
        });
        if (hasThreeOfAKind) {
            return {
                "Pair": 1,
                "Two Pairs": initialCards.length == 4 ?
                    3 / (52 - initialCards.length) : 0,
                "Three of a kind": 1
            }
        } else { // Two Pair
            return {
                "Pair": 1,
                "Two Pairs": 1,
                "Three of a kind": initialCards.length == 4 ?
                    (2 * 2) / (52 - initialCards.length) : 0
            }
        }
    } else if (uniqueCards.length == initialCards.length - 3) {
        let hasFourOfAKind = uniqueCards.find((uniqueCard) => {
            return occurrence(initialCards, uniqueCard) == 4
        });
        if (hasFourOfAKind) {
            return {
                "Pair": 1,
                "Two Pairs": 0,
                "Three of a kind": 1
            }
        } else { // Full house
            return {
                "Pair": 1,
                "Two Pairs": 1,
                "Three of a kind": 1
            }
        }

    }
}

function unique(initialCards) {
    const set = new Set();
    for (let initialCard of initialCards) {
        set.add(initialCard[1]);
    }
    return set;
}

function occurrence(initialCards, uniqueNumber) {
    let count = 0;
    for (var initialCard of initialCards) {
        if (initialCard[1] == uniqueNumber) {
            count++
        }
    }
    return count;
}
