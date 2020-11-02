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
let twoCardsClicked = false;

function handleCardClick(e) {
  e.preventDefault()
   if( twoCardsClicked) return

  const clickOne = e.target.classList[0]

  if(e.target.classList.contains("clicked")) return

  let card = e.target;
  card.style.backgroundColor = card.classList.value

  if (cardOne || cardTwo === null) {
    card.classList.add("clicked");
    cardOne = cardOne || card;
    cardTwo = card === cardOne ? null : card;
  }
  console.log(clickOne)

  if(cardOne != null && cardTwo != null){
    console.log("you made it")
    twoCardsClicked = true
    if(cardOne.className === cardTwo.className){
      console.log("match")

      cardOne = null;
      cardTwo = null;
      twoCardsClicked = false;

    }else{
      setTimeout(function() {
        cardOne.style.backgroundColor = "";
        cardTwo.style.backgroundColor = "";
        cardOne.classList.remove("clicked");
        cardTwo.classList.remove("clicked");
        cardOne = null;
        cardTwo = null;
        twoCardsClicked = false;
      }, 1000);
    }
  }
  

 




 
 
}



// when the DOM loads
createDivsForColors(shuffledColors);
