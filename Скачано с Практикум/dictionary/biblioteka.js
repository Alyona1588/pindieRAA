function createCard(englishWord, russianWord) {
  let wordBlock = document.createElement("div");
  let wordBlockHTML = `<h3>${englishWord}</h3><p>${russianWord}</p>`;
  wordBlock.innerHTML = wordBlockHTML;
  return wordBlock;
}

function renderCards(container, data) {
  container.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let card = createCard(data[i].english, data[i].russian);
    container.appendChild(card);
  }
}

function addCard(engInput, rusInput, container) {
  if (engInput.value !== "" && rusInput.value !== "") {
    let card = createCard(engInput.value, rusInput.value);
    container.appendChild(card);

    engInput.value = "";
    rusInput.value = "";
  } else {
    alert("Нужно заполнить все поля");
  }
}
