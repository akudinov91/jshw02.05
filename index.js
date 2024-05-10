const quotes = [
  "Жизнь задыхается без цели.",
  "Оправдайте, не карайте, но назовите зло злом.",
  "Никто не вечен, ничто не вечно.",
  "Свобода не в том, чтоб не сдерживать себя, а в том, чтоб владеть собой.",
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function changeQuote() {
  const quoteDisplay = document.querySelector("#quoteDisplay");
  const newQuote = getRandomQuote();
  quoteDisplay.textContent = newQuote;

  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
  const textColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  quoteDisplay.style.color = textColor;
}

changeQuote();
setInterval(changeQuote, 5000);
