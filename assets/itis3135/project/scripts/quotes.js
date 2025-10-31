const quotes = [
    "“The greatest threat to our planet is the belief that someone else will save it.” — Robert Swan",
    "“Buy less, choose well, make it last.” — Vivienne Westwood",
    "“Small acts, when multiplied by millions, can transform the world.” — Howard Zinn",
    "“You cannot get through a single day without having an impact...” — Jane Goodall"
  ];
  
  let quoteIndex = 0;
  const quoteBox = document.querySelector('blockquote');
  
  setInterval(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteBox.textContent = quotes[quoteIndex];
  }, 5000);