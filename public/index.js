
let randomWords = ['cat', 'dog', 'turtle', 'pig', 'mouse'];
let randomWordCount = randomWords.length;

const getRandomInt = (randomWordCount) => {
  return Math.floor(Math.random() * Math.floor(randomWordCount));
}

const getRandomWord = () => {
  const val = getRandomInt(randomWords.length);
  console.log(val, randomWords[val]);
  return randomWords[val];
}


const setup = () => {
  const word = getRandomWord();
  console.log(word);
}

const submitButton = document.querySelector('.word-giphy');
submitButton.addEventListener('click', setup)