const quoteArray = [];
let index = 0;
let textPosition = 0;
let flag = true;
let destination = document.getElementById("typedtext");


const loadQuote = () => {
  const url = "https://api.quotable.io/random";

  fetch(url)
  .then((reponse) => reponse.json())
  .then((data) => quoteArray[index] =  data.content)
  .catch((err) => alert(err));
}

const typewrite = () => {
  if (flag) {
    loadQuote();
    quoteArray[index] += ' ';
    flag = false;
  }
  document.querySelector("#quote").innerHTML = quoteArray[index].substring(0, textPosition) + '<span>\u25AE</span>';
  
  if (textPosition++ != quoteArray[index].length) {
    setTimeout('typewrite()', 100);
  } else {
    quoteArray[index] = ' ';
    setTimeout('typewrite()', 3000);
    textPosition = 0;
    flag = true;
  }
}

window.addEventListener('load', typewrite);