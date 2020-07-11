/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//caputuring each element by ID from the HTML body
const quoteELMENT = document.getElementById("quote");
const sourceELEMENT = document.getElementById("source");
const citationELEMENT = document.getElementById("citation");
const yearELEMENT = document.getElementById("year");

/*** `quotes` array ***/

const qoutes = [
  {
    quote:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: 2016,
  },
  {
    quote: "Tough times don’t last. Tough people do.",
    source: "Robert H. Schuller",
    citation: "balancethroughsimplicity",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    source: "Steve Jobs",
    citation: "balancethroughsimplicity",
  },
  {
    quote: "Goals may give focus, but dreams give power.",
    source: "John Maxwell",
    citation: "balancethroughsimplicity",
  },
  {
    quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
    source: "Will Rogers",
    citation: "balancethroughsimplicity",
  },
  {
    quote: "When the going gets tough, the tough get going.",
    source: "Joe Kennedy",
    citation: "Keepinspiring",
  },
];

/*** `getRandomQuote` function ***/
function getRandomQuote() {
  //define let variables
  let randomQuote = [];
  let randomNUM = Math.floor(
    Math.random() * 6
  ); /*Random math function to generate random number in decimals 
      number from 0 to 5, multiply with 6 to have a range from 0 to 5 and rounding with
      floor function to make an integer */
  randomQuote = qoutes[randomNUM];
  //randomQuote is being assigned an random object from qoute array defined globally
  return randomQuote;
  //returing the random qoute to printQuote function
}

/*** `printQuote` function ***/
function printQuote() {
  const randomQoute = getRandomQuote();
  let cite = randomQoute.citation ? randomQoute.citation : "";
  let yearPublished = randomQoute.year ? randomQoute.year : "";

  /*checking if citation assigned to cite var\iabvles */
  if (cite.length == 0) {
    citationELEMENT.classList.remove("citation");
  } else {
    cite = `<span class="citation" id="citation">${cite}</span>`;
  }

  if (yearPublished.length == 0) {
    yearELEMENT.classList.remove("year");
  } else {
    yearPublished = `<span class="year" id="year">${yearPublished}</span>`;
  }

  quoteELMENT.innerHTML = randomQoute.quote;
  sourceELEMENT.innerHTML = randomQoute.source + cite + yearPublished;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
