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

let noClicking = false

function handleCardClick(event) {
  if(noClicking){
    console.log("FALSE")
  }



  // you can use event.target to see which element was clicked
  event.preventDefault()

  // console.log(COLORS)
 const clickOne = event.target.classList.value
 console.log(clickOne)
 
 
  // console.log("you just clicked", event.target);
}



// when the DOM loads
createDivsForColors(shuffledColors);
