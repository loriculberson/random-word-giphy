let randomWords = ['cat', 'dog', 'turtle', 'pig', 'mouse'];
let randomWordCount = randomWords.length;

const getRandomInt = (randomWordCount) => {
  return Math.floor(Math.random() * Math.floor(randomWordCount));
}

const getRandomWord = () => {
  const val = getRandomInt(randomWordCount);
  console.log(val, randomWords[val]);
  return randomWords[val];
}

const setup = () => {
  const word = getRandomWord();
  //make http request from front end to backend
  // tell backend what word has been selected
  const graphicUrl = `/get-graphic?word=${word}`;
  
  fetch(graphicUrl)
    .then((res) => res.text())
    .then((image) => console.log(image))
}

const submitButton = document.querySelector('.word-giphy');
submitButton.addEventListener('click', setup)