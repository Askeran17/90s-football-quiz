/*jshint esversion: 6 */
/*jshint sub:true*/

// I set this option so JSHint doesn't raise unnecessary warnings.”

//start screen
let startPage = document.querySelector('.start-display');
let startButton = document.getElementById('start-button');
let quizContainer = document.getElementById('quiz');

//when user click on start button
startButton.addEventListener('click', () => {
	startPage.classList.add('hide');
	quizContainer.classList.remove('hide');
  });

  quizContainer.classList.add('quiz');

  // Questions and Options array
const questions = [
	{
		question: "Which national team became world champion in 1998?",
		answers: ["Argentina", "France", "Brazil", "Germany"],
		correct: 2,
	},
	{
		question: "Who won the Ballon d'Or in 1995?",
		answers: [
			"Jurgen Klinsmann",
			"Roberto Baggio",
			"George Weah",
			"Hristo Stoichkov",
		],
		correct: 3,
	},
	{
		question: "Which club won the champions league in 1993?",
		answers: [
			"Olympique Marseille",
			"Werder Bremen",
			"Barcelona",
			"Bayern Munchen",
		],
		correct: 1,
	},
	{
		question: "Which Brazilian club won Copa Libertadores 1999?",
		answers: ["Flamengo", "Corinthians", "Gremio", "Palmeiras"],
		correct: 4,
	},

    {
		question: "How old was Ronaldo Fenomeno in 1994?",
		answers: ["17", "16", "18", "19"],
		correct: 1,
	},

    {
		question: "Who was the captain of Mexico at the 1998 World Cup?",
		answers: ["Claudio Suarez", "Alberto Garcia Aspe", "Ramon Ramirez", "Luis Garcia"],
		correct: 2,
	},

    {
		question: "What was the result in the 1990 World Cup final?",
		answers: ["2:1", "3:2", "1:0", "2:4"],
		correct: 3,
	},

    {
		question: "Who was the Swiss footballstar in 1996?",
		answers: ["Kubilay Turkyilmaz", "Alain Sutter", "Stephane Chapuisat", "Georges Bregy"],
		correct: 1,
	},

    {
		question: "Who was the top scorer at the 1994 World Cup?",
		answers: ["Romario", "Oleg Salenko", "Martin Dahlin", "Roberto Baggio"],
		correct: 2,
	},

    {
		question: "Which team missed the EURO 1992 because of the war?",
		answers: ["Poland", "Bulgaria", "Russia", "Yugoslavia"],
		correct: 4,
	},
];

// search elements
const headerBlock = document.querySelector('#header');
const listBlock = document.querySelector('#list');
const submitButton = document.querySelector('#submit');


// scores variables
let correctAnswer = 0; // number of correct answers
let wrongAnswer = 0; // number of wrong answers
let score = 0; // games scores
let questionIndex = 0; // current question

// start commands
clearPage();
showQuestion();
submitButton.onclick = checkAnswer;

// clear page HTML
function clearPage() {
    headerBlock.innerHTML = '';
    listBlock.innerHTML = '';

}

// start current question
function showQuestion(){
console.log('showQuestion');

// question
const headerTemplate = `<h2 class="title">%title%</h2>`;
const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);


headerBlock.innerHTML = title;

// answer options
let answerNumber = 1;
for (let answerText of questions[questionIndex]['answers']) {  
const questionTemplate = 
     `<li>
         <label>
    <input value="%number%" type="radio" class="answer" name="answer" />
    <span>%answer%</span>
</label>
</li>`;

const answerHTML = questionTemplate
.replace('%answer%', answerText)
.replace('%number%', answerNumber); 

listBlock.innerHTML += answerHTML;
answerNumber++;

}

}