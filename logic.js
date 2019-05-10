var gameWords = ["barrybonds", "hankaaron", "baberuth", "alexrodriguez", "williemays"];
var myGame = {
    words: gameWords,
    wins: 0,
    losses: 0,
    round: setupRound(randomWord(gameWords))
}

function randomWord(strArray) {
    return strArray[Math.floor(Math.random() * strArray.length)];
}

function isCorrectGuess(word, letter) {
    if (word.includes(letter)){
        return true;
    }
    else return false;
}

function getBlanks(word){
    var wordArr = Array.from(word);
    for (let i = 0; i < wordArr.length; i++) {
        wordArr[i] = "_";
    }
    return wordArr;
}

function fillBlanks(word,puzzleState,letter) {
    if (isCorrectGuess(word,letter)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                puzzleState[i] = letter;
            }    
        }
    }
    return puzzleState;
}

function setupRound(word) {
    var round = {
        word: word,
        guessesLeft: 9,
        wrongGuesses: [],
        puzzleState: getBlanks(word)
    }
    return round;
}

function updateRound(round,letter) {
    if (isCorrectGuess(round.word,letter)) {
        fillBlanks(round.word,round.puzzleState,letter);
        round.guessesLeft;
    } else {
        round.guessesLeft--;
        round.wrongGuesses = letter;
    }
}

function hasWon(puzzleState) {
    if (puzzleState.includes("_")) {
        return false;
    }
    return true;
    }

function hasLost(guessesLeft) {
    if (guessesLeft === 0) {
        return true;
    }
    return false;
}

function isEndOfRound(round) {
    if (round.puzzleState.includes("_") && round.guessesLeft != 0) {
        return false;
    } else if (round.puzzleState.includes("_") && round.guessesLeft === 0) {
        return true;
    } else if (round.puzzleState.includes("_") != true) {
        return true;
    }
    }

function setupGame(gameWords,numWins,numLosses) {
    var game = {
        words: gameWords,
        wins: numWins,
        losses: numLosses,
        round: setupRound(randomWord(gameWords))
    }
    return game;
}

function startNewRound(game) {
    if (hasLost(game.round.guessesLeft) === true) {
        game.losses++;
        window.alert("You lost! The word was " + game.round.word + ". Try again!");
    } else if (hasWon(game.round.puzzleState) === true) {
        game.wins++;
        window.alert("You Won! The word is " + game.round.word + "!");
    }
}