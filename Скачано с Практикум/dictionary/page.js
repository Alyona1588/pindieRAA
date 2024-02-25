let container = document.getElementById("wordsContainer");
let englishInput = document.getElementById("englishWordInput");
let russianInput = document.getElementById("russianWordInput");
let addButton = document.getElementById("addButton");

function handleClick() {
  addCard(englishInput, russianInput, container);
}

addButton.addEventListener("click", handleClick);

renderCards(container, englishToRussianWords);
