var Quotes = [
  `“Be yourself; everyone else is already taken.”
    ― Oscar Wilde`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    ― Albert Einstein`,
  `“So many books, so little time.”
    ― Frank Zappa`,
  `“A room without books is like a body without a soul.”
    ― Marcus Tullius Cicero`,
  `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
    ― Dr. Seuss`,
  `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
    ― Dr. Seuss`,
  `“Be the change that you wish to see in the world.”
    ― Mahatma Gandhi`,
  `“In three words I can sum up everything I've learned about life: it goes on.”
    ― Robert Frost`,
  `“If you tell the truth, you don't have to remember anything.”
    ― Mark Twain`,
  `“A friend is someone who knows all about you and still loves you.”`,
  `
    “Always forgive your enemies; nothing annoys them so much.”
    ― Oscar Wilde`,
  `“To live is the rarest thing in the world. Most people exist, that is all.”
    ― Oscar Wilde`,
];

function newQuote() {
  var x = Math.floor(Math.random() * Quotes.length);

  document.getElementById("quote").innerHTML = Quotes[x];
}
