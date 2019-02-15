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
    .then((imageUrl) => displayImage(imageUrl))
}

const displayImage = (imageUrl) => {
  const giphyDiv = document.querySelector('.giphy')
  const giphy = document.createElement("img");
  giphy.setAttribute('src', imageUrl);
  giphyDiv.appendChild(giphy);
}

const submitButton = document.querySelector('.word-giphy');
submitButton.addEventListener('click', setup)