function changeText() {
  // Define the sample texts
  let sampleTexts = [
      "You are not the opinion of someone who doesn't know you. Taylor Swift",
      "I always liked those moments of epiphany, when you have the next destination. Brad Pitt",
      "We can't always agree on everything. Roger Federer",
      "I am one of those who think like Nobel, that humanity will draw more good than evil from new discoveries. Marie Curie",
      "The important thing is not to stop questioning. Albert Einstein"
  ];

  // Get a random index for the next text
  const randomIndex = getRandomNumberBetween(0, sampleTexts.length - 1);

  // Set the new text
  document.getElementById('heading').innerHTML = sampleTexts[randomIndex];
}

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
