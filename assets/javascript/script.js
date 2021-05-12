randomQuote = async () => {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  console.log(`${data.content} —${data.author}`);
  const quote = document.querySelector(".quote");
  const author = document.querySelector(".author");
  quote.innerHTML = data.content;
  author.innerHTML = "-"+data.author;
};

randomQuote();
