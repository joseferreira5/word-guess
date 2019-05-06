var gameWords = ["barrybonds", "hankaaron", "baberuth", "alexrodriguez", "williemays"];


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

console.log(randomWord(gameWords));
console.log(isCorrectGuess("baberuth","j"));    
console.log(getBlanks("baseball"));
console.log(fillBlanks("barrybonds",["_","_","_","_","_","_","_","_","_","_"],"b"));