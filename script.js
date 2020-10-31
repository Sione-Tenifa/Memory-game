const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  
    return array;
  }




let shuffledColors = shuffle(COLORS);
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");

    newDiv.classList.add(color);

    newDiv.addEventListener("click", handleCardClick);

    gameContainer.append(newDiv);
  }
}

let cardOne = null;
let cardTwo = null;
let cardsFlipped = 0;
let noClicking = false;

function handleCardClick(e) {

  let currentCard = e.target;
  currentCard.style.backgroundColor = currentCard.classList[0];

  if (!cardOne || !cardTwo) {
    currentCard.classList.add("flipped");
    cardOne = cardOne || currentCard;
    cardTwo = currentCard === cardOne ? null : currentCard;
  }

 e.preventDefault()

 let card = e.target;
 card.style.backgroundColor = card.classList.value


 const clickOne = e.target.classList

 console.log(clickOne)
 
 
}



// when the DOM loads
createDivsForColors(shuffledColors);
