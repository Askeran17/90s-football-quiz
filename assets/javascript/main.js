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

  