const quotes = [
    "The pride of the peacock is the glory of God.",
    "Peacock bass like to hide at ambush points, away from the strong canal currents.",
    "Be like a peacock and dance with all of your beauty.",
    "The peacock has become one of my regular sources of inspiration from nature."
  ];
  
  function Quote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote;
  }
  
  generateRandomQuote();