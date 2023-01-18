let userName = prompt("Hello! Enter you name:");
const greetUser = () => {
  if (userName === null) {
    throw alert("Ok! Bye!");
  }
  if (userName === "") {
    alert("introduce any name");
    bingo();
  } else {
    console.log(`Welcome ${userName}
            You punctuation will we shown at the end. You have 1000 points and each round will be minus 10 points. 
            Good luck! Let's start`);
  }
  return userName;
};

let bingoNumbers = [];
const getRandomNumber = () => {
  let randomNumber = Math.ceil(Math.random() * 99);
  while (bingoNumbers.includes(randomNumber)) {
    randomNumber = Math.ceil(Math.random() * 99);
  }
  bingoNumbers.push(randomNumber);
  return randomNumber;
};

let card = [];
const getRandomCard = () => {
  bingoNumbers.splice(0, bingoNumbers.length);
  card.splice(0, card.length);
  do {
    let randomNum = getRandomNumber();
    card.push(randomNum);
  } while (card.length < 15);
  showBingoCard();
  return;
};

const askForNewCard = () => {
  let wantNewCard;
  do {
    getRandomCard();
    wantNewCard = confirm("Here is your card. Do you want a new one?");
  } while (wantNewCard === true);
  bingoNumbers.splice(0, bingoNumbers.length);
  return;
};

const showBingoCard = () => {
  console.log(`
        You bingo card is:
            [${card[0]},${card[1]},${card[2]},${card[3]},${card[4]}]
    
            [${card[5]},${card[6]},${card[7]},${card[8]},${card[9]}]
    
            [${card[10]},${card[11]},${card[12]},${card[13]},${card[14]}]
        `);
};

let stopAsking = false;
const cheekBingoNumber = () => {
  if (stopAsking === true) return;

  console.log("Your number is:");
  let cheekNumber = getRandomNumber();
  console.log(cheekNumber);
  for (let i = 0; i < card.length; i++)
    if (card[i] === cheekNumber) {
      console.log("You got one! Congrats!");
      card[i] = "X";
      alert("You got one! Congrats!");
      checkLine();
      showBingoCard();
      checkBingo();
    }
};

let keepAsking;
const askForNewNumber = () => {
  do {
    cheekBingoNumber();
    if (stopAsking === false) {
      keepAsking = confirm("New number?");
    }
  } while (keepAsking === true);
  stopAsking = false;
  playAgain();
  return;
};
let checkLines = false;
const checkLine = () => {
  if (
    (card.slice(0, 5).every((number) => number === "X") ||
      card.slice(5, 10).every((number) => number === "X") ||
      card.slice(10, 15).every((number) => number === "X")) &&
    checkLines === false
  ) {
    checkLines = true;
    alert("――――――――――――――LÍNEA――――――――――――――");
  }
};

const checkBingo = () => {
  if (card.every((number) => number === "X")) {
    console.log("BINGO!!!");
    alert(`BINGO! Congrats! You made it in ${bingoNumbers.length} rounds!`);
    getLeaderBoard();
    stopAsking = true;
    keepAsking = false;
  }
};

const playAgain = () => {
  let keepPlaying;

  card.splice(0, card.length);
  bingoNumbers.splice(0, bingoNumbers.length);
  keepPlaying = confirm("Play again?");

  if (keepPlaying === true) {
    bingo();
  } else {
    alert("Bye!");
    return;
  }
};

let leaderBoard = [
  { player: "Gemma", points: 110 },
  { player: "Vic", points: 70 },
  { player: "Carles", points: 60 },
  { player: "Pepe", points: 50 },
  { player: "Bernat", points: 40 },
];

const getLeaderBoard = () => {
  let newName = userName;
  const initialPoints = 1000;
  let finalPoints = initialPoints - bingoNumbers.length * 10;
  newPlayer = { player: newName, points: finalPoints };
  leaderBoard.unshift(newPlayer);
  showLeaderBoard();
};

const showLeaderBoard = () => {
  leaderBoard.sort(function compareNumbers(a, b) {
    return b.points - a.points;
  });
  alert(`The scores are:
        ${leaderBoard[0].player} --- ${leaderBoard[0].points} points
        ${leaderBoard[1].player} --- ${leaderBoard[1].points} points
        ${leaderBoard[2].player} --- ${leaderBoard[2].points} points
        ${leaderBoard[3].player} --- ${leaderBoard[3].points} points
        ${leaderBoard[4].player} --- ${leaderBoard[4].points} points
        ${leaderBoard[5].player} --- ${leaderBoard[5].points} points
        
        
        
        `);

  console.log(`
        Leader Board:
        ${leaderBoard[0].player} --- ${leaderBoard[0].points} points
        ${leaderBoard[1].player} --- ${leaderBoard[1].points} points
        ${leaderBoard[2].player} --- ${leaderBoard[2].points} points
        ${leaderBoard[3].player} --- ${leaderBoard[3].points} points
        ${leaderBoard[4].player} --- ${leaderBoard[4].points} points
        ${leaderBoard[5].player} --- ${leaderBoard[5].points} points
        
        `);
};

const bingo = () => {
  greetUser();
  askForNewCard();
  askForNewNumber();
};

bingo();
